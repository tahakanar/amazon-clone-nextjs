import { Provider } from "react-redux";
import { store } from "../app/store";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
};

export default MyApp;
