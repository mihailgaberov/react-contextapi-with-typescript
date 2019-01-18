import * as React from "react";
import {IAppContext, withAppContext} from "./AppContext";
import {createRecord, readRecord, updateRecord} from './localStorageService';

const storeSelectedLanguage = (lang: string, changeLang: () => string): any => (e: React.MouseEvent) => {
    const selectedLanguage = changeLang();
    if (readRecord('lang')) {
        updateRecord('lang', selectedLanguage);
    } else {
        createRecord('lang', selectedLanguage);
    }
};

const LangSwitcher = ({appContext, changeLanguage}: { appContext: IAppContext, changeLanguage: () => string }) =>
    appContext && (
        <React.Fragment>
            <button type="button"
                    onClick={storeSelectedLanguage(appContext.lang, changeLanguage)}>{appContext.buttonLabel}</button>
        </React.Fragment>
    );

export default withAppContext(LangSwitcher);
