
import './App.css'
import MyRouter from './Routes/MyRouter';

import store from './store/store';
import { Provider } from 'react-redux';

function App() {



  return (
    <Provider store={store}>
      <MyRouter />
    </Provider>
  )
}

export default App
