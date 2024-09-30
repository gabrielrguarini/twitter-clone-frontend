type Props = {} & React.ComponentProps<"button">;
export const Button = ({ children }: Props) => {
  return <button>{children}</button>;
};
