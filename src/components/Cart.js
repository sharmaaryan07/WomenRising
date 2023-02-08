import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cartContext from '../context/product/cartContext';

export default function Example() {
    const Context = useContext(cartContext)
    const { carts, getcarts } = Context;

    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalPrice = 0;
        carts.forEach((cart) => {
          totalPrice += cart.price;
        });
        setTotal(totalPrice);
      }, [carts]);

    useEffect(() => {
        getcarts();
    })

    return (
        <div>
            <div className="mt-12 mr-12 ml-12">
                <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {carts && carts.length > 0 && carts.map((cart) => (
                            <li key={cart.id} className="flex py-6">
                                <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                        src={cart.image}
                                        alt='cart'
                                        className="h-full w-32 object-cover object-center"
                                    />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col ">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <p><b>Product Name: </b> {cart.title}</p>
                                            </h3>
                                            <p className="ml-4">₹{cart.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <div className="flex">
                                            <button
                                                type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 sm:px-6 mr-12 ml-12">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${total}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes Included.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or &nbsp;
                          <Link
                          to='/product'
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                           
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </Link>
                        </p>
                      </div>
                    </div>
        </div>
    )
}
