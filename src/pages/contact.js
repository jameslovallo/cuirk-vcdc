import { html, md } from "recluse";
import { contactForm, grid, linkList } from "../components/index.js";
import contactInfo from "../data/contact.js";

export const meta = {
  title: "Contact Us",
};

export const body = md`
# Contact Us

${grid(
  html`
    <div>
      <h2>Contact Information</h2>
      ${linkList({ children: contactInfo[0] })}
    </div>
    <div>
      <h2>Get Involved</h2>
      ${linkList({ children: contactInfo[1] })}
    </div>
  `
)}

## Leave a Message

${contactForm()}
`;
