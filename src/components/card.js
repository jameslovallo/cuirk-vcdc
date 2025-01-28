import { html, scss, when } from "recluse";

export const card = ({ image, title, description, href }) => {
  const tag = href ? "a" : "div";
  return html`
		<${tag} class="card ${href ? "r-action" : ""}" ${href ? `href="${href}"` : ""}>
			${when(image, html`<img src="${image}" />`)}
			${when(title, html`<p>${title}</p>`)}
			${when(description, html`<small>${description}</small>`)}
		</${tag}>
	`;
};

card.style = scss`
	.card {
		--card-padding: 0.75rem;
		background: var(--r-surface);
		border-radius: .25rem;
		display: grid;
		grid-template-rows: auto 1fr;
		padding-bottom: var(--card-padding);
		text-decoration: none;
		
		> *:not(img) {
			margin: var(--card-padding) var(--card-padding) 0;
		}
	}
`;
