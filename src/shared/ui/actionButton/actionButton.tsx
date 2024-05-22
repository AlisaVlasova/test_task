import { FC } from "react";

interface IActionButton extends React.HTMLProps<HTMLDivElement> {
  onAction(): void;
  children: React.ReactNode;
}

export const ActionButton: FC<IActionButton> = ({ onAction, children }) => {
  return <button onClick={onAction} className="action" children={children} />;
};
