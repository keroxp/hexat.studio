import * as React from "react";
import Link from "next/link"
import {merge} from "../lib/util";
import {Table, TableCell} from "./table";
import {kMainFontColor} from "../lib/constants";

const styles = {
  header: {
    padding: "30px 0 10px 0",
    width: "100%",
    height: 50,
    display: "table"
  },
  inner: {
    margin: "auto",
    maxWidth: "1024px",
  },
  table: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  headerLink: {
    fontWeight: "bold",
    padding: "15px 0",
    marginLeft: "15px"
  },
  columnCenter: {
    flexGrow: "1"
  },
  h1: {
    textAlign: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.8em",
    color: "#444",
    fontFamily: "'Gibson', sans-serif, \"Helvetica Neue\", HelveticaNeue, Arial, sans-serif"
  },
  headerLinkRight: {},
  brand: {
    width: "150px",
    height: "150px",
    margin: "auto"
  },
  radialImage: {
    maxWidth: "100%",
    maxHeight: "100%"
  }
};
const HeaderLink = ({href, children}) => (
  <Link href={href}>
    <div style={styles.headerLink}>
      <a>{children}</a>
    </div>
  </Link>
);
const Logo = () => (
  <Link href={"/"}>
    <h1 style={styles.h1}>
      <a style={merge(styles.logo)}>Hexat Studio</a>
    </h1>
  </Link>
);
const Brand = () => (
  <div style={styles.brand}>
    <Link href={"/"}>
      <a>
        <img style={styles.radialImage} src={"/static/img/main.png"}/>
      </a>
    </Link>
  </div>
);
export const Header = () => (
  <header style={styles.header}>
    <div style={styles.inner}>
      <Logo/>
      <Brand/>
      <div style={styles.table}>
        <HeaderLink href={"/about"}>About</HeaderLink>
        <HeaderLink href={"/arika"}>黒羽のアリカ</HeaderLink>
        <HeaderLink href={"/contact"}>Contact</HeaderLink>
      </div>
    </div>
  </header>
);
