import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegBookmark } from 'react-icons/fa6'
import { IoPersonAddOutline } from 'react-icons/io5'

const Access = () => {
    return (
        <div className='flex items-center justify-center gap-3'>
            <button>
                <IoPersonAddOutline className='text-lg ' />
            </button>
            <button>
                <FaRegBookmark className='text-lg ' />
            </button>
            <button>
                <BsThreeDots className='text-lg ' />
            </button>
        </div>
    )
}

export default Access