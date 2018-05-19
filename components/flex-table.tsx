/**
 * PCでは
 * [LEFT] [R  I  G  H  T]
 * みたいな感じで２カラムになって
 * スマホでは
 * [LEFT]
 * [RIGHT]
 * みたいな感じなるコンポーネント
 */
import {kResponsiveMinWidth} from "../lib/constants";
import * as React from "react";

export const FlexTable = ({alignItems = "center", children}) => (
  <div className={"flex-table"} style={{alignItems}}>
    {children}
    <style jsx>{`
      .flex-table
        display flex
        @media(max-width: ${kResponsiveMinWidth}px)
          flex-direction column
          justify-content center
          .flex-table-item
            margin auto
    `}</style>
  </div>
);
export const FlexTableCellRight = ({children}) => (
  <div className={"right flex-table-item"} >
    {children}
    <style jsx>{`
      .right
        flex-grow 1
    `}</style>
  </div>
);
export const FlexTableCellLeft = ({children}) => (
  <div className={"left flex-table-item"}>{children}
    <style jsx>{`
    .left
      @media(max-width: ${kResponsiveMinWidth}px)
        padding-bottom 30px
      @media(min-width: ${kResponsiveMinWidth}px)
        margin-right 15px
  `}</style>
  </div>
);
