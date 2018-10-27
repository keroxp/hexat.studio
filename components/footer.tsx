import Link from "next/link"
import * as React from "react";
import {kContentPadding, kMaxContentWidth} from "../lib/constants";
import css from "styled-jsx/css"
import footerCss from "../style/footer"
const styles = css``;
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
