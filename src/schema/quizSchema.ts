import { z } from "zod";

export const quizSchema = z.object({
    topic: z.string().min(1, {
        message: "Topic shouldn't be empty"
    }),
    numberOfQuestions: z.number().min(1, {
        message: "Please provide the number of questions you want"
    }).max(20,{
        message:"Number of questions shouldn't be above 20"
        
    }),
    quizType: z.union([
        z.literal('multiple_choice'),
        z.literal('true_false'),
        z.literal('fill_in_the_blanks'),
    ]),
    difficulty: z.union([
        z.literal('easy'),
        z.literal('medium'),
        z.literal('advanced'),
    ])
})

export type QuizSchema = z.infer<typeof quizSchema>