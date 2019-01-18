import * as React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Navigation from "./Navigation";
import ChatPage from './pages/Chat'
import SettingsPage from "./pages/Settings";

export const AppRouter = ({changeLanguageHandler}: { changeLanguageHandler: () => void }) => {
    const renderSettingsPage = (routeProps: any) => {
        return (<SettingsPage changeLang={changeLanguageHandler} {...routeProps} />);
    };

    return (
        <HashRouter>
            <React.Fragment>
                <Navigation />
                <Switch>
                    <Route exact={true} path="/" component={ChatPage} />
                    <Route path="/chat" component={ChatPage} />
                    <Route path="/settings" render={renderSettingsPage} />
                </Switch>
            </React.Fragment>
        </HashRouter>
    );
}
