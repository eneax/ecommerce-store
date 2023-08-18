"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";

import useCart from "@/hooks/use-cart";
import Button from "@/components/button";

export default function NavbarActions() {
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);
  const cart = useCart();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex items-center gap-x-4 ml-auto">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
          <span> item{cart.items.length > 1 ? "s" : ""}</span>
        </span>
      </Button>
    </div>
  );
}
