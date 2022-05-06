import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const Widgets = () => {
    return (
        <div className='px-2 mt-2 col-span-2 hidden lg:inline'>

            {/* search */}
            <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2'>
                <SearchIcon className='h-5 w-5 text-gray-400' />
                <input type='text' className='flex-1 outline-none bg-transparent' placeholder='Search Twitter' />
            </div>

            {/* Twitter Embed */}
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="loulater"
                options={{ height: 1000 }}
            />
        </div>
    )
}

export default Widgets