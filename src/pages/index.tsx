import sample from "./sample";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen font-mono">
      {sample()}
    </div>
  );
};
export default Home;
