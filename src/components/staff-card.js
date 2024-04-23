import { css, html } from 'cuirk'
import { dialog } from './dialog.js'

export const staffCard = ({ name, description, index }) =>
	dialog({
		id: `staff-card-${index}`,
		trigger: html`
			<span class="staff-card">
				<img src="/src/images/staff/${name}.webp" />
				<h3>${name}</h3>
			</span>
		`,
		children: html` <p>${description}</p> `,
	})

staffCard.style = css`
	.staff-card {
		background: black;
		border: 1px solid rgba(155, 155, 155, 0.2);
		color: white;
		display: block;
		text-align: center;
		img {
			aspect-ratio: 2 / 3;
			max-width: 100%;
			object-position: top;
		}
		span {
			margin: 1rem 0;
		}
	}
`
