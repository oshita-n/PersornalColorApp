import type { DOMAttributes, VFC, ReactNode } from "react";
import cc from "classcat";

type CommonType = {
  bgColor?: "gray" | "white";
  textColor?: "gray" | "white" | "black";
  borderColor?: "gray" | "bule";
  children?: ReactNode;
  className?: string;
};

type ButtonType = CommonType & {
  button: boolean;
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
};

export const Button: VFC<ButtonType> = (props) => {
  const classes = cc([
    "border p-2 rounded-xl",
    {
      "bg-gray-300 hover:bg-gray-400": props.bgColor === "gray",
      "bg-white hover:bg-gray-100": props.bgColor === "white",
      "text-gray-300": props.textColor === "gray",
      "text-white": props.textColor === "white",
      "text-black": props.textColor === "black",
      "border-gray-200": props.borderColor === "gray",
      "border-blue-400": props.borderColor === "bule",
    },
    props.className,
  ]);

  return (
    <button className={classes} onClick={props.onClick} >
      <strong>{props.children}</strong>
    </button>
  );
};
// Propsのデフォルト値
Button.defaultProps = {
  bgColor: "gray",
  textColor: "white",
  borderColor: "gray",
};
