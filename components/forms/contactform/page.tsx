"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    name: z.string().min(2).max(50),
    coname: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    phone: z.number().min(10).max(11),
  })

const ContactForm = () => {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      coname: "",
      email: "",
      phone: undefined,
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div>
        <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="text-wwblue text-left ">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold">Name</FormLabel>
                          <FormControl className="text-left  text-wwblue">
                            <Input className="text-left  text-wwblue border-t-transparent border-l-transparent border-r-transparent border-b-wwblue" placeholder="John Doe" {...field} />
                          </FormControl>                          
                          <FormMessage />
                        </FormItem>
                      )}
                    />                   
                  </div>
                  <div className="text-wwblue text-left ">
                    <FormField
                      control={form.control}
                      name="coname"
                      render={({ field }) => (
                        <FormItem  >
                          <FormLabel className="font-bold">Company Name</FormLabel>
                          <FormControl>
                            <Input className="border-t-transparent border-l-transparent border-r-transparent border-b-wwblue" placeholder="Enter your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="mt-8">
                          <FormLabel className="font-bold">Email</FormLabel>
                          <FormControl>
                            <Input className="border-t-transparent border-l-transparent border-r-transparent border-b-wwblue" placeholder="user@provider.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="mt-8">
                          <FormLabel className="font-bold">Phone Number</FormLabel>
                          <FormControl>
                            <Input className="border-t-transparent border-l-transparent border-r-transparent border-b-wwblue" placeholder="(555)555-5555" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <Button className=" bg w-full bg-wwlgreen font-bold text-wwblue" type="submit">Submit</Button>
                  </div>                  
                </form>
              </Form>
    </div>
  )
}

export default ContactForm