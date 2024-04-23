import { css, html } from 'cuirk'

export const link = ({ title, href, target = '_self', invisible = false }) =>
	html`
		<a
			href="${href}"
			target="${target}"
			${invisible ? 'class="invisible"' : ''}
		>
			${title}
		</a>
	`

link.style = css`
	a.invisible {
		color: inherit;
		text-decoration: none;
	}
`
