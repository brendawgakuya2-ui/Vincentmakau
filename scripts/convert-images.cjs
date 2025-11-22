const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const imagesDir = path.join(__dirname, '..', 'src', 'assets', 'images')

async function convert() {
  const files = fs.readdirSync(imagesDir).filter(f => f.match(/\.(jpg|jpeg|png)$/i))
  for (const file of files) {
    const input = path.join(imagesDir, file)
    const name = path.parse(file).name
    const out = path.join(imagesDir, `${name}.webp`)
    try {
      await sharp(input).resize({width: 1920}).webp({quality: 80}).toFile(out)
      console.log('Created', out)
    } catch (e) {
      console.error('Failed to convert', input, e.message)
    }
  }
}

convert()
