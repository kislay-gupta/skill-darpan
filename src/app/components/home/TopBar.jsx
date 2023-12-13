"use client"
import React, { useState } from 'react'

function TopBar() {
    const [topBarState, setTopBarState] = useState(true)

    return (

    <>
    {topBarState &&
    <div class="flex items-center justify-between gap-4 bg-primary px-4 py-1 text-gray-900">
    <p class="text-sm font-medium">
      Love JS?
      <a href="#" class="inline-block underline">Check out this new course!</a>
    </p>

    <button
      aria-label="Dismiss"
      class="shrink-0  rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
        onClick={()=>{setTopBarState(false)}}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
  }
    </>
  )
}

export default TopBar