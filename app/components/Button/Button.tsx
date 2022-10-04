import classNames from "classnames";
import type { BaseComponentProps } from "types/react";

export type ButtonProps = BaseComponentProps & {
  children: React.ReactNode;
  icon?: string;
};

const defaultProps = { "medium-elevate": true, responsive: true };

export const Button: React.FC<ButtonProps> = ({ children, icon, ...rest }) => {
  return (
    <button className={classNames({ ...defaultProps, ...rest })}>
      {icon && <i> {icon} </i>}
      {children}
    </button>
  );
};
