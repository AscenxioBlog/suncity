// import React, { useContext } from 'react';
// import { AppContext } from '../../GeneralComponent/ContextApp';
// import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
// import { XMarkIcon } from '@heroicons/react/24/outline';

// function Cart() {
//   const { toggleCart, isCartOpen,  } =useContext(AppContext);




//   return (
//     <Dialog open={isCartOpen} onClose={toggleCart} className="relative z-10">
//       <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" />

//       <div className="fixed inset-0 overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//             <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition ease-in-out duration-500">
//               <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
//                 <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
//                   <div className="flex items-start justify-between">
//                     <DialogTitle className="text-lg font-medium text-gray-900">Shopping Cart</DialogTitle>
//                     <button
//                       type="button"
//                       onClick={toggleCart}
//                       className="ml-3 flex h-7 items-center text-gray-400 hover:text-gray-500"
//                     >
//                       <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                       <span className="sr-only">Close panel</span>
//                     </button>
//                   </div>

//                   <div className="mt-8">
//                     <ul role="list" className="-my-6 divide-y divide-gray-200">
//                       {cart.map((item) => (
//                         <li key={item.id} className="flex py-6">
//                           <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
//                             <img
//                               src={item.image}
//                               alt={item.imageAlt}
//                               className="h-full w-full object-cover object-center"
//                             />
//                           </div>

//                           <div className="ml-4 flex flex-1 flex-col">
//                             <div className="flex justify-between text-base font-medium text-gray-900">
//                               <h3>{item.name}</h3>
//                               <p className="ml-4">${(item.newprice * item.quantity).toFixed(2)}</p>
//                             </div>
//                             <div className="flex items-center justify-between mt-2">
//                               <div className="flex items-center">
//                                 <button
//                                   onClick={() => decreaseQuantity(item.id)}
//                                   className="px-2 py-1 text-sm font-medium text-gray-600 border rounded-l-md"
//                                 >
//                                   -
//                                 </button>
//                                 <span className="px-3">{item.quantity}</span>
//                                 <button
//                                   onClick={() => increaseQuantity(item.id)}
//                                   className="px-2 py-1 text-sm font-medium text-gray-600 border rounded-r-md"
//                                 >
//                                   +
//                                 </button>
//                               </div>
//                               <button
//                                 onClick={() => removeFromCart(item.id)}
//                                 className="font-medium text-red-500 hover:text-red-700"
//                               >
//                                 Remove
//                               </button>
//                             </div>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//                   <div className="flex justify-between text-base font-medium text-gray-900">
//                     <p>Subtotal</p>
//                     <p>${calculateTotal().toFixed(2)}</p>
//                   </div>
//                   <p className="mt-0.5 text-sm text-gray-500">
//                     Shipping and taxes calculated at checkout.
//                   </p>
//                   <div className="mt-6">
//                     <a
//                       href="#"
//                       className="flex items-center justify-center rounded-md border bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
//                     >
//                       Checkout
//                     </a>
//                   </div>
//                   <div className="mt-6 flex justify-center text-sm text-gray-500">
//                     <button
//                       onClick={toggleCart}
//                       className="font-medium text-indigo-600 hover:text-indigo-700"
//                     >
//                       Continue Shopping &rarr;
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </DialogPanel>
//           </div>
//         </div>
//       </div>
//     </Dialog>
//   );
// }

// export default Cart;



import React, { useContext } from 'react';
import { AppContext } from '../../GeneralComponent/ContextApp';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Cart() {
  const {
    toggleCart,
    isCartOpen,
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    calculateTotal,
  } = useContext(AppContext);

  return (
    <Dialog open={isCartOpen} onClose={toggleCart} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition ease-in-out duration-500">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Shopping Cart</DialogTitle>
                    <button
                      type="button"
                      onClick={toggleCart}
                      className="ml-3 flex h-7 items-center text-gray-400 hover:text-gray-500"
                    >
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      <span className="sr-only">Close panel</span>
                    </button>
                  </div>

                  <div className="mt-8">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {cart.map((item) => (
                        <li key={item.id} className="flex py-6">
                          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center">
                                <button
                                  onClick={() => decreaseQuantity(item.id)}
                                  className="px-2 py-1 text-sm font-medium text-gray-600 border rounded-l-md"
                                >
                                  -
                                </button>
                                <span className="px-3">{item.quantity}</span>
                                <button
                                  onClick={() => increaseQuantity(item.id)}
                                  className="px-2 py-1 text-sm font-medium text-gray-600 border rounded-r-md"
                                >
                                  +
                                </button>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="font-medium text-red-500 hover:text-red-700"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${calculateTotal().toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/checkout"
                      className="flex items-center justify-center rounded-md border bg-deepgreen px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-sm text-gray-500">
                    <button
                      onClick={toggleCart}
                      className="font-medium text-deepgreen hover:text-indigo-700"
                    >
                      Continue Shopping &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default Cart;
