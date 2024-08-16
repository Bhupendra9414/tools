const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function resizeAndCompressImage(inputFolder, outputFolder, maxWidth = 248, maxHeight = 186, quality = 100) {
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true });
    }

    fs.readdir(inputFolder, (err, files) => {
        if (err) {
            console.error('Error reading input folder:', err);
            return;
        }

        files.forEach(file => {
            const ext = path.extname(file).toLowerCase();
            if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
                const inputPath = path.join(inputFolder, file);
                const outputPath = path.join(outputFolder, file);

                sharp(inputPath)
                    .resize({
                        width: maxWidth,
                        height: maxHeight,
                        fit: sharp.fit.inside,  // This ensures the image fits within the max dimensions without cropping
                        withoutEnlargement: true // Prevents the image from being upscaled
                    })
                    .png({ quality: quality })  // Adjust compression quality for PNG
                    .toFile(outputPath)
                    .then(info => {
                        console.log(`Processed ${file}:`, info);
                    })
                    .catch(err => {
                        console.error('Error processing image:', err);
                    });
            }
        });
    });
}

const inputFolder = './images';
const outputFolder = './resizedImages';
resizeAndCompressImage(inputFolder, outputFolder);
