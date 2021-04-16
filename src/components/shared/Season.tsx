import { VFC } from "react";
import cc from "classcat";

type Props = {
  className?: string;
  type?: "spring" | "summer" | "autumn" | "winter";
};

interface SeasonNameType {
  ja: string,
  en: string
}
interface SeasonNameListType {
  spring: SeasonNameType,
  summer: SeasonNameType,
  autumn: SeasonNameType,
  winter: SeasonNameType,
}

export const Season: VFC<Props> = (props) => {
  const SeasonNameList: SeasonNameListType = {
    spring: { ja: "春", en: "Spring" },
    summer: { ja: "夏", en: "Summer" },
    autumn: { ja: "秋", en: "Autumn" },
    winter: { ja: "冬", en: "Winter" },
  };
  const SeasonName: SeasonNameType = SeasonNameList[props.type];
  return (
    <div
      className={cc([
        "rounded-full flex flex-col text-white justify-center items-center w-24 h-24 select-none",
        {
          "bg-red-200": props.type === "spring",
          "bg-blue-200": props.type === "summer",
          "bg-yellow-500": props.type === "autumn",
          "bg-purple-500": props.type === "winter",
        },
        props.className,
      ])}
    >
      <span>{SeasonName["ja"]}</span>
      <span>{SeasonName["en"]}</span>
    </div>
  );
};
