import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";

const Layout = ({ title, content, children }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Shop | {title}</title>
        <meta name="description" content={content} />
      </Helmet>
      <NavBar />
      <div className="container">{children}</div>
    </Fragment>
  );
};

export default Layout;
