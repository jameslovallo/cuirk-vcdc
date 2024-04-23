import { css, html } from 'cuirk'

export const dialog = ({ id, trigger, children }) => html`
	<div class="dialog">
		<button onclick="${`document.getElementById('${id}').show()`}">
			${trigger}
		</button>
		<dialog id="${id}">
			<div class="content">
				<div class="scroll">${children}</div>
				<form method="dialog">
					<button>Close</button>
				</form>
			</div>
		</dialog>
	</div>
`

dialog.style = css`
	.dialog {
		> button {
			background: transparent;
			border: none;
			border-radius: 0;
			cursor: pointer;
			display: block;
			padding: 0;
		}

		dialog[open] {
			align-items: center;
			border: none;
			bottom: 0;
			display: flex;
			justify-content: center;
			min-height: 100%;
			left: 0;
			margin: 0;
			position: fixed;
			right: 0;
			top: 0;
			min-width: 100%;
			z-index: 99999;

			> .content {
				display: grid;
				gap: 1rem;
				width: min(80vw, 70ch);

				> .scroll {
					max-height: 70vh;
					overflow: auto;
				}
			}
		}
	}

	body:has(dialog[open]) {
		overflow: hidden;
	}
`
