import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../component/header';
import store from '../store/index';
const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    //<Provider store={store}>
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
    //  </Provider>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
