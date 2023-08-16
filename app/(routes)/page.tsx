import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "@/components/billboard";
import Container from "@/components/container";
import ProductList from "@/components/product-list";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard("2dbc56ba-4c38-4a2c-a009-5ede39e7fcc2");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
