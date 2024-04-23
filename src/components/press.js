import { css, html } from 'cuirk'

export const press = ({ title, publisher, href }) => html`
	<div class="press">
		<p>${title}</p>
		<div>
			<a href="${href}">Read More</a>
			<small>${publisher}</small>
		</div>
	</div>
`

press.style = css`
	.press {
		&:not(:last-child) {
			border-bottom: 1px solid rgba(155, 155, 155, 0.5);
			margin-bottom: 1.5rem;
			padding-bottom: 1.5rem;
		}
		div {
			align-items: baseline;
			display: flex;
			justify-content: space-between;
		}
		a {
			text-decoration: none;
		}
	}
`
