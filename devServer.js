// FILESYSTEM
const path = require('path')
const fs = require('fs')

// INDEX PATH
const indexPath = path.resolve(__dirname, 'public', 'index.html')

// PARSE HTML
const toHTML = (buffer) => buffer.replace(buffer.substr(buffer.indexOf('<div id="root">')), '<div id="root"></div><script src="../dist/bundle.js"></script></body></html>')

console.log('😴 Esperando a leer archivo de inicio ...\n')

fs.readFile(indexPath, 'utf-8', (err, data) => {
    if(err) console.log('Error while reading index')
    else{
        console.log('🤖 Configurando servidor ...\n')

        // RENDER APP
        const finalHTML = toHTML(data)
        
        // REMPLAZAR HTML DEV
        fs.writeFile(indexPath, finalHTML, () => console.log('😎 Servidor de desarrollo listo ... \n'))
    }
})