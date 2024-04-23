import { html } from 'cuirk'

export const link = ({ title, href, target = '_self' }) =>
	html`<a href="${href}" target="${target}"> ${title} </a>`
