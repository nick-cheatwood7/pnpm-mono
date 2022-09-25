import React, { MouseEventHandler } from "react";

interface IProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export function Button({ onClick, children }: IProps) {
  return <button onClick={onClick}>{children}</button>;
}
