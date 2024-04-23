import * as icons from '@mdi/js'
import { html } from 'cuirk'

export const icon = ({ name, size = 24, color = 'currentColor' }) => html`
	<svg width="${size}" viewBox="0 0 24 24">
		<path d="${icons['mdi' + name]}" fill="${color}" />
	</svg>
`
