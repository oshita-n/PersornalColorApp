import { VFC } from "react";
import cc from "classcat";

type Props = {
  className?: string;
  type?: "spring" | "summer" | "autumn" | "winter";
};
type SeasonNameType = {
  ja: string,
  en: string
}
type SeasonNameListType = {
  spring: SeasonNameType,
  summer: SeasonNameType,
  autumn: SeasonNameType,
  winter: SeasonNameType,
}

const SeasonName = (typeName: "spring" | "summer" | "autumn" | "winter", langName: "ja" | "en"): String => {
  const SeasonNameList: SeasonNameListType = {
    spring: { ja: "春", en: "Spring" },
    summer: { ja: "夏", en: "Summer" },
    autumn: { ja: "秋", en: "Autumn" },
    winter: { ja: "冬", en: "Winter" },
  };
  return SeasonNameList[typeName][langName];
}

export const Season: VFC<Props> = (props) => {
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
      <span>{SeasonName(props.type, "ja")}</span>
      <span>{SeasonName(props.type, "en")}</span>
    </div>
  );
};
