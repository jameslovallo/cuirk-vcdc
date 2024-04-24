import { html, scss } from 'cuirk'
import { dialog } from './dialog.js'

export const staffCard = ({ name, description, index }) =>
	dialog({
		id: `staff-card-${index}`,
		trigger: html`
			<span class="staff-card">
				<img src="/src/images/staff/${name}.webp" />
				<span>${name}</span>
			</span>
		`,
		children: html` <p>${description}</p> `,
	})

staffCard.style = scss`
	.staff-card {
		background: black;
		border: 1px solid rgba(155, 155, 155, 0.2);
		color: white;
		display: block;

		img {
			aspect-ratio: 2 / 3;
			max-width: 100%;
			object-position: top;
		}
		
		span {
			display: block;
			letter-spacing: 1px;
			margin: 1rem 0;
			text-align: center;
		}
	}
`
