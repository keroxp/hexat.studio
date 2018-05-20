import * as React from "react";
import {PageWrapper} from "../components/layout";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import css from "styled-jsx/css";

const style = css`
  .index-main
    margin 30px 0
    padding 15px
`;
const GridContent = ({children}) => (
  <div className={"grid-content"}>
    {children}
    <style jsx>{`
      .grid-content
        border 1px solid #ccc
        padding 15px
    `}</style>
  </div>
);
export default () => (
  <section>
    <PageWrapper>
      <section className={"index-main"}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <GridContent>めいんがぞー</GridContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <GridContent>
              <h2>黒羽のアリカ</h2>
              <p>ほげ</p>
            </GridContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <GridContent>
              <h2>黒羽のアリカAR</h2>
              <p>ほげ</p>
            </GridContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <GridContent>
              <h2>LINEスタンプ</h2>
              <p>ほげ</p>
            </GridContent>
          </Grid>
        </Grid>
      </section>
      <style jsx>{style}</style>
    </PageWrapper>
  </section>
)
