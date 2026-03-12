const fs = require('fs');

async function checkColors() {
   const url = "https://eu-west-2.graphassets.com/cmmjbw97104i108lcgwhdessh/cmmmtj64orcl307miz4jbsfr7";
   try {
     const Jimp = require('jimp');
     const image = await Jimp.read(url);
     let bW = true;
     image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        if (Math.abs(r - g) > 5 || Math.abs(r - b) > 5 || Math.abs(g - b) > 5) {
          bW = false;
        }
     });
     console.log('Is the image purely Black & White?:', bW);
   } catch(e) {
     console.log('Error:', e);
   }
}

checkColors();
