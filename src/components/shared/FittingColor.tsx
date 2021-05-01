import { VFC } from "react";
import cc from "classcat";

type Props = {
  className?: string;
  bgColor?: string;
  bodyColor?: string;
};

export const FittingColor: VFC<Props> = (props) => {
  return (
    <div
      style={{ backgroundColor: props.bgColor }}
      className={cc([
        "rounded-full flex flex-col text-white justify-center items-center w-60 h-60 select-none",
        {
          "bg-gray-300": !props.bgColor,
        },
        props.className,
      ])}
    >
      <img className="rounded-full object-cover w-24 h-24 flex items-center justify-center" src="https://image-more.hpplus.jp/upload/be3/be3e336c18af51864659bd48c2ca02be.jpg"></img>
      <div style={{
        backgroundColor: props.bodyColor || '#C0C0C0',
        width: '60%',
        height: '30%',
        borderRadius: '70% 70% 10% 10%'
      }}></div>
    </div>
  );
};
