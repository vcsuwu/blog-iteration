import { Navbar } from './components/Navbar.js';
import { BlogPage } from './components/BlogPage.js';
console.log("hola")
const links = [
  "link1",
  "link2"
]
let app = document.getElementById("app");
app.innerHTML = `
${Navbar({ links })}
${BlogPage()}
`
