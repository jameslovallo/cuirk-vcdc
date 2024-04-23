import { loop, md } from 'cuirk'
import { grid, staffCard } from '../src/components/index.js'
import staff from '../src/data/staff.js'

export const meta = {
	title: 'Who We Are',
}

export const body = md`
# Who We Are
<br>
${grid(loop(staff, staffCard), '10rem')}
`
