import { loop, md } from 'cuirk'
import {
	card,
	flyer,
	grid,
	homeHeader,
	linkList,
	sponsorList,
} from '../src/components/index.js'
import links from '../src/data/links.js'

export const meta = {
	scripts: [
		{
			type: 'module',
			src: '/src/islands/donation-meter.js',
		},
		{
			type: 'module',
			src: '//unpkg.com/cuick-dev/components/typer.js',
		},
		{
			type: 'module',
			src: '//unpkg.com/cuick-dev/components/youtube.js',
		},
	],
}

const cards = [
	{
		title: 'Volunteer',
		image: '/src/images/home/volunteer.webp',
		href: links.volunteer,
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

${sponsorList()}

<c-youtube vid="pcH2KAH6F-4"></c-youtube>

## We Are The Villages

<div style="align-items: center; display: flex; flex-flow: row wrap; gap: 1rem;">
	<c-youtube vid="F5jNdIujCr4" style="flex-basis: 300px; flex-grow: 1;"></c-youtube>
	${linkList([
		{ icon: 'Sprout', title: 'Strategic Plan', href: '/what-we-do' },
		{
			icon: 'EmailFast',
			title: 'Our Newsletter',
			href: links.newsletter,
		},
	])}
</div>

## About Us

The Villages CDC is a non-profit organization dedicated to accelerating economic development in the Villages of Detroit, a collection of neighborhoods located on Detroit’s east side. Through business attraction, community advocacy and organizing, and urban design and planning, the Villages CDC seeks to strengthen and preserve the social and economic fabric of one of the most diverse and longstanding communities in Detroit.

## Get Involved

${grid(loop(cards, card), '20ch')}

<style>
	h2 {
		margin-top: 3rem;
	}
</style>
`
