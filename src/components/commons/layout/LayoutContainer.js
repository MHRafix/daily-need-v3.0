import Head from "next/head";
import MessengerCustomerChat from "react-messenger-customer-chat";
import FooterCopyrightArea from "../Footer/FooterCopyrightArea";
import FooterFeaturesCard from "../Footer/FooterFeaturesCard";
import FooterMain from "../Footer/FooterMain";
import HeaderMain from "../Header/HeaderMain";

export default function LayoutContainer({ children, title, description }) {
  return (
    <div className="page_main_wrapper">
      <Head>
        <title>{title ? `Daily Needs - ${title}` : "Daily Needs"}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* app header is here */}
      <header>
        <HeaderMain />
      </header>
      {/* app body is here */}
      <main>
        <div className="container_wrapper">{children}</div>

        {/* messenger chat icon here */}

        <MessengerCustomerChat
          pageId="110944118380097"
          appId="588889365150764"
        />
      </main>

      {/* app footer is here */}
      <footer className="bg-slate-100 mt-20">
        <FooterFeaturesCard />
        <FooterMain />
        <FooterCopyrightArea />
      </footer>
    </div>
  );
}
