import React from 'react'

function Loader() {
  return (
    <>
    <div class="fixed cursor-wait top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-[#16161a]/75 flex flex-col items-center justify-center">
                <div class="loading-container ">
                    <div class="loading"></div>
                    <div id="loading-text">
                    <div className="flex space-x-2 justify-center items-center  h-screen dark:invert">
  <span className="sr-only">Loading...</span>
  <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
  <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
  <div className="h-8 w-8 bg-black rounded-full animate-bounce" />
</div>

                </div>
            </div>
            </div>

    </>
  )
}

export default Loader