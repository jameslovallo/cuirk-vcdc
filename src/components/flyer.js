import { html, scss } from 'recluse'
import { grid } from './grid.js'

export const flyer = () => html`
	<section class="flyer">
		<img
			src="/src/images/fundraiser/name.webp"
			alt="The Villages of Detroit cordially invites you to: The Village People, April 26 5-9pm."
		/>
		<p>
			Come catch some disco fever with us while we celebrate the community and
			get down for a good cause! Enjoy a strolling reception with good eats, a
			full bar, live music, and dancing! Board members and staff will be on hand
			to groove, talk about everything that's happened in 2023, and al we're
			looking forward to accomplishing in 2024 with you.
		</p>
		<img
			src="/src/images/fundraiser/date.webp"
			alt="April 26th from 5pm to 9pm"
			style="margin: -5% auto"
		/>
		${grid(
			html`
				<div>
					<h3>Hosts</h3>
					<p>Ederique Goudia &amp; Mac Farr</p>
				</div>
				<div>
					<h3>Dress Code</h3>
					<p>70's Attire</p>
				</div>
				<div>
					<h3>Location</h3>
					<p>Solanus Casey Center<br />1780 Mt Elliott, Detroit, MI 48214</p>
				</div>
				<div>
					<h3>Silent Auction</h3>
					<p>
						All proceeds will fund the Villages CDC Housing Program "Keep It In
						the Family"
					</p>
				</div>
			`,
			'25ch'
		)}
		<donation-meter></donation-meter>
		<a
			href="https://www.eventbrite.com/e/the-village-people-tickets-789472532597"
		>
			Get Tickets &nbsp;&nbsp;-&nbsp;&nbsp; $75
		</a>
	</section>
`

flyer.style = scss`
	.flyer {
		--teal: #92d5da;
		background: black url(/src/images/fundraiser/tile.png);
		border: 1px solid rgba(155, 155, 155, 0.5);
		border-radius: 2rem;
		justify-content: center;
		margin: 3rem 0;
		padding: 2rem;
		text-align: center;

		img {
			margin: auto;
		}

		h3 {
			color: var(--teal);
		}

		a {
			border-top: 2px solid white;
			border-bottom: 2px solid white;
			color: var(--teal);
			display: inline-block;
			padding: 0.5rem 1rem;
			text-decoration: none;
			text-shadow: 0 0 2px var(--teal);
			text-transform: uppercase;
		}
	}
`
