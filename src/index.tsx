// REACT
import React from 'react'
import { hydrate, render } from 'react-dom'

// APP
import App from 'App/App'

// ROOT
const root: HTMLDivElement = document.getElementById('root') as HTMLDivElement

// RENDER
if (!root.hasChildNodes()) render(<App />, root)
else hydrate(<App />, root)
