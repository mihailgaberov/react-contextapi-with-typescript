import * as React from "react";
import {Link} from "react-router-dom";
import {IAppContextInterface, withAppContext} from "./AppContext";

const Navigation = ({ appContext}: {appContext: IAppContextInterface} ) =>
    appContext && (
        <ul>
            <li>
                <Link to="/chat">Chat</Link>
            </li>
            <li>
                <Link to="/settings">Settings</Link>
            </li>
        </ul>
    );

export default withAppContext(Navigation);
