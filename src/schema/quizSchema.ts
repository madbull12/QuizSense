import { z } from "zod";

export const quizSchema = z.object({
    topic: z.string().min(1, {
        message: "Topic shouldn't be empty"
    }),
    numberOfQuestions: z.number().min(1, {
        message: "Please type the number of questions you want"
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