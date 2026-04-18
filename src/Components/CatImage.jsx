import catSuit from "/catSuit.png"

export const CatImage = () => {
  return (
    <img 
      src={catSuit} 
      alt="Cat in suit"
      className="w-100 object-cover rotate-7" 
    />
  )
}