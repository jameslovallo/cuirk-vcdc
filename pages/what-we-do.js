import { loop, md } from 'cuirk'
import { card, grid } from '../src/components/index.js'
import services from '../src/data/services.js'

export const meta = {
	title: 'What We Do',
	description:
		'The Villages CDC supports and advocates for the development of inclusive places and neighborhoods within The Villages.',
}

export const body = md`
# What We Do

## Our Mission

The Villages CDC supports and advocates for the development of inclusive places and neighborhoods within The Villages.

## Our Vision

The Villages will be known and respected throughout Detroit as the model for flourishing, integrated neighborhoods, known especially for their diversity, authenticity, and resourcefulness.

## Our Values

Inclusion, Diversity, Sustainability, Equity, Community Involvement Who We Serve Residents, neighborhood associations, and businesses within the footprint stretching from Mount Elliott Avenue in the west to St. Jean Street in the east, from Mack Avenue in the north going all the way down to the Detroit River. The Villages district consists of nearly 14,000 Detroiters.

## Our Programs and Services

The Villages CDC accomplishes its mission by convening a variety of stakeholders, including residents and businesses, to execute projects within the following areas:

${grid(loop(services, card))}

<br>

## 2024 Strategic Plan

### Strategic Focus #1: Events & Engagement

#### Promote strong cross neighborhood connections through four events.

- Spring cleanup (Motor City Makeover) (May 2024)
- Spring Fundraiser (April 2024)
- Fall Harvest along Kercheval (Sept 2024)
- Fall Fundraiser (November 2024)
- Holiday Party (December 2024)

#### Support neighborhood associations through monetary and technical assistance donations.

- Spend $1000 on event co-sponsorship (Dec 2024)
- Share out events in newsletter and on website calendar (Ongoing)
- Continue to implement the board ambassador program where board members attend neighborhood association meetings and talk about VCDC, track activities (Ongoing)

#### Engage 1000 neighbors through bi-weekly newsletter and virtual listening sessions.

- Host three in person strategy briefings with surveys (Sept 2024)

### Strategic Focus #2: Housing

#### Continue Keep It In the Family

- Continue the second cohort of 10 households (June 2024)
- Highlight the accomplishments of the program via engagement strategies (April 2024)
- Secure long term funding for the program (Dec 2024)

#### Ongoing support of existing clients

- Continue to refer clients from the prior cohorts to new funding opportunities (On-going)
- Track enrollments on an ongoing basis and document so as to be able to point to additional support provided via the program

#### Affordable housing development

- Continue to explore options to create affordable housing in the Villages
- Assess the viability of the following kinds of projects: construction of new missing middle units, buying and renovating an existing apartment building and the development of new, affordable multi-unit rental units
- Begin to obtain seed funding for any one of the projects so as to be able to have funds on hand to commit to a project and to demonstrate viability to the City, other funders and lenders

#### Housing policy advocacy

- Continue to collaborate with the Home Repair Working Group that is being convened by the City

### Strategic Focus #3: Infrastructure

#### Support neighborhood association infrastructure goals

- Gear engagement sessions towards the projects that revolve around their selections: DWSD matters, blight and traffic calming.
- Create a specific and detailed work plan to be jointly administered between neighborhood supporters and VCDC for each of the three topics

#### DWSD capital plan

- Advocate for DWSD to include densely populated portions of the Villages in their program for lead service line replacements
- Advocate for DWSD to include densely populated portions of the Villages in their program for water main and sewer line replacements
- The goal of the foregoing should be to get either investments or concrete commitments made to upgrade DWSD infrastructure in the Villages

#### Broadband assessment and strategy

- Create map of broadband speeds that are being delivered relative to what is being advertised
- Use findings to make assessment if the Villages is obtaining what they are being promised
- Utilize findings to advocate for, if necessary, enhanced infrastructure investments in our district
- Find objective criteria to see what codes govern telecomm line construction and buildout

#### DTE policy

- Brief residents about upgrades coming to the Villages both in the areas of gas main renewal and overhead line upgrades
- Continue to advocate against rate hikes for DTE

### Strategic Focus #4: Streets

#### Traffic calming

- Work with the Department of Public Works (DPW) to get speed tables installed at key intersections in the Villages

#### One way street conversions

- Advocate for DPW to convert East Vernor Highway and Charlevoix Avenue to two way streets

#### Truck route policy

- Continue to convene the truck route policy working group (Feb 2024)
- Advocate for the City to pass a truck routes policy (Dec 2024)

#### GFL contract matters

- Work with residents to report missed pickups from GFL
- Work with residents to report leaky trucks from GFL

#### Sidewalks

- Assist neighborhood groups in getting more funding for sidewalk repairs through the Department of Public Works

<style>
	.card {
		text-align: center;
	}


	.card > img {
		aspect-ratio: 4/3;
		object-position: bottom;
		padding: 1rem;
	}

	main > h3 {
		border-bottom: 1px solid var(--c-primary);
	}
</style>
`
