/**
 * Quote Normalizer for JavaScript Files
 * 
 * This script processes JavaScript files containing const arrays/objects and normalizes
 * string quote usage based on content. It follows these rules:
 * - Uses single quotes (') by default
 * - Only uses double quotes (") when the string contains unescaped single quotes
 * 
 * Input:
 *   A JavaScript file containing const declarations like:
 *   const myArray = {
 *     "unnecessary double quotes": 'single quotes',
 *     'string with apostrophe\'s': "string with apostrophe's"
 *   }
 * 
 * Output:
 *   Creates two files in ./output/:
 *   1. arrays_only.js - Contains only the normalized const declarations
 *   2. full_file_modified.js - The complete file with normalized quotes
 * 
 * Usage:
 *   node quote-normalizer.js path/to/your/file.js
 * 
 * Requirements:
 *   - Node.js
 *   - Read/write permissions in the script directory (for creating output folder)
 */

const fs = require('fs');

function needsDoubleQuotes(str) {
    // Only use double quotes if the string contains an unescaped single quote
    // that isn't already escaped
    return str.includes("'") && !str.includes("\\'");
}

function normalizeQuotes(str, currentQuoteType) {
    // Remove current quotes from the string
    const unquoted = str.slice(1, -1);

    if (needsDoubleQuotes(unquoted)) {
        return `"${unquoted}"`;
    }
    // Default to single quotes
    return `'${unquoted}'`;
}

function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');

    // Find all const object/array declarations
    const constPattern = /const\s+(\w+)\s*=\s*{[\s\S]*?};/g;
    const matches = [...content.matchAll(constPattern)];

    let isolatedArrays = '';
    let modifiedContent = content;

    matches.forEach(match => {
        const originalBlock = match[0];
        let modifiedBlock = originalBlock;

        // Find all string literals in the block, capturing the quote type
        const stringPattern = /(['"])((?:\\.|[^\\])*?)\1/g;
        const strings = [...originalBlock.matchAll(stringPattern)];

        strings.forEach(([fullMatch, quoteType, innerContent]) => {
            const normalizedQuote = normalizeQuotes(fullMatch, quoteType);
            modifiedBlock = modifiedBlock.replace(fullMatch, normalizedQuote);
        });

        isolatedArrays += modifiedBlock + '\n\n';
        modifiedContent = modifiedContent.replace(originalBlock, modifiedBlock);
    });

    // Write output files
    const outputDir = './output';
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    fs.writeFileSync(`${outputDir}/arrays_only.js`, isolatedArrays);
    fs.writeFileSync(`${outputDir}/full_file_modified.js`, modifiedContent);

    return {
        isolatedArrays,
        modifiedContent
    };
}

// Example usage
if (require.main === module) {
    const filePath = process.argv[2];
    if (!filePath) {
        console.error('Please provide a file path as an argument');
        process.exit(1);
    }

    try {
        processFile(filePath);
        console.log('Processing complete! Check the output directory for results.');
    } catch (error) {
        console.error('Error processing file:', error);
    }
}

module.exports = {
    processFile,
    normalizeQuotes
};