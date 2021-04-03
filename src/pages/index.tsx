const Home: React.FC = () => {
  return (
    <div className="box-border px-6 divide-y-2 divide-gray-200 font-mono">
      <header className="flex flex-col justify-center items-center py-4 px-16">
        <div><img src="/img.PNG" className="max-h-40" alt="Logo image" /></div>
        <div className="my-4 text-lg text-gray-500">あなたに似合う洋服の色をAIが探します</div>
      </header>
      <div className="flex justify-center items-center flex-col min-h-screen font-mono">
        Hello Nextjs
      </div>
    </div>
  );
};
export default Home;
