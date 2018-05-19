import * as React from "react";
import {Page} from "../components/layout";
import css from "styled-jsx/css";
import {FlexTable, FlexTableCellLeft, FlexTableCellRight} from "../components/flex-table";

const youtubeStyle = css`
  .youtube-iframe
    max-width 640px
    max-height 360px         
    @media(max-width: 640px)
      width 100%              /*横幅いっぱいにwidthを指定*/
      padding-bottom 56.25%  /*高さをpaddingで指定(16:9)*/    
    height 0px              /*高さはpaddingで指定するためheightは0に*/
    padding-bottom 360px         
    position relative
    iframe
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      max-height 360px
`;
const YouTubeFrame = () => (
  <div className={"youtube-iframe"}>
    <iframe frameBorder="0" width={"640"} height={"360"} src="https://www.youtube.com/embed/pPDprpmPRKc"
            allowFullScreen/>
    <style jsx>{youtubeStyle}</style>
  </div>
);
const appStoreStyle = css`
  .download-on-appstore 
    display:inline-block;
    overflow:hidden;
    margin: 12px 0;
    background:url(/static/img/download-on-appstore.svg) no-repeat;
    width:128px;height:50px;
    background-size:contain;    
`;
const DownloadOnAppStore = () => (
  <div>
    <a href="http://hexat.studio/arika" target="_blank"><img src="/static/img/arika-icon.png" alt="黒羽のアリカ"/></a><br/>
    <a href="https://itunes.apple.com/jp/app/%E9%BB%92%E7%BE%BD%E3%81%AE%E3%82%A2%E3%83%AA%E3%82%AB/id1225828811?mt=8"
       className="download-on-appstore"></a>
    <style jsx>{appStoreStyle}</style>
  </div>
);
const CharacterImage =  ({src}) => (
  <div style={{width: 250}}>
    <img style={{ display: "block", margin: "auto"}}
         src={src}/>
  </div>
);
export default () => (
  <Page>
    <section>
      <h1>黒羽のアリカ</h1>
      <h2>概要</h2>
      <FlexTable alignItems={"start"}>
        <FlexTableCellLeft>
          <DownloadOnAppStore/>
        </FlexTableCellLeft>
        <FlexTableCellRight>
          <p>『黒羽のアリカ』（くろばねのありか）は、<a href="https://twitter.com/keroxp" target="_blank">@keroxp</a>が個人で企画・開発しているスマートフォンゲームです。
          </p>
          <p>タップとフリック操作で障害物を避けながら、翼ある少女アリカたちをできるだけ高く飛ばしてください。</p>
          <p>ゲームには翼ある個性豊かな女の子のキャラクターがたくさん登場します！</p>
          <p><strong>2017年6月20日、AppStoreにて配信開始いたしました！</strong></p>
        </FlexTableCellRight>
      </FlexTable>
      <h2>トレイラー</h2>
      <YouTubeFrame/>
      <h2>スクリーンショット</h2>
      <p><span><a href="https://gyazo.com/b043038e8dfbb5318ea8bd391b8d02e2"><img
        alt="https://gyazo.com/b043038e8dfbb5318ea8bd391b8d02e2"
        src="https://i.gyazo.com/b043038e8dfbb5318ea8bd391b8d02e2.png" width="200"/></a></span> <span><a
        href="https://gyazo.com/74b2fd4d741e1cc0520023265fd3cfc4"><img
        alt="https://gyazo.com/74b2fd4d741e1cc0520023265fd3cfc4"
        src="https://i.gyazo.com/74b2fd4d741e1cc0520023265fd3cfc4.png" width="200"/></a></span> <span><a
        href="https://gyazo.com/2c3b9fcd79650346f45d5bb75e62715c"><img
        alt="https://gyazo.com/2c3b9fcd79650346f45d5bb75e62715c"
        src="https://i.gyazo.com/2c3b9fcd79650346f45d5bb75e62715c.png" width="200"/></a></span></p>
      <p><span><a href="https://gyazo.com/5cddc813daaf3226a7012c98a8821445"><img
        alt="https://gyazo.com/5cddc813daaf3226a7012c98a8821445"
        src="https://i.gyazo.com/5cddc813daaf3226a7012c98a8821445.png" width="200"/></a></span> <span><a
        href="https://gyazo.com/cbe3b9f015a543f9ae19e0053493b987"><img
        alt="https://gyazo.com/cbe3b9f015a543f9ae19e0053493b987"
        src="https://i.gyazo.com/cbe3b9f015a543f9ae19e0053493b987.png" width="200"/></a></span><span><a
        href="https://gyazo.com/f91cc9895c558f753aee249ad2913377"><img
        alt="https://gyazo.com/f91cc9895c558f753aee249ad2913377"
        src="https://i.gyazo.com/f91cc9895c558f753aee249ad2913377.png" width="200"/></a></span></p>
      <hr/>
      <h2>ストーリー</h2>
      <p>翼の生えた人々が暮らす世界、<strong>ワルディア</strong>。</p>
      <p><strong>クモナシの街</strong>のはずれにある<strong>フギンの谷</strong>にひとりで暮らす<strong>アリカ</strong>は、鋭い目つきととても珍しい真っ黒な羽毛がトレードマークの女の子。
      </p>
      <p>そんな感じのアリカだけど、彼女の周りには個性豊かな友達がたくさん！</p>
      <p>大好物のリンゴを買ってアップルパイを作るために、アリカは今日も星集めに飛び立つのでした。</p>
      <hr/>
      <h2>キャラクター紹介</h2>
      <h3 className="chara-name">アリカ / ARIKA</h3>
      <FlexTable alignItems={"center"}>
        <FlexTableCellLeft>
          <CharacterImage src={"https://i.gyazo.com/9d30b6a688509e8e799f8ba08ba09d1b.png"}/>
        </FlexTableCellLeft>
        <FlexTableCellRight>
          フギンの谷に住む、黒いつばさの女の子。<br/>目つきが鋭いのは生まれつきで、怒っているわけではない。<br/>無口で物静かだけど、本当は心優しい性格。<br/>手先が器用で、工作や裁縫、料理が得意。好物はリンゴとアップルパイ。
        </FlexTableCellRight>
      </FlexTable>
      <h3 className="chara-name">マリ / MARI</h3>
      <FlexTable alignItems={"center"}>
        <FlexTableCellLeft>
          <CharacterImage src={"https://i.gyazo.com/881d5e121b05c39ea65988f11a086653.png"}/>
        </FlexTableCellLeft>
        <FlexTableCellRight>
          海辺に住む、カモメのつばさの女の子。<br/>真面目な性格で、パトロールのボランティアの合間に、よくアリカの家に遊びに行っては世話を焼いている。<br/>好きなことは、小さな妹と一緒に砂浜を散歩すること。
        </FlexTableCellRight>
      </FlexTable>
      <h3 className="chara-name">クルル / KURURU</h3>
      <FlexTable>
        <FlexTableCellLeft>
          <CharacterImage src={"https://i.gyazo.com/e8fb8c5c50590cf128c84f2106e0b895.png"}/>
        </FlexTableCellLeft>
        <FlexTableCellRight>
          高い山に住む、ツバメのつばさの女の子。<br/>自由奔放な性格で、いつも空を飛び回っては楽しそうなことを探している。<br/>いつもニコニコしているが、ニコニコしているうちにその理由を忘れてしまうらしい。<br/>好きなことは散歩ときれいな石集め。
        </FlexTableCellRight>
      </FlexTable>
      <h3 className="chara-name">スズネ / SUZUNE</h3>
      <FlexTable>
        <FlexTableCellLeft>
          <CharacterImage src={"https://i.gyazo.com/109c7197e8512b248443fed5992789f9.png"}/>
        </FlexTableCellLeft>
        <FlexTableCellRight>
          クモナシの街に住む、スズメのつばさの女の子。<br/>やんちゃな性格で、よくアリカにいたずらをしている。<br/>アリカとは小さい頃からの幼馴染で腐れ縁。<br/>好きなことはファッションとセルフィー。
        </FlexTableCellRight>
      </FlexTable>
      <h3 className="chara-name">シロハ / SHIROHA</h3>
      <FlexTable>
        <FlexTableCellLeft>
          <img
            alt="https://gyazo.com/ef598f04f523ff983a1736c09adc3e7b"
            src="https://i.gyazo.com/ef598f04f523ff983a1736c09adc3e7b.png" width="242"/>
        </FlexTableCellLeft>
        <FlexTableCellRight>
          湖の邸宅に住む、白鳥のつばさの女の子。<br/>クールな性格で、退屈なことがきらい。<br/>高貴な家のお嬢様で、わがままで世事には疎い。<br/>メイドさんがいないと着替えもできない。<br/>趣味はフェンシング。
        </FlexTableCellRight>
      </FlexTable>
    </section>
  </Page>
)
