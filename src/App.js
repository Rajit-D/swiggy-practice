import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import { useContext } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

function App() {
  const data = useContext(UserContext);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={data}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
