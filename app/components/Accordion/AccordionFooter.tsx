import classNames from "classnames";
import type { AllClassesMap } from "util/styleHelpers";

export type AccordionFooterProps = {
  children?: React.ReactNode | React.ReactNode[] | null;
  footerStyles?: Partial<AllClassesMap> | null;
};

export const AccordionFooter: React.FC<AccordionFooterProps> = ({ children, footerStyles }) => {
  return <footer className={classNames({ ...footerStyles })}> {children} </footer>;
};
