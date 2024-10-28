'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { QuizSchema, quizSchema } from '@/schema/quizSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import QuizTypeSelection from '@/components/dashboard/quiz/quiz-type-selection';

const CreateQuizForm = () => {
  const form = useForm<QuizSchema>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      topic: '',
      numberOfQuestions: 1,
      quizType: 'multiple_choice',
      difficulty: 'easy',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: QuizSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-1/2 mx-auto border rounded-lg p-8"
      >
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <FormControl>
                <Input
                  className="border text-sm px-4 py-2"
                  placeholder="Artificial Intelligence"
                  {...field}
                />
              </FormControl>
              <FormDescription>Please provide a topic</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numberOfQuestions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of questions</FormLabel>
              <FormControl>
                <Input
                  onKeyDown={(e) => {
                    if (e.key === '-') e.preventDefault();
                  }}
                  onChange={(e)=>field.onChange(+e.target.value)}
                  type="number"
                  min={1}
                  max={10}
                  className="border text-sm px-4 py-2"
                  placeholder="Number of questions"
                  // {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <QuizTypeSelection />
        <Button type="submit" className="w-1/3 flex justify-center mx-auto">Submit</Button>
      </form>
    </Form>
  );
};

export default CreateQuizForm;
