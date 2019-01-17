import * as React from "react";

export interface IAppContextInterface {
  lang: string;
  nav: {
    chatTabLabel: string,
    settingsTabLabel: string
  };
}

const ctxt = React.createContext<IAppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;

export const AppContextConsumer = ctxt.Consumer;

export function withAppContext<P extends { appContext?: IAppContextInterface }>(Component: React.ComponentClass<P> | React.FunctionComponent<P>
): React.FunctionComponent<P> {
  return function BoundComponent(props: P) {
    return (
      <AppContextConsumer>
        {value => <Component {...props} appContext={value} />}
      </AppContextConsumer>
    );
  };
}
