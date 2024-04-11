import React from 'react'
import Access from './Access'
import ReviewStars from './ReviewStars'
import { ReviewData } from '../data/reviewsData'
import ReviewHighlighter from './ReviewHighlighter'

const ReviewList = () => {
    return (
        <>
            {ReviewData.map(({ review_id, reviewer_name, content, date, source, sentiment, topic, rating_review_score, highlight_indices }) => {
                return (
                    <div key={review_id} className='w-full px-10 py-10'>
                        <div className='flex items-start gap-5'>
                            <img src={source.icon} alt="" />
                            <div className='w-screen'>
                                <div className='flex items-center justify-between '>
                                    {console.log(reviewer_name)}
                                    <h1 className='font-bold'>{reviewer_name} <span className='font-normal'> wrote a review at</span> tripadvisor.com</h1>
                                    <Access />
                                </div>
                                <div >
                                    <ReviewStars date={date} ratingReviewScore={rating_review_score} />
                                </div>
                                <div>
                                    <ReviewHighlighter content={content} sentiment={sentiment} topic={topic} highlight_indices={highlight_indices} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ReviewList