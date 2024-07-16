import { UseCart } from "../Context/cartContext";
import { FaCartPlus } from "react-icons/fa6";

function Header() {
  const { count } = UseCart();
  return (
    <header>
      <nav>
        <h2 class="text-4xl font-extrabold dark:text-white">Use Reducer</h2>
        <div className="box1">
          <FaCartPlus size={32} />
          <div className="box2">
            <h1 className="cart-count">{count}</h1>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
