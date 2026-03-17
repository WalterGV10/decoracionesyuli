
const fs = require('fs');
const path = require('path');

const galleryPath = 'c:/Users/wgarc/Documents/decoracionesyuli/src/data/gallery.json';
const publicDir = 'c:/Users/wgarc/Documents/decoracionesyuli/public';

const gallery = JSON.parse(fs.readFileSync(galleryPath, 'utf8'));
const imagesInPublic = fs.readdirSync(publicDir);

console.log('Checking gallery images...');
gallery.forEach(item => {
    const imgName = item.imageUrl.startsWith('/') ? item.imageUrl.substring(1) : item.imageUrl;
    const fullPath = path.join(publicDir, imgName);
    if (!fs.existsSync(fullPath)) {
        console.log(`MISSING: ${item.imageUrl} (id: ${item.id})`);
    } else {
        // console.log(`OK: ${item.imageUrl}`);
    }
});
