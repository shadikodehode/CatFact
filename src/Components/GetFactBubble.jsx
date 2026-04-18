export const GetFactBubble = ({ onClick, fact, error, loading }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-fit cursor-pointer hover:opacity-80 transition "
    >
      <div className="bg-orange-300 p-5 rounded-xl rounded-tl-none shadow-xs w-full">
        {loading && (
          <div className="flex justify-center display:none w-20 h-20"></div>
        )}
        {error && <p className="text-red-600">{error}</p>}
        {fact && <p className="text-amber-900 font-bold text-lg">{fact}</p>}
        {!loading && !error && !fact && 
        <p className="text-amber-900 font-bold text-lg">
          Let me tell you sumthin'
        </p> }
      </div>

      <svg
        className="absolute top-0 left-0 -translate-x-full"
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="currentColor"
      >
        <polygon 
          points="0,0 20,0 20,15" 
          fill="oklch(83.7% 0.128 66.29)" 
        />
      </svg>
    </button>
  )
}