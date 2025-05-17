import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => { 
  return (
    <> 
      <Header />
      {/* layout wrappered inside div */}
      <div>{children}</div>
       {/* childrenprop is destructred here
       all the children comp will show here else props.childern  */}
      <Footer />
    </>
  );
};

export default Layout;
