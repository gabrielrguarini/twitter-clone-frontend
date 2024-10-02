import Link from "next/link";

type Props = {
  label: string;
  count: number;
};

export const TrendingItem = ({ label, count }: Props) => {
  return (
    <Link
      href={`/search?q=${encodeURIComponent(label)}`}
      className="group/item"
    >
      <p className="group-hover/item:underline font-bold">{label}</p>
      <span className="text-sm text-gray-400">{count}</span>
    </Link>
  );
};

export const TrendingItemSkeleton = () => {
  return (
    <div className="flex flex-col gap-1 animate-pulse">
      <div className="bg-gray-600 w-3/4 h-4"></div>
      <div className="bg-gray-600 w-1/4 h-4"></div>
    </div>
  );
};
