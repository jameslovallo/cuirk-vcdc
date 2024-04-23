import { md } from 'cuirk'
import { linkList } from '../src/components/index.js'
import links from '../src/data/links.js'
import planning from '../src/data/planning.js'

export const body = md`
# Our Community

We work with residents and businesses within the footprint that stretches from Mount Elliott Avenue in the west to St. Jean Street in the east, from Mack Avenue in the north going all the way down to the Detroit River. The Villages district consists of 18,000 Detroiters.

## Stay Informed

${linkList([
	{
		icon: 'EmailFast',
		title: 'Subscribe to Our Newsletter',
		href: links.newsletter,
	},
])}

## Development in The Villages

${linkList([
	{
		icon: 'TooltipCheck',
		title: 'Explore the Development Map',
		description: 'Locations, media, and developer survey',
		href: '/development',
	},
])}

## Planning Documents

${linkList(planning)}

## Neighborhoods Map

<iframe title="The Villages - Neighborhoods Map" src="https://www.google.com/maps/d/embed?mid=1Q2I583cXpVo_FJni4MiPYGvbOT8PxSFd&amp;ehbc=2E312F&amp;ll=42.359516211199654%2C-82.99607255000001&amp;z=13" frameborder="0" height="480" width="100%"></iframe>
`
