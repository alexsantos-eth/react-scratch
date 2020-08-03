// REACT
import React from "react";

// HOT LOADER
import { hot } from "react-hot-loader";

const App:React.FC = () => {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default hot(module)(App);