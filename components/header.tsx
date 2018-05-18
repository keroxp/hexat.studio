import * as React from "react";
import Link from "next/link"

export const Header = () => (
  <div>
    <Link href={"/"}>
      <a>Home</a>
    </Link>
    <Link href={"/about"}>
      <a>About</a>
    </Link>
    <Link href={"arika"}>
      <a>黒羽のアリカ</a>
    </Link>
  </div>
);
