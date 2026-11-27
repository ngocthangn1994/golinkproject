import type { ReactNode } from "react";

type ButtonProp = {
  children: ReactNode;
  size: "sm" | "md" | "lg";
  style?: "primary" | "secondary" | "none_outline";
  optional?: string;
};
const Button = ({ children, size, style, optional }: ButtonProp) => {
  const sizes = {
    sm: "px-3 py-2",
    md: "px-4 py-2.5",
    lg: "px-5 py-3",
  };

  const styles = {
    primary:
      "bg-blue-100 rounded-2xl text-blue-600 font-bold hover:bg-blue-200",
    secondary: "border border-slate-200 rounded-2xl hover:border-slate-300",
    none_outline: "",
  };

  return (
    <>
      <button
        className={`${sizes[size]} ${styles[style ?? "none_outline"]} ${optional}`}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
