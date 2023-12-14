import SignUpForm from "@/components/forms/signupform/page";

const SignUp = () => {
  return (
    <div >
      {/* Sign up Section */}
      <div className="flex flex-col w-full items-center ">
        <span>
          <h1 className="text-white text-5xl font-bold mt-10 ">Subscribe</h1>
        </span>
      </div>
      <div className="flex flex-col w-full justify-center items-center mt-10">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
