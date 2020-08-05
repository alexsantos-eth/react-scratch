// GLOB
import glob from 'glob'
import path from 'path'
import fs from 'fs'

// PATHS
const root: string = './src'
const dest: string = './dist'

// FILES
const filesEXT: string[] = [
	'.jpg',
	'.png',
	'.jpeg',
	'.gif',
	'.css',
	'.json',
	'.md',
	'.woff2',
	'.woff',
	'.ttf',
	'.otf',
	'.svg',
	'.scss',
	'.sass',
	''.tsx'
]

// LEER ARCHIVOS A COPIAR
glob(`${root}**/**`, {}, (err, files) => {
	// ERROR HANDLING
	if (err) return console.log('Error reading files ', err)

	// ARCHIVOS
	console.log('Copying static files ...')
	for (const filePath of files) {
		if (filesEXT.includes(path.extname(filePath))) {
			const outPath: string = dest + filePath.substr(root.length)
			fs.copyFile(filePath, outPath, (cErr: NodeJS.ErrnoException) => {
				if (cErr) console.log('Error copying files ', cErr)
				else console.log(filePath)
			})
		}
	}
})
