import { VFC } from "react";
import cc from "classcat";

type Props = {
  className?: string;
};

export const Spring: VFC<Props> = (props) => {
  return (
    <div
      className={cc([
        "rounded-full bg-red-200 flex flex-col text-white justify-center items-center w-24 h-24",
        props.className,
      ])}
    >
      <span>春</span>
      <span>Spring</span>
    </div>
  );
};
