import { css, html } from 'cuirk'

export const grid = (children, size = '30ch') =>
	html`<div class="grid" style="--grid-size: ${size}">${children}</div>`

grid.style = css`
	.grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(var(--grid-size), 1fr));
	}
`
