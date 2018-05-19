import Document, {Head, Main, NextScript} from 'next/document'
import * as React from "react";
import {normalizeCSS} from "../lib/normalize.css";
import {kMainLinkColor} from "../lib/constants";
import css from "styled-jsx/css"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps}
  }

  render() {
    return (
      <html>
      <Head>
        <style>{normalizeCSS}</style>
        <style>{globalCSS}</style>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }
}

const globalCSS = css`
  @font-face
    font-family YuGothicM
    src local("Yu Gothic Medium")    
  html, body
    min-width 100%
    min-height 100%
    height 100%
    color #444        
  a
    color ${kMainLinkColor}
    text-decoration none
    cursor pointer  
    &:visited
      color: ${kMainLinkColor}  
`;

