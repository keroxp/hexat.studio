import {Header} from "./header";
import {Footer} from "./footer";
import * as React from "react";

export const Default = ({children}) => (
  <div>
    <Header/>
    <div>
      {children}
    </div>
    <Footer/>
  </div>
);
