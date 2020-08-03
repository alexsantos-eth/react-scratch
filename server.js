// REACT
const React = require('react')
const ReactDOM = require('react-dom/server')

// APP
const App = require('./dist/App/App').default

// FILESYSTEM
const path = require('path')
const fs = require('fs')

// INDEX PATH
const indexPath = path.resolve(__dirname, 'public', 'index.html')

// PARSE HTML
const toHTML = (component, buffer) =>
	buffer
		.replace(
			'<div id="root"></div>',
			`<div id="root">${ReactDOM.renderToString(React.createElement(component))}</div>`
		)
		.replace('<script src="../dist/bundle.js"></script>', '')

console.log('\n😴 Esperando a leer archivo de inicio ...\n')

fs.readFile(indexPath, 'utf-8', (err, data) => {
	if (err) console.log('Error while reading index')
	else {
		console.log('🤖 Configurando servidor ...\n')

		// RENDER APP
		const finalHTML = toHTML(App, data)
		fs.writeFile(indexPath, finalHTML, () =>
			console.log(
				'😎 Aplicacion renderizada correctamente ... \n⚛️ Compilando archivos de React ...\n'
			)
		)
	}
})
