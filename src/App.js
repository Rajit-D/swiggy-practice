import './App.css';
import Header from './components/Header';
// import Body from './components/Body';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      {/* <Body/> */}
    </div>
  );
} 

export default App;

