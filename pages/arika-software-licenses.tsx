import {Page} from "../components/layout";
import * as React from "react";
import {License} from "../components/license";
import {MITLicense} from "../lib/licenses/mit";
import {SpineLicense} from "../lib/licenses/spine";
import {ApacheLicenseV2} from "../lib/licenses/apache2";
import {ZlibLicense} from "../lib/licenses/zlib";
import ImageIcon from "@material-ui/icons/Image"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import TextFormatIcon from "@material-ui/icons/TextFormat";
import ComputerIcon from "@material-ui/icons/Computer";
const styles = {
  h2: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px"
  },
  h2Icon: {
    marginRight: "10px"
  },
  h2Text: {
    fontSize: "15pt",
    fontWeight: "bold"
  },
  h3: {
    fontSize: "13pt",
    fontWeight: "bold"
  },
  section: {
    marginLeft: "10px",
  }
};
const H2 = ({icon, children}) => (
  <div style={styles.h2}>
    <span style={styles.h2Icon}>
      {icon}
    </span>
    <span style={styles.h2Text}>{children}</span>
  </div>
);
const H3 = ({children}) => (
  <p style={styles.h3}>{children}</p>
);
const Section = ({children}) => (
  <section style={styles.section}>
    {children}
  </section>
);
export default () => (
  <Page>
    <h1>ライセンス表記</h1>
    <section>
      <p>『黒羽のアリカ』では以下のフリー素材、オープンソースソフトウェアをそれぞれのライセンスに基づき使用しています。</p>
      <hr/>
      <H2 icon={<ImageIcon/>}>画像素材</H2>
      <Section>
        <p><strong>Hawcons Gestures Stroke</strong></p>
        <p><a
          href="http://www.flaticon.com/packs/hawcons-gestures-stroke">http://www.flaticon.com/packs/hawcons-gestures-stroke</a>
        </p>
        <License name={"Creative Commons License 3.0 - BY | © Yannick Lung"}>
          <a href="https://creativecommons.org/licenses/by/3.0/">https://creativecommons.org/licenses/by/3.0/</a>
        </License>
      </Section>
      <H2 icon={<LibraryMusicIcon/>}>音楽・効果音</H2>
      <Section>
        <p><strong>Music is VFR</strong></p>
        <p><a href="http://musicisvfr.com/">http://musicisvfr.com/</a></p>
      </Section>
      <H2 icon={<TextFormatIcon/>}>フォント</H2>
      <Section>
        <p><strong>Open Sans</strong></p>
        <p><a
          href="http://www.flaticon.com/packs/hawcons-gestures-stroke">https://fonts.google.com/specimen/Open+Sans</a>
        </p>
        <p><strong>やさしさゴシック</strong></p>
        <p><a
          href="http://www.fontna.com/%E3%82%84%E3%81%95%E3%81%97%E3%81%95%E3%82%B4%E3%82%B7%E3%83%83%E3%82%AF/">http://www.fontna.com/やさしさゴシック/</a>
        </p>
        <p><strong>IPAフォント</strong></p>
        <p><a href="https://mplus-fonts.osdn.jp/">http://ipafont.ipa.go.jp/old/ipafont/download.html</a></p>
        <p><strong>M+フォント</strong></p>
        <p><a href="https://mplus-fonts.osdn.jp/">https://mplus-fonts.osdn.jp/</a></p>
      </Section>
      <H2 icon={<ComputerIcon/>}>ソフトウェア</H2>
      <Section>
        <H3>UniRx</H3>
        <p><a href="https://github.com/anchan828/social-connector">https://github.com/neuecc/UniRx</a></p>
        <License name={"MIT License | Copyright (c) 2014 Yoshifumi Kawai"}>
          {MITLicense("Copyright (c) 2014 Yoshifumi Kawai")}
        </License>
        <H3>social-connector</H3>
        <p><a href="https://github.com/anchan828/social-connector">https://github.com/anchan828/social-connector</a></p>
        <License name={"Zlib License | Copyright (C) 2011 Keigo Ando"}>
          {ZlibLicense("Copyright (C) 2011 Keigo Ando")}
        </License>
        <H3>FlatBuffers</H3>
        <p><a href="https://github.com/google/flatbuffers">https://github.com/google/flatbuffers</a></p>
        <License name={"MIT License | Copyright 2014 Google Inc."}>
          {ApacheLicenseV2("Copyright 2014 Google Inc.")}
        </License>
        <H3>spine-runtimes</H3>
        <p><a
          href="https://github.com/EsotericSoftware/spine-runtimes">https://github.com/EsotericSoftware/spine-runtimes</a>
        </p>
        <License name={"Spine Runtimes Software License v2.5 | Copyright (c) 2013-2016, Esoteric Software"}>
          {SpineLicense}
        </License>
        <H3>TouchScript</H3>
        <p><a href="https://github.com/TouchScript/TouchScript">https://github.com/TouchScript/TouchScript</a></p>
        <License name={"MIT License | Copyright (c) 2015 Valentin Simonov and other contributors."}>
          {MITLicense("Copyright (c) 2015 Valentin Simonov and other contributors.")}
        </License>
      </Section>
    </section>
  </Page>
)
