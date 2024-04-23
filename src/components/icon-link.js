import { html, scss, when } from 'cuirk'
import { icon } from './icon.js'

export const iconLink = ({ icon: path, title, description, href }) => html`
	<li class="icon-link">
		<a href="${href}">
			<span class="icon">${icon({ name: path })}</span>
			<span class="text">
				${when(title, html`<span>${title}</span>`)}
				${when(description, html`<small>${description}</small>`)}
			</span>
		</a>
	</li>
`

iconLink.style = scss`
	.icon-link a {
		align-items: center;
		color: inherit;
		display: flex;
		gap: 1rem;
		padding-right: 1rem;
		position: relative;
		text-decoration: none;

		&:hover {
			&:before {
				background: var(--primary);
				border-radius: 4rem;
				bottom: 0;
				content: '';
				left: 0;
				opacity: 0.1;
				position: absolute;
				right: 0;
				top: 0;
			}
		}

		.icon {
			background: var(--primary);
			padding: 0.75rem;
			border-radius: 100%;
		}

		.text {
			display: grid;

			small {
				opacity: 0.7;
			}
		}
	}
`
