import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/users/homePage';
import RouterCustom from './router';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <RouterCustom/>
      </BrowserRouter>
    </div>
  );
}

export default App;
