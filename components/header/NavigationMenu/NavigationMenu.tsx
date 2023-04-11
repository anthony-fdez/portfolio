import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { ChevronDown, GitHub, Linkedin, Mail } from "react-feather";

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuTrigger">
            Experience
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Projects <ChevronDown className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <ListItem href="https://stitches.dev/" title="Basketball Center">
                Basketball Center is a mobile app that keeps fans updated on
                league events, offering in-game chat, personalized
                notifications, and real-time player-specific shot-charts with
                play-by-play details.
              </ListItem>
              <ListItem href="/colors" title="WeEatCode">
                WeEatCode is a fullstack blog web application. Users can create
                an account, create a blog post, start a conversation under any
                post and downvote and upvote any post or comment. Among many
                other features.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="ProTypist">
                ProTypist is a fully featured typing game, with a multiplayer
                mode and lots of other features
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="AlgoSaurus">
                AlgoSaurus is a complex algorithms visualization tool to help
                people learn the basics about the most famous sorting
                algorithms. This project placed top 3 at ShellHacks, one of the
                largest hackathons at Florida.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="DLS Fixit">
                DLSFixit is a doors and locks repair and installation company
                located in the south Florida area.
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
