import catSuit from "/catSuit.png"

export const CatImage = () => {
  return (
    <img 
      src={catSuit} 
      alt="Cat in suit"
      className=" w-50 lg:w-100 object-cover rotate-7" 
      draggable="false"
    />
  )
}