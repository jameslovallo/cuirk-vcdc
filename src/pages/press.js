import { loop, md } from "cuirk";
import { press } from "../components/index.js";
import articles from "../data/articles.js";

export const meta = {
	title: "Press",
};

export const body = md`
# Press
<br>
${loop(articles, press)}
`;