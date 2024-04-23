import { css, html } from 'cuirk'

export const homeHeader = ({ eyebrow, title }) => html`
	<div class="home-header">
		<img src="/src/images/global/logo.svg" />
		<div>
			<h1><small>${eyebrow}</small>${title}</h1>
		</div>
	</div>
`

homeHeader.style = css`
	.home-header {
		align-items: center;
		display: flex;
		flex-flow: row wrap;
		margin-top: 3rem;

		img {
			margin-right: 3rem;
			width: 200px;
		}

		h1 {
			display: grid;
		}
	}
`
