import { html, loop, scss } from "recluse";
import { button, icon, modal } from "./index.js";

export const nav = ({ links, icon: navIcon = "Menu" }) => {
  const desktopStart = links.filter(({ desktop }) => desktop === "start");
  const desktopCenter = links.filter(({ desktop }) => desktop === "center");
  const desktopEnd = links.filter(({ desktop }) => desktop === "end");
  const mobileStart = links.filter(({ mobile }) => mobile === "start");
  const mobileCenter = links.filter(({ mobile }) => mobile === "center");
  const mobileEnd = links.filter(({ mobile }) => mobile === "end");
  return html`
    <nav class="r-nav">
      <div>
        ${modal({
          id: "nav",
          open: button({
            children: icon({ name: navIcon }),
            shape: "circle",
            size: "large",
            variant: "text",
            ariaLabel: "Open Menu",
          }),
          children: html`
            <div class="r-mobile-menu">
              ${loop([...mobileStart, ...mobileCenter, ...mobileEnd], (x) =>
                button({
                  variant: "text",
                  children: x.title,
                  ...x,
                  color: "none",
                })
              )}
            </div>
          `,
        })}
        ${loop(desktopStart, (x) =>
          button({ variant: `text ${x.classList}`, children: x.title, ...x })
        )}
      </div>
      <div>
        ${loop(desktopCenter, (x) =>
          button({ variant: `text ${x.classList}`, children: x.title, ...x })
        )}
      </div>
      <div>
        ${loop(desktopEnd, (x) =>
          button({ variant: `text ${x.classList}`, children: x.title, ...x })
        )}
      </div>
    </nav>
  `;
};

nav.style = scss`
	.r-nav {
		background: var(--nav, transparent);
		color: var(--nav-color, currentColor);
		display: grid;
		font-size: 15px;
		gap: 1rem;
		grid-template-columns: repeat(3, auto);
		padding: .5rem;

		> div {
			align-items: center;
			display: flex;

			&:not(:first-child):not(:last-child) {
				justify-content: center;
			}

			&:last-child {
				justify-content: end;
			}

			.r-modal {
				@media (min-width: 900px) {
					display: none;
				}
					
					.r-mobile-menu {
						align-items: flex-start;
						display: flex;
						flex-direction: column;
						gap: 1rem;
					}
			}

			> .r-button {
				@media (max-width: 899px) {
					&:not(.r-show-on-mobile) {
						display: none;
					}
				}
			}
		}
	}
`;
