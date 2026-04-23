export const BlogPage = () => {
  return `
		<main class="main">
			<article class="article">
				<h1>Hollow's Blog</h1>
				<p>Hello, im hollow and this is my blog. Here i post my path on becoming a web developer, as well as some useful information about websites!</p>
			</article>
			<article class="article">
				<h1>About me</h1>
				<p>My name is Eugene. I like programming :)</p>
				<p>My technical stack is:</p>
				<ol class="article__list">
					<li>Frontend
						<ol>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
						</ol></li>
					<li>Backend
						<ol>
							<li>Python</li>
							<li>Node.js</li>
						</ol></li>
					<li>Dev-tools
						<ol>
							<li>Neovim</li>
							<li>Nix</li>
						</ol></li>
				</ol>
			</article>
			<article class="article">
				<h1>Recent posts:</h1>
				<p>Ooops... I dont have any posts yet!</p>
			</article>
			<article class="article">
				<h1>Contact me:</h1>
				<p>There are several sources where you can reach out to me from:</p>
				<ul>
					<li>Telegram</li>
					<li>E-Mail</li>
				</ul>
			</article>
		</main>
  `
}
