import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
const file = 'public/image/TheBohemian/788404_15011311540024438551.webp';
sharp(file).metadata().then(metadata => {
    console.log(`Width: ${metadata.width}, Height: ${metadata.height}, Size: ${metadata.size}`);
}).catch(console.error);
