export const GetFactButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
        Get Random Fact
    </button>
  )
}