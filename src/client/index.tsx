import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
const mode = window.localStorage.getItem("mode")
if(!mode) {
import(`./scss/index.scss`)
.then((module) => {
    console.log(module.cssExports)
})
} else {
    import(`./scss/index2.scss`)
    .then((module) => {
        console.log(module.cssExports)
    })
}


render(<App />, document.getElementById("root"));