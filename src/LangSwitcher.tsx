import * as React from "react";
import {IAppContextInterface, withAppContext} from "./AppContext";

const LangSwitcher = ({ appContext, changeLanguage }: {appContext: IAppContextInterface, changeLanguage: () => void}) =>
  appContext && (
    <React.Fragment>
      <button type="button" onClick={changeLanguage}>{appContext.buttonLabel}</button>
    </React.Fragment>
  );

export default withAppContext(LangSwitcher);
