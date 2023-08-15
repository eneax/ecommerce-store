import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

export default function Billboard({ data }: BillboardProps) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="flex flex-col justify-center items-center text-center gap-y-8 h-full w-full">
          <div className="max-w-xs sm:max-w-xl font-bold text-3xl sm:text-5xl lg:text-6xl">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
}
