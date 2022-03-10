import React, { useState } from "react";

import Seo from "../seo/seo.component";
import Navbar from "../navbar/navbar.component";

import './layout.styles.scss';
import GeneralFooter from "../general-footer/general-footer.component";

const Layout = ({ children }) => {

  const [navDropdownState, setNavDropdownState] = useState(false)
  
  return (
    <div>
      <Seo/>
      <Navbar 
        navDropdownState={navDropdownState} 
        setNavDropdownState={setNavDropdownState}
      />
      <main>
        {children}
      </main>
      <GeneralFooter />
    </div>
  )
};

export default Layout;