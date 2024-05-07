import { html, scss } from 'cuirk'
import { modal } from '../components/index.js'

export const staffCard = ({ name, description, index }) =>
	modal({
		trigger: html`
			<button class="staff-card">
				<img src="/src/images/staff/${name}.webp" />
				<span>${name}</span>
			</button>
		`,
		children: html` <p>${description}</p> `,
	})

staffCard.style = scss`
	.staff-card {
		background: var(--c-surface);
		border: var(--c-border);
		color: var(--c-surface-color);
		cursor: pointer;
		display: block;
		padding: 0;

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
