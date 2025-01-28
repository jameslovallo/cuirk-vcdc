import { css, html } from "recluse";

export const grid = (children, size = "30ch") =>
	html`<div class="grid" style="--grid-size: ${size}">${children}</div>`;

grid.style = css`
	.grid {
		align-items: center;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(var(--grid-size), 1fr));
	}
`;
