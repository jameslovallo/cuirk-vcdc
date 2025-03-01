import { loop, md } from "recluse";
import { card, grid } from "../components/index.js";
import services from "../data/services.js";

export const meta = {
	title: "What We Do",
	description:
		"The Villages CDC promotes growth that represents, protects, respects and enriches our existing community.",
};

export const body = md`
# What We Do

## Our Mission

The Villages CDC promotes growth that represents, protects, respects and enriches our existing community.

## Our Vision

We are advocates and an information resource to our stakeholders. We represent the full spectrum of our diverse neighborhoods, celebrating our uniqueness while promoting unity among our neighborhoods. We reflect the values of the community to developers and the city, and communicate opportunities for development back to the community.

## Our Values

### Access & Inclusion

We believe community members should have clear, understandable information about growth opportunities and ways to influence our future. We make complex policy information accessible and create opportunities for civic participation by informing the community about ways to engage in policy-making and enforcement processes.

### Diversity

We aim to foster a community that reflects our diverse mix of socioeconomic and demographic backgrounds. We actively include all groups in our activities and oversight structure to protect and expand this diversity.

### Sustainability

We believe in growth that sustains our community and enhances everyone’s quality of life. We promote growth that supports residents and improves quality of life without displacement.

### Community Involvement

We believe the existing community must play a role in shaping the future of our neighborhoods. We provide clear information and gather community input on decisions that impact our future.

### Shared Responsibility

We create opportunities for community members to understand growth opportunities and threats to our way of life, and to weigh in on decisions that affect both. It is also the responsibility of community members to engage in these opportunities and take ownership of our collective future.

## Our Goals: 2025

${grid(loop(services, card))}

### Strategic Focus #1: Events & Engagement

**Promote Strong Cross Neighborhood Connections**

* Spring cleanup (Motor City Makeover)
* Spring Fundraiser
* Fall Harvest
* Holiday Party
* Quarterly engagement sessions

**Support Neighborhood Associations**

* Spend $2,000 on event co-sponsorship and project support for neighborhood groups.
* Continue to implement the board ambassador program where board members attend neighborhood association meetings and talk about VCDC, track activities.

**Branding and Presence**

* Conduct branding overhaul.
* Upgrade and enhance our social media strategy in order to help begin driving engagement as well as promoting the Villages programming and mission.

### Strategic Focus #2: Housing

**Keep It In the Family**

* Continue the fourth cohort of 15 households.
* Highlight the accomplishments of the program via engagement strategies.

**Support of Existing Clients**

* Create CRM for past clients.
* Connect with past clients to see if there are any other potential areas of collaboration.

**Affordable Housing Development**

* Creation of a new project fund to build or acquire and renovate existing housing assets in the Villages.
* Continue to assess potential partnerships with nonprofits or for profit developers to create housing opportunities.

**Housing Policy Advocacy**

* Advocate for continued code enforcement so that vacant buildings cannot sit in perpetuity while the owners hope to strike it rich.
* Advocate for legalizing missing middle housing in the revisions to the zoning ordinance.
* Make a listing of housing repair and stabilization resources available to residents.
* Work with residents in apartment high rises to advocate for safe and reliable elevator service.

### Strategic Focus #3: Neighborhoods

**Support Neighborhood Association Improvement Goals**

* Host \_\_ amount of engagement sessions towards the projects that revolve around their selections: (e.g., DWSD matters, blight and traffic calming.)
* Create a specific and detailed work plan to be jointly administered between neighborhood supporters and VCDC for each of the three topics.
* Work with residents, the Historic District Commission and BSEED to locate buildings that are being demolished by neglect.

**DWSD Capital Plan**

* Advocate for DWSD to include densely populated portions of the Villages in their program for lead service line replacements, water main and sewer line replacements.
* Work with residents on a tactical basis to get problematic hot spots, such as alley sinkholes, and broken fire hydrants repaired.

**Broadband Assessment and Strategy**

* Create a map of broadband speeds that are being delivered relative to what is being advertised.
* Use findings to make assessment if the Villages are obtaining what they are being promised.
* Utilize findings to advocate for, if necessary, enhanced infrastructure investments in our district.
* Find objective criteria to see what codes govern telecom line construction and buildout.

**Advocate DTE Policy**

* Advocate for continued prioritization of the Villages footprint in DTE’s capital upgrades plan.
* Continue to advocate against rate hikes for DTE.

**Support Small Business**

* Begin gathering local business owners for engagement sessions.
* Build out engagement strategy based on initial feedback.
* Create small projects that we can execute this first year to build good will and develop proficiency in this area.

### Strategic Focus #4: Streets

**Traffic Calming**

* Work with neighborhood groups to identify needed traffic calling interventions and develop plans for engagement with DPW.

**One Way Street Conversions**

* Advocate for DPW to convert East Vernor Highway and Charlevoix Avenue to two way streets.

**Truck Route Policy**

* Continue to attend the truck route policy working group.
* Advocate for the City to pass a truck routes policy.

**Alleys**

* Work with residents to design an alley activation plan that can include interventions and investments from the City, DTE, DWSD .

**Sidewalks**

* Assist neighborhood groups in getting more funding for sidewalk repairs through the Department of Public Works

### Strategic Focus #5: Governance

**Onboard New Directors**

* Vote to approve vacancies on the board.
* Distribute printed, revised governance manual.
* Distribute and collect required board or director forms noted in the governance manual.

**Board Development and Evaluation**

* Utilize learnings from the Hollingsworth training to optimize board performance.
* Board leadership to work with the executive director to establish objective criteria for board evaluations.
* Update organizational manual with new onboarding procedures that are more efficient (shorter) and effective.

**Financial and Legal Compliance**

* Complete audit by March 25th and 990 filing by May 15th.
* Complete license to solicit with the Michigan attorney general’s office.
* Complete annual corporate report with the Michigan secretary of state’s office.

**Housing Management**

* City rental inspections are due next in 2026.
* Come up with SOW procedures for rental management, including leasing, resident engagement and management.

**Fund Development**

* Create an individual donor strategy for recurring donations.
* Create corporate giving strategy.
* Create a high net worth donor strategy.
* Continue to engage external personnel such as grant writers to support these initiatives.

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
`;
