import oiia from "/cat-oiiaoiia-cat.gif"

export const LoadingSpinner = () => {
  return (
    // <div className="flex justify-center items-center">
    //   <div className="relative w-12 h-12">
    //     <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
    //     <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
    //   </div>
    // </div>
    <div>
      <img 
        src={oiia} 
        alt="Loading"
        className="w-15 lg:w-24" 
        draggable="false"
      />
    </div>
  );
};