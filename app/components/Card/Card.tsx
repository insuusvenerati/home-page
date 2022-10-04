import classnames from "classnames";
import { useEffect } from "react";
import type { AllClassesMap } from "util/styleHelpers";
import type { CardFooterProps } from "./CardFooter";
import { CardFooter } from "./CardFooter";
import type { CardHeaderProps } from "./CardHeader";
import { CardHeader } from "./CardHeader";

export type CardProps = {
  children?: React.ReactNode | React.ReactNode[] | null;
  text?: string | null;
  headerText?: string | null;
  footerText?: string | null;
} & AllClassesMap;

export interface CardType {
  Header: React.FC<CardHeaderProps>;
  Footer: React.FC<CardFooterProps>;
}

export const Card: React.FC<CardProps> & CardType = ({
  children,
  text,
  headerText,
  footerText,
  ...rest
}) => {
  useEffect(() => {
    if (!text && !children) {
      console.warn("Nothing rendered by Card component. Pass a child or text prop.");
    }
    if (text && children) {
      console.warn(
        "Both text and children passed to Card component. Only children will be rendered.",
      );
    }
  });
  return (
    <article className={classnames({ ...rest })}>
      {headerText && <CardHeader>{headerText}</CardHeader>}
      {children || text}
      {footerText && <CardFooter>{footerText}</CardFooter>}
    </article>
  );
};

Card.Header = CardHeader;
Card.Footer = CardFooter;
