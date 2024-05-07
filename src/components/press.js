import { html, scss } from 'cuirk'

export const press = ({ title, publisher, href }) => html`
	<div class="press">
		<p>${title}</p>
		<div>
			<a href="${href}">Read More</a>
			<small>${publisher}</small>
		</div>
	</div>
`

press.style = scss`
	.press {
		
		&:not(:last-child) {
			border-bottom: var(--c-border);
			margin-bottom: 1.5rem;
			padding-bottom: 1.5rem;
		}

		div {
			align-items: baseline;
			display: flex;
			justify-content: space-between;
		}
	}
`
