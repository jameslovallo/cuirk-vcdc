import { html, scss } from 'recluse'

export const homeHeader = ({ eyebrow, title }) => html`
	<div class="home-header">
		<img src="/src/images/global/logo.svg" />
		<div>
			<h1><small>${eyebrow}</small>${title}</h1>
			<ardi-typer
				base="Stronger neighborhoods through"
				words="equity, inclusion, diversity"
			></ardi-typer>
		</div>
	</div>
`

homeHeader.style = scss`
	.home-header {
		align-items: center;
		display: flex;
		flex-flow: row wrap;
		gap: 2rem;
		margin-top: 3rem;

		img {
			width: 200px;
		}

		h1 {
			display: grid;
			font-size: 3rem;
			line-height: 1;
			margin: 0 0 1rem;

			small {
				font-size: 1.5rem;
				margin-bottom: 0.5rem;
			}
		}
	}
`
