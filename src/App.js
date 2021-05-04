import "./App.css";
import Burger from "./components/Burger/Burger";
import Menu from "./components/Menu/Menu";
import HamburgerContextProvider from "./context/HamburgerContext";

function App() {
  return (
    <HamburgerContextProvider>
      <Burger />
      <Menu />
    </HamburgerContextProvider>

  );
}

export default App;
