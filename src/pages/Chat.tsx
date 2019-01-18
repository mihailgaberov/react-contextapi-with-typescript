import * as React from 'react';
import {IAppContextInterface, withAppContext} from "../AppContext";
import Post from "../Post";

const ChatPage = ({appContext}: { appContext: IAppContextInterface }) =>
    (
        <div>
            <h3>{appContext.chatPageName}</h3>
            <Post />
        </div>
    );

export default withAppContext(ChatPage as React.FunctionComponent);
