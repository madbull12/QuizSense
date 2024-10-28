import CreateQuizForm from '@/components/dashboard/quiz/create-quiz-form'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title:"Quiz",
  description:"The Quiz Form of QuizSense"
}
const QuizMePage = () => {
  return (
    <main className='p-8'>
      <CreateQuizForm />
    </main>
  )
}

export default QuizMePage