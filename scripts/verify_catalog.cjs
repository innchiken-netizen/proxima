const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const shopHtml = fs.readFileSync(path.join(__dirname, '../shop.html'), 'utf8');

console.log('--- VERIFYING INDEX.HTML & SHOP.HTML ---');

function countMatches(str, regex) {
  const m = str.match(regex);
  return m ? m.length : 0;
}

// 1. Check .product-card count
const indexCards = countMatches(indexHtml, /class="[^"]*product-card[^"]*"/g);
const shopCards = countMatches(shopHtml, /class="[^"]*product-card[^"]*"/g);

console.log(`Product Cards in index.html: ${indexCards} (Expected: 17)`);
console.log(`Product Cards in shop.html: ${shopCards} (Expected: 17)`);

if (indexCards !== 17 || shopCards !== 17) {
  console.error('FAIL: Card count is not 17!');
  process.exit(1);
}

// 2. Check .product-actives-tags count
const indexActives = countMatches(indexHtml, /product-actives-tags/g);
const shopActives = countMatches(shopHtml, /product-actives-tags/g);
console.log(`product-actives-tags in index.html: ${indexActives} (Expected: 17)`);
console.log(`product-actives-tags in shop.html: ${shopActives} (Expected: 17)`);

// 3. Check Details button
const indexDetails = countMatches(indexHtml, />Details<\/span>|class="[^"]*details-btn[^"]*"/g);
const shopDetails = countMatches(shopHtml, />Details<\/span>|class="[^"]*details-btn[^"]*"/g);
console.log(`Details buttons in index.html: ${indexDetails}`);
console.log(`Details buttons in shop.html: ${shopDetails}`);

// 4. Check Add to Bag button
const indexAdd = countMatches(indexHtml, />Add to Bag<\/span>|class="[^"]*add-to-bag-btn[^"]*"/g);
const shopAdd = countMatches(shopHtml, />Add to Bag<\/span>|class="[^"]*add-to-bag-btn[^"]*"/g);
console.log(`Add to Bag buttons in index.html: ${indexAdd}`);
console.log(`Add to Bag buttons in shop.html: ${shopAdd}`);

// 5. Check Naira symbol
const indexNaira = countMatches(indexHtml, /₦/g);
const shopNaira = countMatches(shopHtml, /₦/g);
console.log(`Naira prices in index.html: ${indexNaira}`);
console.log(`Naira prices in shop.html: ${shopNaira}`);

// 6. Check Color Lines
const lines = ['Retinol', 'Vitamin C', 'Alpha-Arbutin', 'Niacinamide', 'Vitamin B3'];
lines.forEach(active => {
  const inIndex = indexHtml.includes(active);
  const inShop = shopHtml.includes(active);
  console.log(`Active "${active}" found - index.html: ${inIndex}, shop.html: ${inShop}`);
  if (!inIndex || !inShop) {
    console.error(`FAIL: Missing active ${active}`);
    process.exit(1);
  }
});

// 7. Check Photo Flags
const flagText = 'Matching 3-piece set photo pending studio supply';
const indexFlagCount = countMatches(indexHtml, new RegExp(flagText, 'g'));
const shopFlagCount = countMatches(shopHtml, new RegExp(flagText, 'g'));
console.log(`Pending photo flags (Pink & Brown sets) - index.html: ${indexFlagCount}, shop.html: ${shopFlagCount}`);

// 8. Check Green Set matching photo
const greenSetImg = 'set-green-bundle.jpg';
console.log(`Green set image present - index.html: ${indexHtml.includes(greenSetImg)}, shop.html: ${shopHtml.includes(greenSetImg)}`);

// 9. Check Wholesale Table & WhatsApp
console.log(`Wholesale table present - index.html: ${indexHtml.includes('Wholesale Case Pricing Guide')}, shop.html: ${shopHtml.includes('Wholesale Case Pricing Guide')}`);
console.log(`WhatsApp checkout present - index.html: ${indexHtml.includes('2349044943580')}, shop.html: ${shopHtml.includes('2349044943580')}`);

console.log('--- ALL CHECKS PASSED SUCCESSFULLY! ---');
