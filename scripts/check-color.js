const fs = require('fs');

async function isColorful(buffer) {
  // Use pure JS to check if pixels are grayscale
  const Jimp = require('jimp');
  try {
    const image = await Jimp.read(buffer);
    let colorfulPixels = 0;
    let totalPixels = 0;
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // If the difference between max and min RGB values is significant
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      
      if (max - min > 10) {
        colorfulPixels++;
      }
      totalPixels++;
    });
    
    const percentage = (colorfulPixels / totalPixels) * 100;
    console.log(`Colorful pixels: ${percentage.toFixed(2)}%`);
    return percentage > 5; // if at least 5% pixels are colorful
  } catch(e) { console.error('Error analyzing image:', e); }
}

async function run() {
  const url = "https://eu-west-2.graphassets.com/cmmjbw97104i108lcgwhdessh/cmmmtj64orcl307miz4jbsfr7";
  console.log('Fetching', url);
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  await isColorful(Buffer.from(buffer));
}

run();
