export default function PianoLoading() {
  return (
    <div className="flex flex-col items-center p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Virtual Piano</h1>
      
      <div className="relative w-full max-w-[800px] h-[180px] bg-gray-100 animate-pulse rounded-md mb-8">
        {/* Piano loading placeholder */}
      </div>
      
      <div className="w-3/4 max-w-md h-8 bg-gray-200 animate-pulse rounded-md mb-4"></div>
      <div className="w-1/2 max-w-xs h-6 bg-gray-200 animate-pulse rounded-md mb-8"></div>
      
      <div className="w-32 h-10 bg-gray-200 animate-pulse rounded-md mb-8"></div>
      
      <div className="w-3/4 max-w-md h-8 bg-gray-200 animate-pulse rounded-md mb-4"></div>
      <div className="grid grid-cols-2 gap-2 w-full max-w-md">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-10 bg-gray-200 animate-pulse rounded-md"></div>
        ))}
      </div>
    </div>
  );
} 