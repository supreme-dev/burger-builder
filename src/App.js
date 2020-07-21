// vendor import
import React from 'react';

// local import
import './styles/index.scss';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/burgerbuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
