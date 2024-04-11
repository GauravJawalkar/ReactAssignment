import React from 'react'
import { AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const ReviewStars = ({ date, ratingReviewScore }) => {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <div className='' key={index}>
                {
                    ratingReviewScore / 2 >= index + 1 ? (
                        <FaStar className='text-yellow-400 text-lg' />
                    ) : ratingReviewScore / 2 >= number ? (
                        <FaStarHalfAlt className='text-yellow-400 text-lg' />
                    ) : (
                        <AiOutlineStar className='text-yellow-400 text-lg' />
                    )
                }
            </div>
        )
    })
    return (
        <div className='flex justify-start py-5'>
            <h1 className='flex items-center'>{ratingStar} &nbsp;&nbsp;{date}</h1>
        </div>
    )
}

export default ReviewStars