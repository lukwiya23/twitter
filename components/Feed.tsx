import React from 'react'
import {RefreshIcon} from '@heroicons/react/outline'
import TweetBox from './TweetBox'

const Feed = () => {
  return (
    <div className='lg:col-span-5 border col-span-7'>

        <div className="flex items-center justify-between ">
            <h1 className="p-5 text-xl font-bold">Home</h1>
            <RefreshIcon 
                className='h-8 w-8 cursor-pointer 
                text-twitter transition-all ease-out
                duration-500 hover:rotate-180 active:scale-125'
                />
        </div>

        {/* tweet box */}
      <div>
        <TweetBox/>
      </div>

    </div>

  )
}

export default Feed