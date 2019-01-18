import * as React from "react";
import {AppContextProvider} from "./AppContext";
import {AppRouter} from "./AppRouter";
import { readRecord } from './localStorageService';
import * as translationsDE from './translations/translations-de.json';
import * as translationsEN from './translations/translations-en.json';

export default class App extends React.Component {
    public lang = readRecord('lang');
    public translations = this.lang && this.lang === 'DE' ? translationsDE : translationsEN;

    public state = {
        appTranslations: {
            buttonLabel: this.translations.buttonLabel,
            chatPageName: this.translations.chatPageName,
            lang: this.translations.lang,
            nav: {
                chatTabLabel: this.translations.nav.chatTabLabel,
                settingsTabLabel: this.translations.nav.settingsTabLabel
            },
            settingsPageName: this.translations.settingsPageName,
        }
    };

    public render() {
        return (
            <AppContextProvider value={this.state.appTranslations}>
                <AppRouter changeLanguageHandler={this.changeLang}/>
            </AppContextProvider>
        );
    }

    private changeLang = (): string => {
        this.setState({
            appTranslations: this.state.appTranslations.lang === 'EN' ? translationsDE : translationsEN
        });

        return this.state.appTranslations.lang === 'EN' ? 'DE' : 'EN';
    };
}