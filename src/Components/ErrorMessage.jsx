export const ErrorMessage = ({ message }) => {
  return (
    <div className="text-red-600 text-center p-4 bg-red-50 rounded-lg">
      {message}
    </div>
  )
}