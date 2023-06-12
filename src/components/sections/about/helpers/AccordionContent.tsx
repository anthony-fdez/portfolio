import classNames from "classnames";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "../about.module.css";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }: Props, forwardedRef) => (
    <Accordion.Content
      className={classNames(styles.AccordionContent, className)}
      {...props}
      // @ts-ignore
      ref={forwardedRef}
    >
      <div className={styles.AccordionContentText}>{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

export default AccordionContent;
