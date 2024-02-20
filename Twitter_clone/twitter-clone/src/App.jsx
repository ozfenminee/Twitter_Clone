import "./App.css";


import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
const App = () => {
  return (
    <>
      <div className="MainApp">
     
        <Routes>
          <Route path="/" exact element={<Home />} />
          
        </Routes>
      </div>
    </>
  );
};
export default App;
