'use client';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Card, CardContent, CardHeader,} from "@/components/ui/card"
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import GoogleSignInButtton from "@/components/googleSignInButtton";
import GithubSignInButtton from "@/components/githubSignInButton";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    coname: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    phone: z.string().min(10, 'Must be at least 10 digits').max(11,'No more than 11 digits is allowed'),
    password: z.string().min(1,'Password is required').min(8,'Password must have at least 8 characters').max(50),
    passConfirm: z.string().min(1,'Password confirmation is required').max(50),
  })
  .refine((data) => data.password === data.passConfirm, {
    path: ['passConfirm'],
    message: 'Password does not match',
  })

const SignUpForm = () => {
    const router = useRouter();
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          coname: "",
          email: "",
          phone: undefined,
          password: "",
          passConfirm: "",
        },
    })
    
     
      // 2. Define a submit handler.
    const onSubmit =  async (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: values.name,
                email: values.email,
                coname: values.coname,
                phone: values.phone,
                password: values.password
            })
        })

        if(response.ok) {
            router.push('/login')
        } else {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again!",
                variant: "destructive",
              })
            console.error('Registration Failed!');
        }
    };

  return (
    <div className="w-1/4 min-w-[24]" id="card-container">
      <Card className=" card mb-10 items-center rounded-3xl">
        <CardHeader className="flex items-center justify-center">
          <p className=" text-2xl font-bold text-wwblue ">Sign Up</p>
        </CardHeader>
        <CardContent className="text-start">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="justify-evenly text-left text-wwblue ">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-8">
                      <FormLabel className="font-bold">Name</FormLabel>
                      <FormControl>
                        <Input
                          className="border-b-wwblue border-l-transparent border-r-transparent border-t-transparent"
                          placeholder="John Doe"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="coname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Company Name</FormLabel>
                      <FormControl>
                        <Input
                          className="border-b-wwblue border-l-transparent border-r-transparent border-t-transparent"
                          placeholder="Enter your company name"
                          {...field}
                        />
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
                        <Input
                          className="border-b-wwblue border-l-transparent border-r-transparent border-t-transparent"
                          placeholder="user@provider.com"
                          {...field}
                        />
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
                        <Input
                          className="border-b-wwblue border-l-transparent border-r-transparent border-t-transparent"
                          placeholder="(555) 555-5555"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mt-8">
                      <FormLabel className="font-bold">Password</FormLabel>
                      <FormControl className="text-left  text-wwblue">
                        <Input
                          type="password"
                          className="border-b-wwblue  border-l-transparent border-r-transparent border-t-transparent text-left text-wwblue"
                          placeholder="Enter Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="passConfirm"
                  render={({ field }) => (
                    <FormItem className="mt-8">
                      <FormLabel className="font-bold">
                        Re-Enter Your Password
                      </FormLabel>
                      <FormControl className="text-left  text-wwblue">
                        <Input
                          type="password"
                          className="border-b-wwblue  border-l-transparent border-r-transparent border-t-transparent text-left text-wwblue"
                          placeholder="Re-Enter Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-center ">
                <Button
                  className="bg flex w-full items-center gap-4 bg-wwlgreen text-xs font-bold text-wwblue  hover:bg-wwgreen  hover:text-wwlblue md:text-sm lg:text-base 2xl:text-base"
                  variant="link"
                  type="submit"
                >
                  Sign up
                </Button>
              </div>
            </form>
            <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
              or
            </div>
            <div className="flex w-full flex-col ">
              <GoogleSignInButtton>Sign up with Google</GoogleSignInButtton>
              {/* <GithubSignInButtton> Sign up with Github</GithubSignInButtton> */}
            </div>
            <p className="mt-2 text-center text-sm text-wwblue">
              If you do have an account, please&nbsp;
              <Link className="text-wwmblue hover:underline" href="/login">
                Log In
              </Link>
            </p>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUpForm