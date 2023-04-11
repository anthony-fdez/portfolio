import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { ChevronDown, GitHub, Linkedin, Mail } from "react-feather";

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Projects <ChevronDown className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: "span 6" }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/">
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="CalloutHeading">Radix Primitives</div>
                    <p className="CalloutText">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Contact <ChevronDown className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              <ListItem
                icon={<Mail size={18} />}
                href="https://icons.radix-ui.com/"
                title="Email"
              >
                anthonyfdez23@gmail.com
              </ListItem>
              <ListItem
                icon={<GitHub size={18} />}
                href="https://icons.radix-ui.com/"
                title="GitHub"
              >
                anthony-fdez
              </ListItem>
              <ListItem
                icon={<Linkedin size={18} />}
                href="https://icons.radix-ui.com/"
                title="LinkedIn"
              >
                Anthony Fernandez
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

interface ListItemProps {
  href?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const ListItem = React.forwardRef(
  ({ className, children, title, href, icon }: ListItemProps, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          href={href}
          // @ts-ignore
          ref={forwardedRef}
        >
          {icon && <div className="ListItemIcon">{icon}</div>}
          <div>
            <div className="ListItemHeading">{title}</div>
            <p className="ListItemText">{children}</p>
          </div>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = "ListItem";

export default NavigationMenuComponent;
