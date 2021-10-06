import { Route } from 'react-router';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <switch>
      <Route exact  path='/' component={HomePage} />
      <Route exact  path='/shop' component={ShopPage} />
    </switch>
  );
}

export default App;
