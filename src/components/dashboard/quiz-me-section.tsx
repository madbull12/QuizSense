import React from 'react'
import { ReactTyped } from 'react-typed'

const QuizMeSection = () => {
  return (
      <div className="flex flex-col gap-y-2">
        <ReactTyped
          className="text-3xl font-light text-left break-words"
          // startWhenVisible
          strings={[
            'The process of preserving a body for the afterlife in Ancient Egypt is called ______________.',
            'The study of how the frequency of alleles in a population changes over time is known as ______________.',
          ]}
          // shuffle
          // loop
          backSpeed={20}
          typeSpeed={20}
        />
      </div>

  )
}

export default QuizMeSection