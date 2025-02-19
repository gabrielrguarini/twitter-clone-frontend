import { TrendingItem, TrendingItemSkeleton } from "./trending-item";

export const TrendingArea = () => {
  return (
    <div className="bg-gray-700 rounded-3xl">
      <h2 className="text-xl p-4">O que está acontecendo</h2>
      <div className="flex flex-col gap-2 p-6 pt-0 ">
        <TrendingItem label="#teste1" count={1560} />
        <TrendingItem label="#teste2" count={120} />
        <TrendingItemSkeleton />
        <TrendingItemSkeleton />
      </div>
    </div>
  );
};
