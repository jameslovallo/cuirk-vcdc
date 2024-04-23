import { css, html } from 'cuirk'

export const footer = () => html`
	<footer>
		<a
			href="https://thevillagesofdetroit.us10.list-manage.com/subscribe/post?u=491160fdb6c928b779465812e&id=df5c91e13e"
		>
			Subscribe to Our Newsletter
		</a>
		<p>
			© ${new Date().getFullYear()} The Villages of Detroit. All Rights
			Reserved.
		</p>
	</footer>
`

footer.style = css`
	footer {
		background: var(--footer-bg, black);
		color: var(--footer-color, white);
		display: grid;
		gap: 1rem;
		justify-content: center;
		padding: 2rem 1rem;
		position: sticky;
		text-align: center;
		top: 100vh;

		a {
			color: inherit;
		}

		p {
			margin: 0;
		}
	}
`
