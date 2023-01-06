import { useContext } from "react";
import { Store } from "../Store";
import { Helmet } from "react-helmet-async";
import ErrorBox from "../components/ErrorBox";
import { Link } from "react-router-dom";

export default function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1 className="text-3xl">Shopping Cart</h1>
      <div>
        <div>
          {cartItems.length === 0 ? (
            <ErrorBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </ErrorBox>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item._id} className="mt-6">
                  <div className=" grid grid-cols-4 w-3/5 pl-4 ml-4  border border-orange-300 h-30 ">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-w-full rounded-lg h-20 "
                      />{" "}
                      <Link to={`/product/${item.slug}`} className="text-xs">
                        {item.name}
                      </Link>
                    </div>
                    <div className="flex px-5 ml-6">
                      <div
                        disabled={item.quantity === 1}
                        className="mx-auto my-auto text-xs"
                      >
                        <i className="fas fa-minus-circle"></i>
                      </div>{" "}
                      <span className="mx-auto my-auto  text-xs">
                        {item.quantity}
                      </span>{" "}
                      <div
                        disabled={item.quantity === item.countInStock}
                        className="mx-auto my-auto text-xs"
                      >
                        <i className="fas fa-plus-circle"></i>
                      </div>
                    </div>
                    <div className="mx-auto my-auto">${item.price}</div>
                    <div className="mx-auto my-auto">
                      <div>
                        <i className="fas fa-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div md={4}>
          <div>
            <div>
              <div>
                <div>
                  <h3 className="text-center mt-4">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </div>
                <div>
                  <div className="grid">
                    <div
                      type="button"
                      className="text-center mx-auto rounded-full bg-orange-300  text-white text-l py-2 px-4 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-orange-900"
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
