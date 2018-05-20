import {Header} from "./header";
import {Footer} from "./footer";
import * as React from "react";
import css from "styled-jsx/css"
import {kMaxContentWidth} from "../lib/constants";

const styles = css`
  .wrapper
    height 100%
    min-height 100%
    min-width 100%
    .outer
      margin auto
      max-width ${kMaxContentWidth}px
      @media screen and (max-width: ${kMaxContentWidth}px)
        width 100%
      .main
        @media(min-width: ${kMaxContentWidth}px)      
          border 1px solid #ccc
        @media(max-width:${kMaxContentWidth}px)        
          border-top 1px solid #ccc        
        margin-bottom 30px
        .inner
           padding 30px
`;

export const PageWrapper = ({children}) => (
  <div className={"wrapper"}>
    <Header/>
    <div className={"outer"}>
      {children}
    </div>
    <Footer/>
    <style jsx global>{styles}</style>
  </div>
);

export const Page = ({children}) => (
  <PageWrapper>
    <div className={"main"}>
      <div className={"inner"}>
        {children}
      </div>
    </div>
  </PageWrapper>
);
