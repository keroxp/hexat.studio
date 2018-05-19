import * as React from "react";
import {Page} from "../components/layout";
import Link from "next/link"
import {FlexTable, FlexTableCellLeft, FlexTableCellRight} from "../components/flex-table";

const styles = {
  radialImage: {
    border: "0px",
    maxWidth: "100%",
    height: "auto",
    borderRadius: "50%"
  },
  columnLeft: {
    width: "100px",
    paddingRight: 30
  }
};
export default () => (
  <Page>
    <section>
      <h2>About</h2>
      <p>Hexat Studio（ヘキサットスタジオ）は<a href={"https://keroxp.me"}>@keroxp</a>の個人事務所です。</p>
      <p>『キャラクターにプログラミングで命を吹き込む』ことをミッションに、『<Link href={"/arika"}><a>黒羽のアリカ</a></Link>』プロジェクトを主宰しています。</p>
      <h2>Profile</h2>
      <FlexTable>
        <FlexTableCellLeft>
          <img
            src="https://78.media.tumblr.com/bad8348e63417d92c519b4093b6c28af/tumblr_inline_ojraxnrh4Q1qbzg3k_500.jpg"
            width="100" style={styles.radialImage}/>
        </FlexTableCellLeft>
        <FlexTableCellRight>
          <strong>櫻井雄介 / Yusuke Sakurai / <a href="https://twitter.com/keroxp" target="_blank">@keroxp</a></strong>
          <p>横浜でソフトウェアエンジニアとして働きながら『黒羽のアリカ』プロジェクトを主宰しています。</p>
          <p>キャラクターデザイン、Webサイト作成、イラスト作成、3DCG、アプリ開発など全てを担当。</p>
          <p>詳しいプロフィールなどは<a href={"https://keroxp.me"} target={"_blank"}>こちら</a></p>
        </FlexTableCellRight>
      </FlexTable>
    </section>
  </Page>
)
