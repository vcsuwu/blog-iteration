export const Navbar = ({ links }) => {

  let html = ""

  for (let link of links) {
    html += `
    <li class="nav__item"><a class="nav__link" href="#${link}">${link}</a></li>\n
    `
  }

  return `
    <nav class="nav">
      <ul class="nav__list">
        ${html}
      </ul>
    </nav>
  `
}
