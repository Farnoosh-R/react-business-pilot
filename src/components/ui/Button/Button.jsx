import { Link } from "react-router-dom";

const Button = ({
  onClick,
  children,
  variant = "primary",
  to,
  btnType,
  size = "md",
}) => {
  const base =
    "group rounded-lg font-medium justify-center w-fit items-center hover:brightness-90 inline-flex cursor-pointer transition-all";

  const sizes = {
    sm: "px-3 py-1 text-xs sm:text-sm",
    md: "px-4 py-2 text-sm sm:text-base",
    lg: "px-5 py-2 text-[12px] sm:text-lg",
  };

  const variants = {
    primary: "bg-[var(--brand-primary)] text-white shadow-lg",
    secondary: "bg-[var(--brand-secondary)] !text-white shadow-lg",
  };

  const outlineVariants = {
    primary:
      "border border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white",
    secondary:
      "border border-[var(--brand-secondary)] text-[var(--text-secondary)] hover:bg-[var(--brand-secondary)] hover:text-white",
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

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
