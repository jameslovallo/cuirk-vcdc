import { html, md } from 'cuirk'
import { contactForm, grid, linkList } from '../src/components/index.js'
import contactInfo from '../src/data/contact.js'

export const meta = {
	title: 'Contact Us',
}

export const body = md`
# Contact Us

${grid(
	html`
		<div>
			<h2>Contact Information</h2>
			${linkList(contactInfo[0])}
		</div>
		<div>
			<h2>Volunteer or Donate</h2>
			${linkList(contactInfo[1])}
		</div>
	`
)}

## Leave a Message

${contactForm()}
`
