// vendor import
import React from 'react';

// local import
import './styles/index.scss';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/burgerbuilder';
import Checkout from './containers/checkout';

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
