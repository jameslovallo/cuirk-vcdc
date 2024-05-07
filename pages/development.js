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
	.question {
		display: flex;
		justify-content: flex-end;
	}
	.bubble {
		border: 1px solid rgba(155, 155, 155, 0.5);
		border-radius: 1rem;
		display: inline-block;
		max-width: 66%;
		padding: 0.75rem;
	}
	.question .bubble {
		background: var(--surface-heavy);
		border-bottom-right-radius: 2px;
		border-color: var(--c-primary);
	}
	.answer .bubble {
		border-bottom-left-radius: 2px;
	}
	footer {
		display: none;
	}
</style>
`
