import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    ( <div className="flex justify-center items-start gap-x-28  mt-28 mb-16 w-[100%]">
      <div className="h-fit flex flex-col gap-20 w-[33%]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col items-start justify-between h-[480px] mt-20 ">
            <div>
              <div className="text-green-700 text-[14px] font-semibold">Your Cart</div>
              <div className="font-semibold text-[25px] uppercase text-green-700 mb-3">Summary</div>
              <p className="text-[13px] text-green-700 font-semibold">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col items-start gap-y-4">
        <p className="text-[12px]">Total Amount: <span className="font-semibold ml-1">${totalAmount}</span></p>
        <button className="bg-green-700 text-white px-20 py-2 rounded-md">
                Checkout Now
              </button>
        </div>

      </div>


    </div>) : 
    ( <div className="flex flex-col justify-center items-center w-screen h-screen gap-20">
      <h1 className="text-2xl ">Cart Empety</h1>
      <Link to={"/"}>
      <button className="bg-green-700 text-white px-4 py-2 rounded-md">
              Shop Now
            </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
