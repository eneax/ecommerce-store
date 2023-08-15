import getBillboard from "@/actions/get-billboard";

import Billboard from "@/components/billboard";
import Container from "@/components/container";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard("b448c9d9-61d9-4696-abe3-af01c7f77450");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}
