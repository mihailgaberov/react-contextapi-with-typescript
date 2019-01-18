import * as React from 'react';
import {IAppContextInterface, withAppContext} from "../AppContext";
import LangSwitcher from "../LangSwitcher";

const SettingsPage = ({appContext, changeLang}: { appContext: IAppContextInterface, changeLang: () => void }) =>
    (
        <div>
            <h3>{appContext.settingsPageName}</h3>
            <LangSwitcher changeLanguage={changeLang} />
        </div>
    );

export default withAppContext(SettingsPage as React.FunctionComponent);