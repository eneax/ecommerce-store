"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";

import IconButton from "@/components/icon-button";
import Currency from "@/components/currency";

interface ProductCardProps {
  data: Product;
}

export default function ProductCard({ data }: ProductCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-white rounded-xl border p-3 space-y-4 cursor-pointer"
    >
      <div className="relative bg-gray-100 aspect-square rounded-xl">
        <Image
          src={data.images?.[0]?.url}
          alt={data.name}
          className="aspect-square object-cover rounded-md"
          fill
        />
        <div className="absolute bottom-5 w-full opacity-0 group-hover:opacity-100 transition px-6">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>

      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}
