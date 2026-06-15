import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  to,
  btnType,
  size = "md",
}) => {
  const base =
    "rounded-lg font-medium justify-center w-fit items-center hover:brightness-90 inline-flex cursor-pointer transition-all";

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variants = {
    primary: "bg-[var(--brand-primary)] text-white shadow-lg",
  };

  const outlineVariants = {
    primary:
      "border border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white",
    secondary:
      "border border-gray-500 text-gray-700 hover:bg-gray-500 hover:text-white",
    pastel:
      "border border-[#FF7D68] text-[#FF7D68] hover:bg-gradient-to-r hover:from-[#FF946D] hover:to-[#FF7D68] hover:text-white",
    accent:
      "border border-[var(--brand-accent)] text-[var(--brand-accent)] hover:bg-[var(--brand-accent)] hover:text-white",
  };

  const className =
    btnType === "outline"
      ? `${base} ${sizes[size]} ${outlineVariants[variant]}`
      : `${base} ${sizes[size]} ${variants[variant]}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
};

export default Button;