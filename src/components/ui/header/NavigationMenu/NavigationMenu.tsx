import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { ChevronDown, GitHub, Linkedin, Mail } from "react-feather";
import useGlobalStore from "../../../../utils/store/useGlobalStore";
import BasketballCenter from "../../../sections/work/projects/basketballCenter/BasketballCenter";
import WeEatCode from "../../../sections/work/projects/weeatcode/WeEatCode";
import Protypist from "../../../sections/work/projects/protypist/Protypist";
import AlgoSaurus from "../../../sections/work/projects/algoSaurus/AlgoSaurus";
import Dls from "../../../sections/work/projects/dls/Dls";

const NavigationMenuComponent = () => {
  const { setProjects } = useGlobalStore();

  const handleOpenProjectModal = (component: JSX.Element) => {
    setProjects({
      isModalOpen: true,
      selectedProjectComponent: component,
    });
  };

  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#about" className="NavigationMenuTrigger">
            Experience
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Projects <ChevronDown className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <span
                onClick={() => handleOpenProjectModal(<BasketballCenter />)}
              >
                <ListItem title="Basketball Center">
                  Basketball Center is a mobile app that keeps fans updated on
                  league events, offering in-game chat, personalized
                  notifications, and real-time player-specific shot-charts with
                  play-by-play details.
                </ListItem>
              </span>
              <span onClick={() => handleOpenProjectModal(<WeEatCode />)}>
                <ListItem title="WeEatCode">
                  WeEatCode is a fullstack blog web application. Users can
                  create an account, create a blog post, start a conversation
                  under any post and downvote and upvote any post or comment.
                  Among many other features.
                </ListItem>
              </span>
              <span onClick={() => handleOpenProjectModal(<Protypist />)}>
                <ListItem title="ProTypist">
                  ProTypist is a fully featured typing game, with a multiplayer
                  mode and lots of other features
                </ListItem>
              </span>
              <span onClick={() => handleOpenProjectModal(<AlgoSaurus />)}>
                <ListItem title="AlgoSaurus">
                  AlgoSaurus is a complex algorithms visualization tool to help
                  people learn the basics about the most famous sorting
                  algorithms. This project placed top 3 at ShellHacks, one of
                  the largest hackathons at Florida.
                </ListItem>
              </span>
              <span onClick={() => handleOpenProjectModal(<Dls />)}>
                <ListItem title="DLS Fixit">
                  DLSFixit is a doors and locks repair and installation company
                  located in the south Florida area.
                </ListItem>
              </span>
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
                href="mailto:anthonyfdez23@gmail.com"
                title="Email"
              >
                anthonyfdez23@gmail.com
              </ListItem>
              <ListItem
                icon={<GitHub size={18} />}
                href="https://github.com/anthony-fdez"
                title="GitHub"
              >
                anthony-fdez
              </ListItem>
              <ListItem
                icon={<Linkedin size={18} />}
                href="https://www.linkedin.com/in/anthony-fernandez-556622201/"
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
  (
    {
      className,
      children,
      title,
      href,
      icon,

      ...props
    }: ListItemProps,
    forwardedRef
  ) => {
    return (
      <li>
        <NavigationMenu.Link asChild>
          <a
            {...props}
            className={classNames("ListItemLink", className)}
            href={href}
            onClick={(e) => {
              if (!href) return e.preventDefault;
            }}
            // @ts-expect-error
            ref={forwardedRef}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon && <div className="ListItemIcon">{icon}</div>}
            <div>
              <div className="ListItemHeading">{title}</div>
              <p className="ListItemText">{children}</p>
            </div>
          </a>
        </NavigationMenu.Link>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export default NavigationMenuComponent;
