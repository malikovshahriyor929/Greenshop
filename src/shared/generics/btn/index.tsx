const Button = ({
  children,
  x = 8,
  y = 4,
  styles,
}: {
  children: any;
  x?: number;
  y?: number;
  styles?: string;
}) => {
  return (
    <div
      style={{
        padding: `${y}px ${x}px`,
      }}
      className={`bg-[#46a358] ${styles} max-[530px]:!p-[5px_10px] rounded-lg px-2 py-1 flex  gap-1 text-white `}
    >
      {children}
    </div>
  );
};

export default Button;
