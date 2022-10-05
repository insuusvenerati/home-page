import classNames from "classnames";
import type { BaseComponentProps } from "types/react";
import type { AllClassesMap } from "util/styleHelpers";

export type CardHeaderProps = BaseComponentProps & {
  children: React.ReactNode | React.ReactNode[];
};

export const CardHeader: React.FC<CardHeaderProps> = ({ children, ...rest }) => {
  const compact: Partial<AllClassesMap> = { "no-padding": true };
  return <header className={classNames({ ...compact, ...rest })}>{children}</header>;
};
