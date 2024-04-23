import { css, html, loop } from 'cuirk'
import links from '../data/nav.js'
import { dialog } from './dialog.js'
import { icon } from './icon.js'
import { link } from './link.js'

export const nav = () => {
	const left = links.filter(({ position }) => position === 'start')
	const center = links.filter(({ position }) => position === 'center')
	const right = links.filter(({ position }) => position === 'end')
	return html`
		<nav>
			<div>
				${dialog({
					id: 'nav',
					trigger: icon({ name: 'Menu' }),
					children: html`
						<div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
							${loop(links, link)}
						</div>
					`,
				})}
				${loop(left, link)}
			</div>
			<div>${loop(center, link)}</div>
			<div>${loop(right, link)}</div>
		</nav>
	`
}

nav.style = css`
	nav {
		background: var(--nav-bg, black);
		color: var(--nav-color, white);
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, auto);
		padding: 1rem;

		> div {
			align-items: center;
			display: flex;
			gap: 1rem;

			&:not(:first-child):not(:last-child) {
				justify-content: center;
			}

			&:last-child {
				justify-content: end;

				@media (max-width: 767px) {
					a:not(:last-child) {
						display: none;
					}
				}
			}

			@media (min-width: 768px) {
				.dialog {
					display: none;
				}
			}

			a {
				color: inherit;
				text-decoration: none;
			}
		}
	}
`
