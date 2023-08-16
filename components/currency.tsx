"use client";

import * as React from "react";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

interface CurrencyProps {
  value?: string | number;
}

export default function Currency({ value = 0 }: CurrencyProps) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatPrice(Number(value))}</div>;
}
