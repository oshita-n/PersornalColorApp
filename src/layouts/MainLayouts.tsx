import { ReactNode, VFC } from "react";
import Head from "next/head";
import { Header } from "../components/Header";

type Props = {
  children: ReactNode;
  title: string;
};

export const MainLayouts: VFC<Props> = (props) => {
  return (
    <div>
      <div className="block md:hidden">
        <Head>
          <title>{props.title}</title>
        </Head>
        <div>
          <header>
            <Header />
          </header>
          <main>{props.children}</main>
        </div>
      </div>
      <div className="hidden md:block">PC画面</div>
    </div>
  );
};
