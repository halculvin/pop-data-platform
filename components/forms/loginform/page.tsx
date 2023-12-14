'use client';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader,} from "@/components/ui/card";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import GoogleSignInButtton from "@/components/googleSignInButtton";
// import GithubSignInButtton from "@/components/githubSignInButton";
// import AzureSignInButtton from "@/components/azureSignInButton";

const formSchema = z.object({    
    email: z.string().min(2,"Email is required").max(100).email('Invalid Email'),
    password: z.string().min(1,'Password is required').min(8,'Password must have at least 8 characters').max(50),
  })

const LoginForm = () => {
    const router = useRouter();
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        const signInData = await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false,
        });

        if(signInData?.error) {
            toast({
                title: "Error",
                description: "Not a valid email and/or password",
                variant: "destructive",
              })
        } else {
            router.refresh();
            router.push('/overview');
        }

        console.log(signInData);
      };

  return (
    <div className="w-1/5 min-w-[24]" id="card-container">
      <Card className="  card items-center rounded-3xl">
        <CardHeader className="flex items-center justify-center">
          <p className=" text-2xl font-bold text-wwblue ">Log In</p>
        </CardHeader>
        <CardContent className="p-5 text-center">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-col justify-evenly text-left text-wwblue ">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Email</FormLabel>
                      <FormControl className="text-left  text-wwblue">
                        <Input
                          className="border-b-wwblue  border-l-transparent border-r-transparent border-t-transparent text-left text-wwblue"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <br />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Password</FormLabel>
                      <FormControl className="text-left  text-wwblue">
                        <Input
                          type="password"
                          className="border-b-wwblue  border-l-transparent border-r-transparent border-t-transparent text-left text-wwblue"
                          placeholder="Password"
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
                  className=" bg w-full bg-wwlgreen font-bold text-wwblue hover:bg-wwgreen hover:text-wwlblue md:text-sm lg:text-base 2xl:text-base"
                  type="submit"
                >
                  Sign in
                </Button>
              </div>
            </form>
            <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
              or
            </div>
            <div className="flex w-full flex-col">
              <GoogleSignInButtton>Sign in with Google</GoogleSignInButtton>

              {/* <GithubSignInButtton>Sign in with Github</GithubSignInButtton>
              <AzureSignInButtton>Sign in with Azure</AzureSignInButtton> */}
            </div>
            <p className="mt-2 text-center text-sm text-wwblue">
              If you don&apos;t have an account, please&nbsp;
              <Link className="text-wwmblue hover:underline" href="/sign-up">
                Sign up
              </Link>
            </p>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginForm