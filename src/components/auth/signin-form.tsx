'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { InputBlock } from '@/components/ui/input';
import { signIn } from 'next-auth/react';
import StatefulButton from '@/components/ui/stateful-button';
import { toast } from 'sonner';

const formSchema = z.object({
  email: z.string().min(1, { message: "Email can't be empty" }),
});
const SigninForm = () => {
  const [isPending, startTransition] = useTransition();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    startTransition(async () => {
      try {
        await signIn('nodemailer', {
          email: values.email,
          redirect: false,
          callbackUrl: `${window.location.origin}`,
        });
        toast.success(`Email has been sent to ${values.email}`)
      } catch (error) {
        toast.error("Oops... something went wrong")
        
      }

    });
  }
  return (
    <div className="py-6 px-8 w-3/4 md:w-1/2 lg:w-2/6 mx-auto border mt-8 rounded-lg space-y-4">
      <h4 className="text-2xl font-bold">Sign in with email</h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <InputBlock
                    type="email"
                    placeholder="test@gmail.com"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <StatefulButton text="Send" isPending={isPending} type='submit' />
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;
