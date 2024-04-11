import React from 'react'

const ReviewHighlighter = ({ content, sentiment, topic, highlight_indices }) => {
    if (sentiment === "Positive") {
        return (
            <div>
                <p className=' leading-relaxed'>
                    <span class="group relative">
                        <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                            <div class="bottom-full right-0 rounded bg-gray-100 px-4 py-1 text-lg text-black whitespace-nowrap">
                                {topic === null ? "No Tooltip" : topic}
                                <svg class="absolute left-0 top-full h-2 w-full text-gray-100" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                            </div>
                        </div>
                        <div className='text-lg'>
                            <span>{content.slice(0, highlight_indices[0][0])}</span>
                            <span className='bg-[#D9F2DD]'>{content.slice(highlight_indices[0][0], highlight_indices[0][1])}</span>
                            <span>{content.slice(highlight_indices[0][1], content.length)}</span>
                        </div>
                    </span>
                </p>
            </div>
        )
    }
    else if (sentiment === "Negative") {
        return (
            <div>
                <p className=' leading-relaxed'><span class="group relative">
                    <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                        <div class="bottom-full right-0 rounded bg-gray-100 px-4 py-1 text-lg text-black whitespace-nowrap">
                            {topic === null ? "No Tooltip" : topic}
                            <svg class="absolute left-0 top-full h-2 w-full text-gray-100" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
                            </svg>
                        </div>
                    </div>
                    <div className='text-lg'>
                        <span>{content.slice(0, highlight_indices[0][0])}</span>
                        <span className='bg-[#F2DBD9]'>{content.slice(highlight_indices[0][0], highlight_indices[0][1])}</span>
                        <span>{content.slice(highlight_indices[0][1], content.length)}</span>
                    </div>
                </span>
                </p>
            </div>
        )
    }
    else {
        return (
            <div>
                <p className='bg-[#eaf09b6b] leading-relaxed'><span class="group relative">
                    <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                        <div class="bottom-full right-0 rounded bg-gray-100 px-4 py-1 text-lg text-black whitespace-nowrap">
                            {topic === null ? "No Tooltip" : topic}
                            <svg class="absolute left-0 top-full h-2 w-full text-gray-100" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                        </div>
                    </div>
                    <span className='text-lg'>{content}</span>
                </span>
                </p>
            </div>
        )
    }
}

export default ReviewHighlighter