import Link from "next/link";

import getCategories from "@/actions/get-categories";

import Container from "@/components/container";
import MainNav from "@/components/main-nav";

export const revalidate = 0;

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>

          <MainNav data={categories} />
        </div>
      </Container>
    </div>
  );
}
