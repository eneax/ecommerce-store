"use client";

import * as React from "react";

import useCart from "@/hooks/use-cart";

import Container from "@/components/container";

import CartItem from "./components/cart-item";
import Summary from "./components/summary";

export const revalidate = 0;

export default function CartPage() {
  const cart = useCart();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="lg:grid lg:grid-cols-12 lg:items-start gap-x-12 mt-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">No items added to cart.</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
}
