import { useCatFact } from "../hooks/useCatFact"
import { FactDisplay } from "./FactDisplay"
import { GetFactButton } from "./GetFactButton"
import { LoadingSpinner } from "./LoadingSpinner"

export const FactContainer = () => {
  const { fact, loading, error, fetchFact } = useCatFact()

  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800">Cat Facts</h1>
      <GetFactButton onClick={fetchFact} />

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {fact && <FactDisplay fact={fact} />}
    </div>
  )
}