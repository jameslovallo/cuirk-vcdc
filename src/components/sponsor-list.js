import { html, loop, scss } from 'recluse'
import sponsors from '../data/sponsors.js'

const sponsorLink = ({ image, href }) => html`
	<a href="${href}" target="_blank">
		<img src="${image}" />
	</a>
`

export const sponsorList = () => html`
	<div class="sponsors">
		<h2>Sponsors</h2>
		<div class="row">${loop(sponsors, sponsorLink)}</div>
	</div>
`

sponsorList.style = scss`
	.sponsors {
		margin-bottom: 3rem;
		text-align: center;

		.row {
			display: flex;
			flex-flow: row wrap;
			gap: 2rem;
			justify-content: center;

			img {
				height: 4rem;
			}
		}
	}
`
