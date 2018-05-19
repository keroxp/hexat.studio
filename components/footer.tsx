import Link from "next/link"
import * as React from "react";
import {kContentPadding, kMaxContentWidth} from "../lib/constants";
import css from "styled-jsx/css"

const styles = css`
  .footer
    min-width 100%
    background-color #444
    color white
    .inner
      margin auto
      max-width ${kMaxContentWidth}px
      padding ${kContentPadding}px
      display flex
      flex-direction row
      @media(max-width: ${kMaxContentWidth}px)
        flex-direction column
        text-align center
      .footer-item
        margin-left 15px
        @media(max-width: 640px)
          display block
          padding 10px 0
          margin 0
        .footer-link
          &a
            color white          
          text-decoration underline
`;
const FooterLInk = ({href, children}) => (
  <Link href={href}>
    <div className={"footer-item"}>
      <a className={"footer-link"}>{children}</a>
    </div>
  </Link>
);
const year = (new Date).getFullYear();
export const Footer = () => (
  <div>
    <div className={"footer"}>
      <div className={"inner"}>
        <span className={"footer-item"}>© 2017 - {year} Hexat Studio</span>
        <FooterLInk href={"/privacy-policy"}>プライバシーポリシー</FooterLInk>
        <FooterLInk href={"/trade-info"}>特定商取引法に基づく表記</FooterLInk>
        <FooterLInk href={"/arika-software-licenses"}>ライセンス表記</FooterLInk>
      </div>
    </div>
    <style jsx global>{styles}</style>
  </div>
);
