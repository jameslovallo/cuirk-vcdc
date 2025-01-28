import { html, scss } from "recluse";
import { modal } from "../components/index.js";

export const staffCard = ({ name, description, index }) =>
  modal({
    open: html`
      <button class="staff-card r-action">
        <img src="/src/images/staff/${name}.webp" />
        <span>${name}</span>
      </button>
    `,
    children: html` <p>${description}</p> `,
  });

staffCard.style = scss`
	.staff-card {
		background: var(--r-surface);
		border: var(--c-border);
		color: var(--c-surface-color);
		cursor: pointer;
		display: block;
		padding: 0;

		&:hover {
			background: var(--c-primary-hover);
		}

		&:active {
			background: var(--c-primary-active);
		}

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
`;
