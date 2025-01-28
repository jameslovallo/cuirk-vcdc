import { md } from 'recluse'

export const meta = {
	title: 'Events',
	scripts: [
		{
			type: 'module',
			src: 'https://unpkg.com/@snappywc/calendar',
		},
	],
}

export const body = md`
# Events

<snappy-calendar
calendar="thevillagesofdetroit.com_kotkvbjdq9h3gf370nts69dgv0%40group.calendar.google.com"
key="AIzaSyC-wbQGNzMWBi6ouRFahaHF_lXzB0IZ7Ow"
format="list"></snappy-calendar>

<style>
	snappy-calendar::part(event-name) {
		color: inherit;
		text-decoration: underline;
		text-decoration-color: var(--c-primary);
	}
</style>
`
