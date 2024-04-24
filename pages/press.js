import { loop, md } from 'cuirk'
import { press } from '../src/components/index.js'
import articles from '../src/data/articles.js'

export const meta = {
	title: 'Press',
}

export const body = md`
# Press
<br>
${loop(articles, press)}
`
