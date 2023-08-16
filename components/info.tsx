"use client";

import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";

import Currency from "@/components/currency";
import Button from "@/components/button";

interface InfoProps {
  data: Product;
}

export default function Info({ data }: InfoProps) {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>

      <div className="flex items-end justify-between mt-3">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.value}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>

      <div className="flex items-center gap-x-3 mt-10">
        <Button onClick={() => {}} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </>
  );
}
