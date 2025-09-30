const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Read and parse markdown files
function parseMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Normalize line endings
  const normalizedContent = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  
  // Check if file starts with frontmatter
  if (!normalizedContent.startsWith('---')) {
    console.log(`No frontmatter found in ${filePath}`);
    return null;
  }
  
  // Find the end of frontmatter
  const endIndex = normalizedContent.indexOf('\n---\n', 4);
  if (endIndex === -1) {
    console.log(`Malformed frontmatter in ${filePath}`);
    return null;
  }
  
  try {
    const frontmatterText = normalizedContent.substring(4, endIndex);
    const bodyText = normalizedContent.substring(endIndex + 5).trim();
    const frontmatter = yaml.load(frontmatterText);
    return { frontmatter, body: bodyText };
  } catch (err) {
    console.log(`Error parsing ${filePath}:`, err.message);
    return null;
  }
}

// Extract case studies
const caseStudiesDir = './content/case-studies';
const files = fs.readdirSync(caseStudiesDir).filter(file => file.endsWith('.md'));

console.log('='.repeat(80));
console.log('CASE STUDIES CONTENT FOR CMS');
console.log('='.repeat(80));
console.log();

files.forEach(file => {
  const filePath = path.join(caseStudiesDir, file);
  const parsed = parseMarkdownFile(filePath);
  
  if (parsed) {
    console.log(`📁 FILE: ${file}`);
    console.log('-'.repeat(50));
    console.log('📋 FRONTMATTER DATA:');
    console.log(JSON.stringify(parsed.frontmatter, null, 2));
    console.log();
    console.log('📝 CONTENT SECTIONS:');
    
    // Extract content sections
    const sections = ['overview', 'challenge', 'solution', 'results'];
    sections.forEach(section => {
      if (parsed.frontmatter[section]) {
        console.log(`${section.toUpperCase()}:`);
        console.log(parsed.frontmatter[section]);
        console.log();
      }
    });
    
    console.log('='.repeat(80));
    console.log();
  }
});

console.log('✅ You can now copy-paste this data into the CMS interface');
console.log('💡 Use the "New Case Studies" button in the CMS to create entries');