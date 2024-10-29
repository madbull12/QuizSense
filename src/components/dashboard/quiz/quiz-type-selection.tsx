import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { QuizSchema } from '@/schema/quizSchema';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const QuizTypeSelection = () => {
  const form = useFormContext<QuizSchema>();
  return (
    <FormField
      control={form.control}
      name="quizType"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Quiz Type</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a quiz type" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="multiple_choice">Multiple Choice</SelectItem>
              <SelectItem value="true_false">True or False</SelectItem>
              <SelectItem value="fill_in_the_blanks">
                Fill in the blanks
              </SelectItem>
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default QuizTypeSelection;
