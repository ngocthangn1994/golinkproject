import type { ReactNode } from "react";

type CardProp = {
  children: ReactNode;
  optional: string;
};

const Card = ({ children, optional }: CardProp) => {
  return (
    <>
      <div className={`border border-slate-200 rounded-xl  ${optional}`}>
        {children}
      </div>
    </>
  );
};

export default Card;
