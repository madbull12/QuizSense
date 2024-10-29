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
  
  const DifficultySelection = () => {
    const form = useFormContext<QuizSchema>();
    return (
      <FormField
        control={form.control}
        name="difficulty"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Difficulty</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a quiz type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="advanced">
                  Advanced
                </SelectItem>
              </SelectContent>
            </Select>
  
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };
  
  export default DifficultySelection;
  