import { Button } from './components/button/button';

const Sample : React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen font-mono">
      <Button linkProps={{ href: "/sample" }}>ＯＫ</Button>
      <Button linkProps={{ href: "/sample" }}>ＮＧ</Button>
      <Button linkProps={{ href: "/sample" }}>テスト</Button>
    </div>
  );
};
export default Sample;