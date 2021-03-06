import Head from "next/head";
import NavBar from "../components/NavBar";

const layout = ({ title, content, children }) => {
  return (
    <>
      <Head>
        <title>Shop | {title}</title>
        <meta name="description" content={content} />
      </Head>
      <NavBar />
      <div className="container">{children}</div>
    </>
  );
};

export default layout;
