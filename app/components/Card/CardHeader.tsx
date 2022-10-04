import classNames from "classnames";
import type { BaseComponentProps } from "types/react";

export type CardHeaderProps = BaseComponentProps & {
  children: React.ReactNode | React.ReactNode[];
};

export const CardHeader: React.FC<CardHeaderProps> = ({ children, ...rest }) => {
  console.log(children);
  return (
    <header className={classNames({ ...rest })}>
      <figure>{children}</figure>
    </header>
  );
};
