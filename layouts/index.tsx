import Header from "components/Header";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="main">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
