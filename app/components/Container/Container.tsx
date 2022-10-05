import classNames from "classnames";
import type { BaseComponentProps } from "types/react";

export type ContainerProps = BaseComponentProps;

export const Container: React.FC<BaseComponentProps> = ({ children, ...rest }) => {
  return <main className={classNames({ responsive: true, ...rest })}>{children}</main>;
};
