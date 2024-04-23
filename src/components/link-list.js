import { css, html, loop } from 'cuirk'
import { iconLink } from './icon-link.js'

export const linkList = (links) => html`
	<ul class="link-list">
		${loop(links, iconLink)}
	</ul>
`

linkList.style = css`
	.link-list {
		display: grid;
		gap: 1rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}
`
