import * as React from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummury from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
  wrapper: {},
  pre: {
    wordWrap: "break-word",
    whiteSpace: "pre-wrap"
  }
};
const Pre = ({children}) => (
  <pre style={styles.pre}>{children}</pre>
);
const Law = () => (
  <svg style={{paddingRight: "10px"}} version="1.1" width="14" height="16" viewBox="0 0 14 16"
       className="octicon octicon-law" aria-hidden="true">
    <path fillRule="evenodd"
          d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"/>
  </svg>
);
export const License = ({name, children}) => (
  <ExpansionPanel>
    <ExpansionPanelSummury expandIcon={<ExpandMoreIcon/>}>
      <span>
      <Law/>
        {name}
      </span>
    </ExpansionPanelSummury>
    <ExpansionPanelDetails>
      <Pre>{children}</Pre>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);
