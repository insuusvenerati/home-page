import type { BaseComponentProps } from "types/react";
import type { AccordionFooterProps } from "./AccordionFooter";
import { AccordionFooter } from "./AccordionFooter";
import { AccordionHeader } from "./AccordionHeader";
import type { AccordionHeaderProps } from "./AccordionHeader";
import classNames from "classnames";
import type { AllClassesMap, IconSizes } from "util/styleHelpers";

export type AccordionProps = BaseComponentProps & {
  children?: React.ReactNode | React.ReactNode[] | null;
  headerText?: string | null;
  leftIconUrl?: string | null;
  footerText?: string | null;
  headerStyles?: Partial<AllClassesMap> | null;
  footerStyles?: Partial<AllClassesMap> | null;
  iconSize?: IconSizes | null;
};

export type AccordionType = {
  Header: React.FC<AccordionHeaderProps>;
  Footer: React.FC<AccordionFooterProps>;
};

export const Accordion: React.FC<AccordionProps> & AccordionType = ({
  children,
  leftIconUrl,
  headerText,
  headerStyles,
  footerStyles,
  footerText,
  iconSize,
  ...rest
}) => {
  return (
    <article className={classNames({ ...rest })} tabIndex={0}>
      <AccordionHeader
        footerStyles={footerStyles}
        headerStyles={headerStyles}
        footerText={footerText}
        leftIconUrl={leftIconUrl}
        headerText={headerText}
        iconSize={iconSize}
      >
        {children}
      </AccordionHeader>
    </article>
  );
};

Accordion.Header = AccordionHeader;
Accordion.Footer = AccordionFooter;
