import Container from "@/components/container";
import Skeleton from "@/components/skeleton";

export default function Loading() {
  return (
    <Container>
      <div className="w-full h-full p-8">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Skeleton className="rounded-xl aspect-square" />

            <div className="px-4 sm:px-0 mt-10 sm:mt-16 lg:mt-0">
              <Skeleton className="rounded-xl aspect-square" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
          </div>
        </div>
      </div>
    </Container>
  );
}
