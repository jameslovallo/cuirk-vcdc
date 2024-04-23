import { md } from 'cuirk'

export const meta = {
	title: 'Development',
	description: 'Locations, media, and developer survey',
	links: [
		{
			rel: 'stylesheet',
			href: 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css',
		},
	],
	scripts: [
		{
			type: 'module',
			src: '../src/islands/developer-map.js',
		},
		{
			type: 'module',
			src: 'https://unpkg.com/cuick-dev/components/compare.js',
		},
	],
}

export const body = md`
<div id="map"></div>
<style>
	#map {
		bottom: 0;
		left: 0;
		position: fixed;
		right: 0;
		top: 3rem;
	}
	footer {
		display: none;
	}
</style>
`
