export type CardFooterProps = {
  children: React.ReactNode | React.ReactNode[];
} & React.HTMLProps<HTMLElement>;

export const CardFooter: React.FC<CardFooterProps> = ({ children, ...rest }) => {
  return <footer {...rest}> {children} </footer>;
};
