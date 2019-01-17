import * as React from "react";
import { render } from "react-dom";
import { AppContextProvider } from "./AppContext";
import LangSwitcher from './LangSwitcher';
import { PostInfo } from './PostInfo';
import * as translationsDE from './translations/translations-de.json';
import * as translationsEN from './translations/translations-en.json';

const Post = () => (
  <div>
    <h2>Post info</h2>
    <PostInfo />
  </div>
);

export class App extends React.Component {
  public state = {
    sampleAppContext: {
      lang: translationsEN.lang,
      nav: {
        chatTabLabel: translationsEN.nav.chatTabLabel,
        settingsTabLabel: translationsEN.nav.settingsTabLabel
      }
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
    if (this.state.sampleAppContext.lang === 'EN') {
      this.setState({
        sampleAppContext: translationsDE
      });
    } else {
      this.setState({
        sampleAppContext: translationsEN
      });
    }
  };
}

render(<App />, document.getElementById("root"));
