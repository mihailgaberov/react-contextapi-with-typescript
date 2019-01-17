import * as React from "react";
import { withAppContext } from "./AppContext";

const PostInfoComp = ({ appContext }: any) =>
  appContext && (
    <div>
      lang: {appContext.lang} <br />
      chat: {appContext.nav.chatTabLabel} <br />
      settings: {appContext.nav.settingsTabLabel}
    </div>
  );

export const PostInfo = withAppContext(PostInfoComp);
