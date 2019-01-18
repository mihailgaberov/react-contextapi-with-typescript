import * as React from "react";
import {IAppContextInterface, withAppContext} from "./AppContext";
import {PostInfo} from "./PostInfo";

const Post = ({appContext}: {appContext: IAppContextInterface}) => (
    <div>
        <h2>{appContext.title}</h2>
        <PostInfo />
    </div>
);

export default withAppContext(Post as React.FunctionComponent)