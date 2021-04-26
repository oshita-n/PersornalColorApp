import { NextPage } from "next";
import { Divider } from "../components/shared/Divider";
import { Button } from "../components/shared/Button";

export const exeption1: NextPage = () => {
  return (
    <div>
      <Divider/>
      <img src="exception.png" />
      <Divider/>
      <Divider/>
      <Button button>続けて洋服の写真を撮る</Button>
    </div>
  );
};

export default exeption1;