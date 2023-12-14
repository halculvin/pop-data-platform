
import LoginForm from "@/components/forms/loginform/page"

const Login = () => {
  return (
    <div>
      {/* Login Section */}
      <div className="flex h-full w-full flex-col items-center">
        <span>
          <h1 className="md:text-5xl mt-10 text-4xl font-bold text-white lg:text-5xl xl:text-5xl 2xl:text-5xl">
            Subscribers
          </h1>
        </span>
      </div>
      <div className=" mt-10 flex h-full w-full items-center justify-center pb-28">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login