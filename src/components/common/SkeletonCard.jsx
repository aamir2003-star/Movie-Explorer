const SkeletonCard = () => (
  <div className="border border-gray-700 rounded overflow-hidden bg-[#16213e]">
    <div className="bg-[#222] aspect-2/3" />
    <div className="p-2.5 flex flex-col gap-2">
      <div className="h-3 bg-[#333] rounded w-4/5" />
      <div className="h-2.5 bg-[#2a2a2a] rounded w-2/5" />
      <div className="h-7 bg-[#2a2a2a] rounded mt-1" />
    </div>
  </div>
);
export default SkeletonCard