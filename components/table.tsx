import * as React from "react";
import {merge} from "../lib/util";

const styles = {
  table: {
    display: "table"
  },
  tableCell: {
    display: "table-cell",
    verticalAlign: "middle"
  }
};
export const Table = ({style = {}, children}) => (
  <div style={merge(styles.table, style)}>
    {children}
  </div>
);

export const TableCell = ({style = {}, children}) => (
  <div style={merge(styles.tableCell, style)}>
    {children}
  </div>
);
