import { useCatFact } from "../hooks/useCatFact.js"
import { LoadingSpinner } from "./LoadingSpinner.jsx"
import { ErrorMessage } from "./ErrorMessage.jsx"
import { GetFactBubble } from "./GetFactBubble.jsx"
import { CatImage } from "./CatImage.jsx"
import { CatFactTitle } from "./CatTitle.jsx"

export const FactContainer = () => {
  const { fact, loading, error, fetchFact } = useCatFact()

  return (
    <>
      <div className="flex flex-col gap-10 pt-20 bg-zing-100 min-w-0">

        <div className="self-start ml-10 mr-10 shrink-0">
          <CatFactTitle />
        </div>

        <div className="flex flex-row items-start justify-center">
          <div className="relative w-fit">
            <CatImage />

            <div className="absolute bottom-100 left-50">
              {loading && <LoadingSpinner />}
            </div>

            <div className="absolute top-35 left-80 ml-4 min-w-96 max-w-2xl mr-40">
              <GetFactBubble 
                onClick={fetchFact}
                fact={fact}
                error={error}
                loading={loading}
              />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}