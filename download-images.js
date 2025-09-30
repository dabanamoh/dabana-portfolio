const fs = require('fs');
const path = require('path');
const https = require('https');

// Function to extract case studies data from the static data file
function extractCaseStudiesData() {
    const dataFilePath = path.join(__dirname, 'js', 'case-studies-data.js');
    let dataContent = fs.readFileSync(dataFilePath, 'utf8');
    
    // Remove the window assignments at the end of the file
    dataContent = dataContent.replace(/window\.[\s\S]*?;/g, '');
    
    // Extract the caseStudiesData object
    const caseStudiesMatch = dataContent.match(/const caseStudiesData = ({[\s\S]*?});/);
    if (caseStudiesMatch) {
        // Evaluate the JSON-like object (this is safe since we control the file)
        const caseStudiesDataStr = caseStudiesMatch[1]
            .replace(/([\w\-]+):/g, '"$1":') // Add quotes to keys
            .replace(/'/g, '"') // Convert single quotes to double quotes
            .replace(/,\s*}/g, '}') // Remove trailing commas
            .replace(/,\s*]/g, ']'); // Remove trailing commas in arrays
        
        try {
            return JSON.parse(caseStudiesDataStr);
        } catch (parseError) {
            console.error('Error parsing case studies data:', parseError);
            // Fallback to regex extraction
            return extractCaseStudiesWithRegex(dataContent);
        }
    }
    
    throw new Error('Could not extract case studies data from file');
}

// Fallback method to extract case studies using regex
function extractCaseStudiesWithRegex(dataContent) {
    const caseStudies = {};
    
    // Match each case study object
    const caseStudyMatches = dataContent.matchAll(/"([^"]+)":\s*{([\s\S]*?)(?=\n\s*"[^"]+":|\n\};)/g);
    
    for (const match of caseStudyMatches) {
        const caseId = match[1];
        const caseContent = match[2];
        
        // Extract key-value pairs
        const caseStudy = {};
        caseStudy.id = caseId;
        
        // Extract simple string values
        const stringMatches = caseContent.matchAll(/"([^"]+)":\s*"([^"]*)"/g);
        for (const stringMatch of stringMatches) {
            caseStudy[stringMatch[1]] = stringMatch[2];
        }
        
        // Extract stats array
        const statsMatch = caseContent.match(/"stats":\s*$(.*?)$/s);
        if (statsMatch) {
            try {
                caseStudy.stats = JSON.parse(`[${statsMatch[1]}]`);
            } catch (e) {
                caseStudy.stats = [];
            }
        }
        
        // Extract gallery array
        const galleryMatch = caseContent.match(/"gallery":\s*$(.*?)$/s);
        if (galleryMatch) {
            try {
                caseStudy.gallery = JSON.parse(`[${galleryMatch[1]}]`);
            } catch (e) {
                caseStudy.gallery = [];
            }
        }
        
        // Extract other arrays
        const tagsMatch = caseContent.match(/"tags":\s*$(.*?)$/s);
        if (tagsMatch) {
            try {
                caseStudy.tags = JSON.parse(`[${tagsMatch[1]}]`);
            } catch (e) {
                caseStudy.tags = [];
            }
        }
        
        caseStudies[caseId] = caseStudy;
    }
    
    return caseStudies;
}

// Image downloader function
async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        // Create directory if it doesn't exist
        const dir = path.dirname(filepath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Downloaded: ${filepath}`);
                    resolve(filepath);
                });
            } else {
                file.close();
                fs.unlink(filepath, () => {}); // Delete temp file
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            file.close();
            fs.unlink(filepath, () => {}); // Delete temp file
            reject(err);
        });
    });
}

// Extract all image URLs from case studies
function extractImageUrls(caseStudies) {
    const urls = new Set();
    
    Object.values(caseStudies).forEach(study => {
        // Add hero image
        if (study.heroImage && study.heroImage.startsWith('https://images.unsplash.com/')) {
            urls.add(study.heroImage);
        }
        
        // Add gallery images
        if (study.gallery && Array.isArray(study.gallery)) {
            study.gallery.forEach(img => {
                if (img.url && img.url.startsWith('https://images.unsplash.com/')) {
                    urls.add(img.url);
                }
            });
        }
    });
    
    return Array.from(urls);
}

// Generate local path for a URL based on which case study uses it
function generateLocalPathForUrl(url, caseStudies) {
    // Find which case study uses this image
    for (const [caseId, study] of Object.entries(caseStudies)) {
        // Check hero image
        if (study.heroImage === url) {
            return path.join('images', caseId, 'hero.jpg');
        }
        
        // Check gallery images
        if (study.gallery && Array.isArray(study.gallery)) {
            const galleryImage = study.gallery.find(img => img.url === url);
            if (galleryImage) {
                // Generate filename based on alt text or default
                const altText = galleryImage.alt || 'gallery-image';
                const filename = altText
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '') || 'image';
                return path.join('images', caseId, `${filename}.jpg`);
            }
        }
    }
    
    // Default fallback
    try {
        const urlObj = new URL(url);
        const pathname = urlObj.pathname;
        const imageName = pathname.split('/').pop() || 'image';
        return path.join('images', 'shared', imageName);
    } catch (error) {
        return path.join('images', 'shared', 'image.jpg');
    }
}

// Main function to download all images
async function downloadAllImages() {
    try {
        console.log('Starting image download process...');
        
        // Get all case studies from the static data
        const caseStudies = extractCaseStudiesData();
        
        // Extract all image URLs
        const imageUrls = extractImageUrls(caseStudies);
        console.log(`Found ${imageUrls.length} unique images to download`);
        
        // Download each image
        let successCount = 0;
        let failureCount = 0;
        
        for (const url of imageUrls) {
            try {
                const localPath = generateLocalPathForUrl(url, caseStudies);
                await downloadImage(url, localPath);
                successCount++;
            } catch (error) {
                console.error(`Failed to download ${url}:`, error.message);
                failureCount++;
            }
        }
        
        console.log(`\nDownload complete!`);
        console.log(`Successfully downloaded: ${successCount} images`);
        console.log(`Failed to download: ${failureCount} images`);
        
        console.log('\nNote: Image paths in the static data file are already set to local paths.');
        console.log('No need to update the data file since images are already referenced locally.');
        
    } catch (error) {
        console.error('Error during image download process:', error);
    }
}

// Run the download process
downloadAllImages();