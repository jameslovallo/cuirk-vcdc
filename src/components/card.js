import { html, scss, when } from 'cuirk'

export const card = ({ image, title, description, href }) => {
	const tag = href ? 'a' : 'div'
	return html`
		<${tag} class="card" ${href ? `href="${href}"` : ''}>
			${when(image, html`<img src="${image}" />`)}
			${when(title, html`<p>${title}</p>`)}
			${when(description, html`<small>${description}</small>`)}
		</${tag}>
	`
}

card.style = scss`
	.card {
		--card-padding: 0.75rem;
		background: var(--c-surface);
		border: var(--c-border);
		border-radius: .25rem;
		color: var(--c-surface-color);
		display: grid;
		grid-template-rows: auto 1fr;
		padding-bottom: var(--card-padding);
		text-decoration: none;
		
		> *:not(img) {
			margin: var(--card-padding) var(--card-padding) 0;
		}
	}
`
