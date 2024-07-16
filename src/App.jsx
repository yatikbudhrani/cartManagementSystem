import "./App.css";
import Header from "./Component/Header";
import { CartProvider } from "./Context/cartContext";
import Card from "./Component/Card";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Card />
      </div>
    </CartProvider>
  );
}

export default App;
