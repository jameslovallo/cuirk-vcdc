import { loop, md } from 'cuirk'
import { card, flyer, grid, homeHeader } from '../src/components/index.js'

export const meta = {
	scripts: [
		{
			type: 'module',
			src: '/src/islands/donation-meter.js',
		},
	],
}

const cards = [
	{
		title: 'Volunteer',
		image: '/src/images/home/volunteer.webp',
		href: 'https://villagesofdetroit.typeform.com/to/xIrcG1I3',
	},
	{
		title: 'Our Community',
		image: '/src/images/home/community.webp',
		href: '/our-community',
	},
	{
		title: 'Events',
		image: '/src/images/home/events.webp',
		href: '/events',
	},
]

export const body = md`
${homeHeader({ eyebrow: 'Welcome to', title: 'The Villages' })}

## Keep It In the Family

Our housing program is unique in that, to date, we have helped enroll 28 households in the Villages to get clear title, set up estate planning, and do minor home repairs that enable our clients to keep their homes (literally) within their families. Due to the success of our program, the work we have done is now being replicated across the city by other organizations! You can assist us in helping more of our own community members by buying a ticket to our spring fundraiser, Building the Villages, or by making a donation directly to us. Any amount helps!

In January 2025, we will begin enrolling another cohort of ten households to Keep It In the Family, provided they live in our service area that stretches from Mount Elliott Avenue in the west to St. Jean Street in the east, from Mack Avenue in the north going all the way down to the Detroit River. Together, we can make a difference for a lot of families in our great community!

${flyer()}

## We Are The Villages

## About Us

The Villages CDC is a non-profit organization dedicated to accelerating economic development in the Villages of Detroit, a collection of neighborhoods located on Detroit’s east side. Through business attraction, community advocacy and organizing, and urban design and planning, the Villages CDC seeks to strengthen and preserve the social and economic fabric of one of the most diverse and longstanding communities in Detroit.

## Get Involved

${grid(loop(cards, card), '20ch')}
`
