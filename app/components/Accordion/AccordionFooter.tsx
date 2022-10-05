import classNames from "classnames";
import type { BaseComponentProps } from "types/react";
import type { AllClassesMap } from "util/styleHelpers";

export type AccordionFooterProps = BaseComponentProps & {
  children?: React.ReactNode | React.ReactNode[] | null;
  footerStyles?: Partial<AllClassesMap> | null;
} & { fixed?: true };

export const AccordionFooter: React.FC<AccordionFooterProps> = ({
  children,
  footerStyles,
  ...rest
}) => {
  return <footer className={classNames({ ...footerStyles, ...rest })}> {children} </footer>;
};
