import React, { useState } from 'react'
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon,
} from '@heroicons/react/outline'

const IconButton = `h-6 w-6 hover:text-blue-400 hover:cursor-pointer hover:scale-150 transition-all duration-150 ease-out`


const TweetBox = () => {

    const [input, setInput] = useState<string>('')

    return (
        <div className='flex space-x-2 p-5'>

            <img src="https://links.papareact.com/gll" className='h-14 w-14 rounded-full object-cover mt-4' />

            <div className='flex pl-2 flex-1 items-center'>
                <form action="" className='flex flex-1 flex-col'>

                    <input type="text" value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='outline-none w-full text-xl 
                    placeholder:text-xl h-24' placeholder="What's happening ?" />

                    <div className='flex items-center mx-2'>
                        <div className='flex flex-1 space-x-3 text-twitter '>
                            <PhotographIcon className={IconButton} />
                            <SearchCircleIcon className={IconButton} />
                            <EmojiHappyIcon className={IconButton} />
                            <CalendarIcon className={IconButton} />
                            <LocationMarkerIcon className={IconButton} />
                        </div>

                        <button disabled={!input} className="bg-twitter px-5 py-2 
                        text-white rounded-full disabled:opacity-40 
                        transition-all duration-200">
                            Tweet
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TweetBox