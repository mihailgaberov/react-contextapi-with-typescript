import * as React from "react";
import { IAppContext, withAppContext } from "./AppContext";


/* Option 1: Function component */
/*const PostInfoComp = ({ appContext }: { appContext?: IAppContext }) =>
  appContext && (
    <div>
      Language: {appContext.lang} <br />
      Chat tab: {appContext.nav.chatTabLabel} <br />
      Settings tab: {appContext.nav.settingsTabLabel}
    </div>
  );

export const PostInfo = withAppContext(PostInfoComp as React.FunctionComponent);*/

/* Option 2: Class component */
export class PostInfoComp extends React.Component<{ appContext?: IAppContext }, {}> {
  public render() {
    const { appContext } = this.props;
    return (
      appContext && <div>
            Language: {appContext.lang} <br />
            Chat tab: {appContext.nav.chatTabLabel} <br />
            Settings tab: {appContext.nav.settingsTabLabel}
          </div>
    );
  }
}

export const PostInfo = withAppContext(PostInfoComp);
