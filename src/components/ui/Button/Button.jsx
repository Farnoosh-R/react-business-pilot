const Button = ({ children, variant = "primary" }) => {
  const base = "px-4 py-2 rounded-lg font-medium items-center";
  const variants = {
    primary: "bg-[var(--brand-secondary)] text-white hover:bg-[var(--brand-secondary-hover)]",
    secondary: "bg-gray-200 text-black",
  };
  return <button className={`${base} ${variants[variant]}`}>{children}</button>;
};
export default Button;
