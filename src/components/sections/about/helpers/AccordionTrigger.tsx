import React from "react";
import { ChevronDown } from "react-feather";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import styles from "../about.module.css";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }: Props, forwardedRef) => (
    <Accordion.Header className={styles.AccordionHeader}>
      <Accordion.Trigger
        className={classNames(styles.AccordionTrigger, className)}
        {...props}
        // @ts-ignore
        ref={forwardedRef}
      >
        {children}
        <ChevronDown className={styles.AccordionChevron} aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

AccordionTrigger.displayName = "AccordionTrigger";

export default AccordionTrigger;
