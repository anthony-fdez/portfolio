import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { ChevronDown, GitHub, Linkedin, Mail } from "react-feather";
import useGlobalStore from "../../../../utils/store/useGlobalStore";
import BasketballCenter from "../../../sections/work/projects/basketballCenter/BasketballCenter";
import WeEatCode from "../../../sections/work/projects/weeatcode/WeEatCode";
import Protypist from "../../../sections/work/projects/protypist/Protypist";
import AlgoSaurus from "../../../sections/work/projects/algoSaurus/AlgoSaurus";
import projects from "../../../../constants/projects";

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
              <button
                tabIndex={-1}
                onClick={() => handleOpenProjectModal(<BasketballCenter />)}
              >
                <ListItem title="Basketball Center">
                  {projects.basketballCenter.description}
                </ListItem>
              </button>

              <button
                tabIndex={-1}
                onClick={() => handleOpenProjectModal(<WeEatCode />)}
              >
                <ListItem title="WeEatCode">
                  {projects.weEatCode.description}
                </ListItem>
              </button>
              <button
                tabIndex={-1}
                onClick={() => handleOpenProjectModal(<Protypist />)}
              >
                <ListItem title="ProTypist">
                  {projects.proTypist.description}
                </ListItem>
              </button>
              <button
                tabIndex={-1}
                onClick={() => handleOpenProjectModal(<AlgoSaurus />)}
              >
                <ListItem title="AlgoSaurus">
                  {projects.algoSaurus.description}
                </ListItem>
              </button>
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
            tabIndex={1}
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
