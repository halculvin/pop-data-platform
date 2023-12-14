import Image from "next/image";
import { Card, CardContent,CardHeader,CardFooter } from "@/components/ui/card";

const AboutUsPage = () => {
  return (
    <div className="flex w-full flex-col">
      {/* About Us section */}
      <div className="flex h-2/4 w-full bg-campfire-bg bg-cover bg-center">
        <div className="relative mx-auto mt-4 flex h-full w-full flex-col items-center">
          <h1 className="m:text-5xl mt-10 text-4xl font-bold text-white lg:text-5xl xl:text-5xl 2xl:text-5xl">
            About Us
          </h1>
          <div className="my-4 flex flex-col items-center justify-evenly md:my-10 md:flex-row">
            <Card className="card relative mb-3 w-5/6 items-center justify-center rounded-3xl md:w-2/3 lg:mb-0 lg:w-2/5 xl:w-3/5 2xl:w-2/5">
              <CardContent className="text-center">
                <p className="xl:text-xl p-2 text-sm font-bold  text-wwblue md:text-base lg:text-lg">
                  Founded in 2009, WWT aims to deliver value to clients and
                  create a positive community impact. Guided by CEO KoJo
                  Addae-Mintah&apos;s vision, WWT began with network support for
                  the U.S. Census Bureau and expanded into data integration for
                  censuses in Kenya and Bangladesh. This led to significant
                  contracts with federal agencies like the Department of
                  Defense, Department of Commerce, and NASA. WWT&apos;s internal
                  culture aligns client, company, and employee goals, fostering
                  transformation and growth. Notably, WWT&apos;s dedication to
                  both business growth and community welfare has earned
                  recognition and made it a sought-after workplace.
                </p>
              </CardContent>
            </Card>
            <Image
              className="card mb-3 hidden w-4/6 items-center justify-center rounded-3xl p-10 md:w-1/2 md:p-0 lg:mb-0 lg:block lg:w-1/4 xl:w-1/6"
              src="/kojo.svg"
              width={500}
              height={500}
              alt="kojo"
            />
          </div>
        </div>
      </div>

      {/* Our Core Values section */}
      <div className="flex h-5/6 w-full items-center bg-handstogether-bg bg-cover bg-center">
        <div className="relative mx-auto mt-4 flex w-full flex-col items-center">
          <h1 className="m:text-5xl mt-10 text-4xl font-bold text-white lg:text-5xl xl:text-5xl 2xl:text-5xl">
            Our Core Values
          </h1>
          <div className="my-3 flex w-full flex-col items-center justify-evenly md:my-5 lg:flex-row lg:items-stretch">
            <Card className="card relative mb-3 w-5/6 rounded-3xl text-center text-wwblue md:w-2/3 lg:mb-0 lg:w-2/5 xl:w-1/3 xl:py-10">
              <CardHeader className="flex flex-col items-center justify-center">
                <h1 className="text-lg font-bold md:px-5 md:text-2xl">
                  Have the mindset of an entrepreneur
                </h1>
                <p className="text-lg md:p-1 md:text-2xl">
                  Build processes and systems that are scalable, repeatable,
                  efficient, and based on best practices.
                </p>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <h1 className="text-lg font-bold md:px-5 md:text-2xl">
                  Do the right thing
                </h1>
                <p className="text-lg md:p-1 md:text-2xl">
                  Be honest, principled, ethical, moral, fair, decent, upright,
                  and trustworthy—PERIOD.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col items-center justify-center">
                <h1 className="text-lg font-bold md:px-5 md:text-2xl">
                  Take the initiative
                </h1>
                <p className="text-lg md:pb-5 md:text-2xl">
                  You don&apos;t need permission to do what is needed or what is
                  great!
                </p>
              </CardFooter>
            </Card>
            <Card className="card relative w-5/6 rounded-3xl text-center text-wwblue md:w-2/3 lg:w-2/5 xl:w-1/3 xl:py-10">
              <CardHeader className="flex flex-col items-center justify-center">
                <h1 className="text-lg font-bold md:px-5 md:text-2xl">
                  Raise the bar
                </h1>
                <p className="text-lg md:p-1 md:text-2xl">
                  Bring value to our customers by staying ahead of the curve.
                </p>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <h1 className="text-lg font-bold md:px-5 md:text-2xl">
                  Earn & keep trust
                </h1>
                <p className="text-lg md:p-1 md:text-2xl">
                  Trust must be earned and not given. Once it is earned, then
                  you must aspire daily to maintain what has been established.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col items-center justify-center">
                <h1 className="text-lg font-bold md:px-5 md:text-2xl">
                  Improve continuously rather than delay perfection
                </h1>
                <p className="text-lg md:pb-5 md:text-2xl">
                  Experiment with imperfection—run with the idea before
                  it&apos;s too late!
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* Awards and Recognition section */}
      <div className="flex h-2/4 w-full bg-wwblue bg-cover bg-center">
        <div className="relative mx-auto mt-4 flex h-full w-full flex-col items-center">
          <h1 className="m:text-5xl mt-10 text-4xl font-bold text-white lg:text-5xl xl:text-5xl 2xl:text-5xl">
            Awards and Recognition
          </h1>
          <div className="mb-8 mt-5 flex flex-row items-center justify-center md:mb-10 md:mt-10 lg:w-full">
            <Image
              src="/awards.svg"
              alt="awards"
              width="1200"
              height="620"
              className="items-center rounded-3xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage