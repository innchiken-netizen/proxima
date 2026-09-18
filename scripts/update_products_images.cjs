const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/products.ts');
let content = fs.readFileSync(filePath, 'utf8');

const imageUpdates = [
  {
    sku: 'PDL-LOTION-PINK',
    image: '/images/proxima-lotion-pink.jpg',
    images: "['/images/proxima-lotion-pink.jpg', '/images/lifestyle-glow.jpg', '/images/proxima-packaging-angle.jpg']"
  },
  {
    sku: 'PDL-OIL-PINK',
    image: '/images/proxima-oil-pink.jpg',
    images: "['/images/proxima-oil-pink.jpg', '/images/proxima-oil-dropper-fit.jpg', '/images/lifestyle-outdoor.jpg']"
  },
  {
    sku: 'PDL-CREAM-PINK',
    image: '/images/proxima-cream-pink.jpg',
    images: "['/images/proxima-cream-pink.jpg', '/images/proxima-cream-texture-fit.jpg', '/images/lifestyle-wellness.jpg', '/images/lifestyle-routine.jpg']"
  },
  {
    sku: 'PDL-GEL-PINK',
    image: '/images/proxima-gel-pink.jpg',
    images: "['/images/proxima-gel-pink.jpg', '/images/proxima-soap-lather-fit.jpg', '/images/lifestyle-scrub.jpg']"
  },
  {
    sku: 'PDL-SET-PINK',
    image: '/images/proxima-set-pink.jpg',
    images: "['/images/proxima-set-pink.jpg', '/images/proxima-cream-texture-fit.jpg', '/images/proxima-oil-dropper-fit.jpg', '/images/lifestyle-bundle.jpg']"
  },
  {
    sku: 'PDL-LOTION-BROWN',
    image: '/images/proxima-lotion-brown.jpg',
    images: "['/images/proxima-lotion-brown.jpg', '/images/lifestyle-glow.jpg', '/images/proxima-packaging-angle.jpg']"
  },
  {
    sku: 'PDL-OIL-BROWN',
    image: '/images/proxima-oil-brown.jpg',
    images: "['/images/proxima-oil-brown.jpg', '/images/proxima-oil-dropper-fit.jpg', '/images/lifestyle-outdoor.jpg']"
  },
  {
    sku: 'PDL-CREAM-BROWN',
    image: '/images/proxima-cream-brown.jpg',
    images: "['/images/proxima-cream-brown.jpg', '/images/proxima-cream-texture-fit.jpg', '/images/lifestyle-wellness.jpg']"
  },
  {
    sku: 'PDL-GEL-BROWN',
    image: '/images/proxima-gel-brown.jpg',
    images: "['/images/proxima-gel-brown.jpg', '/images/proxima-soap-lather-fit.jpg', '/images/lifestyle-scrub.jpg']"
  },
  {
    sku: 'PDL-SET-BROWN',
    image: '/images/proxima-set-brown.jpg',
    images: "['/images/proxima-set-brown.jpg', '/images/proxima-gel-brown.jpg', '/images/proxima-cream-texture-fit.jpg', '/images/lifestyle-bundle.jpg']"
  },
  {
    sku: 'PDL-LOTION-GREEN',
    image: '/images/proxima-lotion-green.jpg',
    images: "['/images/proxima-lotion-green.jpg', '/images/proxima-set-green.jpg', '/images/proxima-packaging-angle.jpg']"
  },
  {
    sku: 'PDL-OIL-GREEN',
    image: '/images/proxima-oil-green.jpg',
    images: "['/images/proxima-oil-green.jpg', '/images/proxima-oil-dropper-fit.jpg', '/images/proxima-set-green.jpg']"
  },
  {
    sku: 'PDL-CREAM-GREEN',
    image: '/images/proxima-cream-green.jpg',
    images: "['/images/proxima-cream-green.jpg', '/images/proxima-cream-texture-fit.jpg', '/images/proxima-set-green.jpg']"
  },
  {
    sku: 'PDL-GEL-GREEN',
    image: '/images/proxima-gel-green.jpg',
    images: "['/images/proxima-gel-green.jpg', '/images/proxima-soap-lather-fit.jpg', '/images/proxima-set-green.jpg']"
  },
  {
    sku: 'PDL-SET-GREEN',
    image: '/images/proxima-set-green.jpg',
    images: "['/images/proxima-set-green.jpg', '/images/proxima-cream-texture-fit.jpg', '/images/proxima-oil-dropper-fit.jpg', '/images/lifestyle-bundle.jpg']"
  },
  {
    sku: 'PDL-SOAP-MULATTO',
    image: '/images/proxima-soap-mulatto.jpg',
    images: "['/images/proxima-soap-mulatto.jpg', '/images/proxima-soap-mulatto-angle.jpg', '/images/proxima-soap-lather-fit.jpg', '/images/lifestyle-scrub.jpg']"
  },
  {
    sku: 'PDL-OIL-SNOWWHITE',
    image: '/images/proxima-oil-snowwhite.jpg',
    images: "['/images/proxima-oil-snowwhite.jpg', '/images/proxima-oil-dropper-fit.jpg', '/images/lifestyle-outdoor.jpg']"
  }
];

imageUpdates.forEach(u => {
  // Replace image: '...' for this SKU
  const skuIndex = content.indexOf(`sku: '${u.sku}'`);
  if (skuIndex === -1) {
    console.error(`SKU ${u.sku} not found!`);
    return;
  }
  
  // Find the next image property
  const imagePropIndex = content.indexOf("image: '", skuIndex);
  const lineEndIndex = content.indexOf("\n", imagePropIndex);
  
  const currentLine = content.substring(imagePropIndex, lineEndIndex);
  const newLine = `image: '${u.image}',\n    images: ${u.images},`;
  
  content = content.substring(0, imagePropIndex) + newLine + content.substring(lineEndIndex + 1);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated all 17 product image paths and gallery images in products.ts!');
