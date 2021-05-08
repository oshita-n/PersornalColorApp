import { VFC } from "react";
import cc from "classcat";

type Props = {
  className?: string;
  imageLink?: string;
  bgColor?: string;
  bodyColor?: string;
  children?: React.ReactNode;
};

export const FittingColor: VFC<Props> = (props) => {
  const { className, bgColor, bodyColor, imageLink, children } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center h-16 -mt-6 p-0">
        {children}
      </div>
      <div
        style={{ backgroundColor: bgColor }}
        className={cc([
          "rounded-full flex flex-col text-white justify-center items-center w-60 h-60 m-1 select-none",
          {
            "bg-gray-300": !bgColor,
          },
          className,
        ])}
      >
        <img className="rounded-full object-cover w-24 h-24 flex items-center justify-center" src={imageLink}></img>
        <div style={{
          backgroundColor: bodyColor,
          width: '60%',
          height: '30%',
          borderRadius: '70% 70% 10% 10%'
        }}></div>
      </div>
    </div>
  );
};
FittingColor.defaultProps = {
  imageLink: 'https://image-more.hpplus.jp/upload/be3/be3e336c18af51864659bd48c2ca02be.jpg',
  bodyColor: '#C0C0C0',
};
export default FittingColor;