import { Link } from "react-router-dom";

const Button = ({ children, variant = "primary", to }) => {
  const base = "px-4 py-2 rounded-lg font-medium items-center inline-flex cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--brand-secondary)] text-white hover:bg-[var(--brand-secondary-hover)] shadow-lg shadow-orange-300/50",

    secondary: "bg-gray-200 text-black",
  };

  const className = `${base} ${variants[variant]}`;

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
