import * as React from "react";
import { withAppContext } from "./AppContext";

const LangSwitcher = ({ appContext, changeLanguage }: any) =>
  appContext && (
    <React.Fragment>
      <button type="button" onClick={changeLanguage}>Change language</button>
    </React.Fragment>
  );

export default withAppContext(LangSwitcher);
