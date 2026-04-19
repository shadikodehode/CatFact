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
      <div className="flex flex-col items-center gap-4 lg:gap-20 pt-10 lg:pt-20 bg-zing-100 min-w-0">
        <div className="ml-5 lg:-ml-200 mt-0 lg:mt-10 mr-5 lg:mr-0 shrink-0">

          <CatFactTitle />
        
        </div>

        <div className="flex flex-col lg:flex-row items-start ml-5 lg:ml-0 lg:mr-40 mt-10 lg:mt-0">
          <div className="relative w-fit">
        
            <CatImage />

            <div className="absolute left-23 bottom-50 lg:bottom-102 lg:left-50">
              {loading && <LoadingSpinner />}
            </div>

            <div className="absolute top-20 left-40 min-w-40 sm:min-w-90 lg:top-35 lg:left-80 ml-0 lg:ml-4 lg:min-w-96 lg:max-w-2xl lg:mr-40">
        
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