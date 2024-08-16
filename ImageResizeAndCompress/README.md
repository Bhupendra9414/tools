## Image Resizing and Compression Script

This Node.js script uses the `sharp` library to resize and compress images within a specified input folder. The script ensures that the resized images fit within a maximum width and height, preserving the aspect ratio without cropping the images. If the output folder does not exist, it is created automatically.

### How It Works:

1. **Input and Output Folders**:
   - The script reads images from a specified input folder (`./images` by default).
   - Processed images are saved to an output folder (`./resizedImages` by default). If the output folder does not exist, it is created automatically.

2. **Resizing**:
   - Images are resized to fit within the specified maximum dimensions (`maxWidth = 248`, `maxHeight = 186` by default).
   - The aspect ratio of the images is maintained, ensuring no cropping occurs.

3. **Compression**:
   - The images are compressed using the PNG format with adjustable quality (`quality = 100` by default).
   - The `withoutEnlargement` option ensures that images are not upscaled if they are smaller than the specified dimensions.

4. **File Types Supported**:
   - The script processes `.jpg`, `.jpeg`, and `.png` files.

5. **Execution**:
   - The script processes each image in the input folder and saves the resized and compressed versions to the output folder.
   - Logs are printed to the console for each image processed.

### How to Use:

1. Ensure you have Node.js installed.
2. Install the required `sharp` package:
   ```bash
   npm install sharp
