type Props = {
  size: 1 | 2 | 3;
  onClick?: () => void;
} & React.ComponentProps<"button">;
export const Button = ({ children, onClick, size, ...props }: Props) => {
  return (
    <button
      className={`flex justify-center items-center cursor-pointer bg-white text-black font-bold rounded-3xl
    ${size === 1 && "h-14 text-lg"}
    ${size === 2 && "h-10 text-md"}
    ${size === 3 && "h-7 text-xs"}
    ${props.className}
    `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
