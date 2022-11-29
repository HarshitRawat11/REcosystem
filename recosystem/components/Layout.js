import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';
import React, { useContext, useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Menu } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import { Store } from '../utils/store';
import DropdownLink from './DropdownLink';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    // useEffect is used to render cookies on the client side
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  return (
    <>
      <Head>
        <title>{title ? title + ' - REcosystem' : 'REcosystem'}</title>
        <meta
          name="description"
          content="ECommerce Website for Recycled Waste Paper Products"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between bg-gradient-to-t from-rose-100 to-teal-100">
        <header>
          <nav className="flex h-16 items-center px-4 justify-between shadow-md bg-slate-800">
            <Link href="/">
              <a className="px-4 text-2xl font-semibold text-white hover:text-slate-200">
                RECOSYSTEM
              </a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="text-sm p-2 text-white hover:text-slate-200">
                  CART <ShoppingCartIcon fontSize="small" />
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="py-2 px-3 font-semibold text-white hover:text-slate-200">
                    {session.user.name} <PersonIcon fontSize="small" />
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <a className="text-sm py-2 px-3 text-white hover:text-slate-200">
                    SIGN IN <PersonIcon fontSize="small" />
                  </a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 mb-16 px-4">{children}</main>
        <footer className="flex h-12 justify-center shadow-inner items-center text-base font-semibold text-slate-700">
          COPYRIGHT &copy; 2022 RECOSYSTEM
        </footer>
      </div>
    </>
  );
}
