import Link from "next/link"

export const Footer = () => (
  <div>
    <Link href={"/privacy-policy"}>
      <a>プライバシーポリシー</a>
    </Link>
    <Link href={"/trade-info"}>
      <a>特定商取引法に基づく表記</a>
    </Link>
  </div>
);
