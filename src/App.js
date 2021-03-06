import { Route } from 'react-router';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact  path='/' component={HomePage} />
        <Route exact  path='/shop' component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
