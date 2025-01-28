import { loop, md } from "recluse";
import { grid, staffCard } from "../components/index.js";
import staff from "../data/staff.js";

export const meta = {
	title: "Who We Are",
};

export const body = md`
# Who We Are
<br>
${grid(loop(staff, staffCard), "10rem")}
`;
