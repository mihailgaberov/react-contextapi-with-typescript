import * as React from "react";
import {render} from "react-dom";
import {AppContextProvider} from "./AppContext";
import LangSwitcher from './LangSwitcher';
import Post from "./Post";
import * as translationsDE from './translations/translations-de.json';
import * as translationsEN from './translations/translations-en.json';

export class App extends React.Component {
    public state = {
        sampleAppContext: {
            buttonLabel: translationsEN.buttonLabel,
            lang: translationsEN.lang,
            nav: {
                chatTabLabel: translationsEN.nav.chatTabLabel,
                settingsTabLabel: translationsEN.nav.settingsTabLabel
            },
            title: translationsEN.title,
        }
    };

    public render() {
        return (
            <AppContextProvider value={this.state.sampleAppContext}>
                <LangSwitcher changeLanguage={this.changeLang} />
                <Post />
            </AppContextProvider>
        );
    }

    private changeLang = (): void => {
        this.setState({
            sampleAppContext: this.state.sampleAppContext.lang === 'EN' ? translationsDE : translationsEN
        });
    };
}

render(<App />, document.getElementById("root"));
