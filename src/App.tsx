import * as React from "react";
import {AppContextProvider} from "./AppContext";
import {AppRouter} from "./AppRouter";
import * as translationsDE from './translations/translations-de.json';
import * as translationsEN from './translations/translations-en.json';;

export default class App extends React.Component {
    public state = {
        sampleAppContext: {
            buttonLabel: translationsEN.buttonLabel,
            chatPageName: translationsEN.chatPageName,
            lang: translationsEN.lang,
            nav: {
                chatTabLabel: translationsEN.nav.chatTabLabel,
                settingsTabLabel: translationsEN.nav.settingsTabLabel
            },
            settingsPageName: translationsEN.settingsPageName,
        }
    };

    public render() {
        return (
            <AppContextProvider value={this.state.sampleAppContext}>
                <AppRouter changeLanguageHandler={this.changeLang}/>
            </AppContextProvider>
        );
    }

    private changeLang = (): void => {
        this.setState({
            sampleAppContext: this.state.sampleAppContext.lang === 'EN' ? translationsDE : translationsEN
        });
    };
}