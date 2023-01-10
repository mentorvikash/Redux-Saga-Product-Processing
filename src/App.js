import './App.css';
import ProductGenerator from './components.js/ProductGenerator';
import Headers from './components.js/Headers';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore()

function App() {
  return (
    <Provider store={store} >
      <Headers />
      <ProductGenerator />
    </Provider>
  );
}

export default App;
