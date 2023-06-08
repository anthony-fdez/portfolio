import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import React from "react";
import { ChevronDown, GitHub, Linkedin, Mail } from "react-feather";
import projects from "../../../../constants/projects";
import useGlobalStore from "../../../../utils/store/useGlobalStore";

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
              {Object.keys(projects).map((item) => {
                const project = projects[item];

                return (
                  <button
                    key={project.name}
                    tabIndex={-1}
                    onClick={() => handleOpenProjectModal(project.component)}
                  >
                    <ListItem title={project.name}>
                      {project.description}
                    </ListItem>
                  </button>
                );
              })}
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
