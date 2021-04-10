import { Divider } from "../components/shared/Divider";
import { Spring } from "../components/shared/Spring";
import { MainLayouts } from "../layouts/MainLayouts";

const Home: React.FC = () => {
  return (
    <div>
      <MainLayouts title="Top">
        <div className="flex flex-col items-center">
          <span>既にパーソナルカラーをご存知の方は</span>
          <span>下記よりお選びください</span>
          <div className="flex flex-col my-4">
            <div className="flex flex-row">
              <Spring className="my-4 mx-6" />
              <Spring className="my-4 mx-6" />
            </div>
            <div className="flex flex-row">
              <Spring className="my-4 mx-6" />
              <Spring className="my-4 mx-6" />
            </div>
          </div>
          <Divider />
          <span>診断の方はこちら</span>
          <div className="w-72 h-24 my-4  bg-yellow-200">画像を張る</div>
        </div>
      </MainLayouts>
    </div>
  );
};
export default Home;
