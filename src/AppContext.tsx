import * as React from "react";

export interface IAppContextInterface {
    buttonLabel: string;
    lang: string;
    nav: {
        chatTabLabel: string,
        settingsTabLabel: string
    };
    settingsPageName: string;
    chatPageName: string;
}

const context = React.createContext<IAppContextInterface | null>(null);

export const AppContextProvider = context.Provider;

export const AppContextConsumer = context.Consumer;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withAppContext<P extends { appContext?: IAppContextInterface }, R = Omit<P, "appContext">>(
    WrappedComponent: React.ComponentClass<P> | React.FunctionComponent<P>
): React.FunctionComponent<R> {
    return function BoundComponentHOC(props: R) {
        return (
            <AppContextConsumer>
                {value => <WrappedComponent {...props as any} appContext={value} />}
            </AppContextConsumer>
        );
    };
}