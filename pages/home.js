import { loop, md } from 'cuirk'
import {
	card,
	grid,
	homeHeader,
	linkList,
	youtube,
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

## We Are The Villages

<div style="align-items: center; display: flex; flex-flow: row wrap; gap: 1rem;">
	${youtube({ id: '8vLRWEoQLQo', width: '300px' })}
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
	.card {
		text-align: center;
	}
</style>
`
