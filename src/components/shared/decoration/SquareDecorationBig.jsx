const SquareDecorationBig = ({style, children}) => {
  return (
  <div  className="absolute -z-10 h-20 w-20 bg-[var(--brand-primary)] rounded-tr-xl rounded-bl-xl flex items-center justify-center"
      style={style}>{children}</div>
  );
};
export default SquareDecorationBig;
