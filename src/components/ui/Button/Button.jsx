import { Link } from "react-router-dom";

const Button = ({ children, variant = "primary", to }) => {
  const base = "px-4 py-2 rounded-lg font-medium justify-center w-fit items-center hover:brightness-90 inline-flex cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--brand-secondary)] text-white shadow-lg shadow-orange-300/50",

    secondary: "bg-gray-200 text-black",
    pastel: "bg-gradient-to-r from-[#FF946D] to-[#FF7D68] text-white px-6 py-4",
    outline: "border border-[var(--text-primary)] bg-transparent hover:bg-[var(--text-primary)] hover:text-white"
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
