import React, { useEffect, useState } from "react";
import { UseCart } from "../Context/cartContext";
import data from "../data.json";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

function Card() {
  const { total, setTotal, count, setCount } = UseCart();

  let [list, setList] = useState([]);

  useEffect(() => {
    setList(data);
    let b = data.reduce((acc, elem) => {
      return (acc = acc + elem.phone_price * elem.quantity);
    }, 0);
    setTotal(b);
  }, [data]);

  let btn = (e) => {
    let a = list.filter((elem, index) => {
      return e != index;
    });
    let b = a.reduce((acc, elem) => {
      return (acc = acc + elem.phone_price * elem.quantity);
    }, 0);
    setTotal(b.toFixed(2));
    setList(a);
  };

  let plus = (e, index) => {
    console.log(e);
    if (e) {
      let a = list.map((elem, idx) => {
        if (idx == index) {
          elem.quantity = elem.quantity + 1;
        }
        return elem;
      });
      setList(a);
      let b = a.reduce((acc, elem) => {
        return (acc = acc + elem.phone_price * elem.quantity);
      }, 0);
      setTotal(b.toFixed(2));
    } else {
      if (list[index].quantity > 0) {
        let a = list.map((elem, idx) => {
          if (idx == index) {
            elem.quantity = elem.quantity - 1;
          }
          return elem;
        });
        setList(a);

        let b = a[index].phone_price;
        console.log(list);
        setTotal((total - b).toFixed(2));
      }
      if (list[index].quantity == 0) {
        btn(index);
      }
    }
  };

  let clear = () => {
    console.log(list);
    setCount(0);
  };

  useEffect(() => {
    let a = list.reduce((acc, elem) => {
      return (acc += elem.quantity);
    }, 0);
    setCount(a);
    console.log(a);
  }, [list]);

  return (
    <div className="main-box">
      {count > 0 ? (
        <>
          <main>
            {list.map((e, index) => (
              <div className="cartBox" key={index}>
                <div className="cartBox1">
                  <img width={"100px"} src={e.phone_img} alt={e.phone_name} />
                  <div className="cartBox-detail">
                    <p className="para1">{e.phone_name}</p>
                    <p className="para2">${e.phone_price}</p>
                    <button className="remove" onClick={() => btn(index)}>
                      remove
                    </button>
                  </div>
                </div>
                <div className="cartBox2">
                  <FaAngleUp onClick={() => plus(true, index)} />
                  <span>{e.quantity}</span>
                  <FaAngleDown onClick={() => plus(false, index)} />
                </div>
              </div>
            ))}
            <div className="cartBox22">
              <p className="total">Total</p>
              <p className="total-price">${total}</p>
            </div>
            <button
              onClick={clear}
              type="button"
              style={{ width: "100%", fontSize: "1.2rem" }}
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Empty Cart
            </button>
          </main>
        </>
      ) : (
        <div className="empty-box">
          <h1>YOUR BAG</h1>
          <p>is currently empty</p>
        </div>
      )}
    </div>
  );
}

export default Card;
