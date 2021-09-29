import { Route } from 'react-router';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <switch>
      <Route exact  path='/' component={HomePage} />
      <Route exact  path='/hats' component={HatsPage} />
    </switch>
  );
}

export default App;
