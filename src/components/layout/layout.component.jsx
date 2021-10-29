import React from "react";

import Seo from "../seo/seo.component";
import Navbar from "../navbar/navbar.component";

import './layout.styles.scss';

const Layout = ({ children }) => {

return (
    <div>
      <Seo/>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
};

export default Layout;