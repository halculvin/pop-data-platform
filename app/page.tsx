import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Banner } from "@/components/banner";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import ContactForm from "@/components/forms/contactform/page";
import { RobotoFont, MontserratFont } from "@/components/fonts/fonts";

export default function Home() {
  return (
    <div>

      <div className=" ">
        <NavBar />
      </div>
      <div className="flex  w-full bg-banner-bg bg-cover bg-center">
        <Banner />
      </div>

      <div className="flex w-full flex-col">
        {/* Population Data Platform definition section  */}       
        <div className=" flex h-96 flex-row items-center justify-between bg-wwlgreen ">
          <Card className=" align-items-center card relative z-10 ml-10 w-3/4 lg:w-2/4 rounded-3xl ">
            <CardContent className=" text-center">
              <p className="p-5 text-sm font-bold text-wwblue  md:text-base lg:text-lg xl:text-xl" id="small-font">
                Population Data Platform is an elastic data platform for the
                statistical data community. Members can now have access to a
                statistical-quality standards environment for digitization,
                research and analysis, and modelling and simulation of
                population data on a single platform.
              </p>
            </CardContent>
          </Card>

          <Card className=" card absolute z-0 ml-24 mr-32 h-64 w-3/4 justify-end rounded-3xl bg-crowd-bg bg-cover bg-center lg:ml-60 xl:ml-80 2xl:ml-96 md:ml-48">
            <CardContent></CardContent>
          </Card>

        </div>

        {/* Featured services section */}
        <div className="flex h-auto w-full flex-col items-center justify-center bg-darkearth-bg bg-cover bg-center">
          <div>
            <span>
              <h1 className="m:text-5xl mt-10   text-4xl font-bold text-white lg:text-5xl xl:text-5xl 2xl:text-5xl">
                Featured Services
              </h1>
            </span>
          </div>

          <div className="mb-10 mt-10 flex w-full flex-wrap justify-between pl-10 pr-10 md:justify-center lg:pl-10 lg:pr-10 2xl:pl-10 2xl:pr-10">
            <Card className="mb-4 w-full md:w-2/3 lg:w-1/5 xl:w-1/4">
              <CardHeader className="flex items-center justify-center">
                <Image
                  src="/POPDataGraph.jpg"
                  width={300}
                  height={300}
                  alt="data digitization"
                />
              </CardHeader>
              <CardContent className="flex-auto text-center md:text-sm">
                <p className="xl:text-1xl break-words text-lg font-bold text-wwblue md:text-sm lg:text-lg 2xl:text-2xl">
                  Transform physical data into digital data
                </p>
              </CardContent>
              <CardFooter className="bottom-0 flex items-center justify-center lg:pt-24 xl:pt-8 2xl:pt-0">
                <Button
                  variant="default"
                  size="default"
                  className="bg items-center bg-wwlgreen"
                >
                  <p className="font-bold text-wwblue">Learn More</p>
                </Button>
              </CardFooter>
            </Card>

            <Card className="mb-4 w-full md:w-2/3 lg:w-1/5 xl:w-1/4 lg:ml-10 lg:mr-10">
              <CardHeader className="flex items-center justify-center">
                <Image
                  src="/pdpcuration.png"
                  width={175}
                  height={175}
                  alt="data digitization"
                />
              </CardHeader>
              <CardContent className="flex-auto text-center md:text-sm">
                <p className="xl:text-1xl break-words text-lg font-bold text-wwblue md:text-sm lg:text-lg 2xl:text-2xl">
                  Transform physical data into digital data
                </p>
              </CardContent>
              <CardFooter className="bottom-0 flex items-center justify-center lg:pt-7 xl:pb-5 xl:pt-0 2xl:pt-0">
                <Button
                  variant="default"
                  size="default"
                  className="bg items-center bg-wwlgreen"
                >
                  <p className="font-bold text-wwblue">Learn More</p>
                </Button>
              </CardFooter>
            </Card>

            <Card className="mb-4 w-full md:w-2/3 lg:w-1/5 xl:w-1/4">
              <CardHeader className="flex items-center justify-center">
                <Image
                  src="/pdpvisual.png"
                  width={145}
                  height={145}
                  alt="data digitization"
                />
              </CardHeader>
              <CardContent className="flex-auto text-center md:text-sm">
                <p className=" xl:text-1xl break-words text-lg font-bold text-wwblue md:text-sm lg:text-lg 2xl:text-2xl">
                  Transform complex data into easier to understand visual
                  representations.
                </p>
              </CardContent>
              <CardFooter className="bottom-0 flex items-center justify-center">
                <Button
                  variant="default"
                  size="default"
                  className="bg items-center bg-wwlgreen"
                >
                  <p className="font-bold text-wwblue">Learn More</p>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex h-auto w-full flex-col items-center justify-center bg-desklaptop-bg bg-cover bg-center">
          <div>
            <span>
              <h1 className="m:text-5xl mt-10   text-4xl font-bold text-white lg:text-5xl xl:text-5xl 2xl:text-5xl">
                Subscribe
              </h1>
            </span>
          </div>

          <div className="mt-10 pr-10 pl-10 flex w-full flex-wrap items-center justify-evenly">
            <Card className="card mb-10 w-full items-center rounded-3xl md:w-1/3 lg:w-2/5">
              <CardHeader className="flex items-center justify-center">
                <p className="text-2xl font-bold text-wwblue">
                  Contact Information
                </p>
              </CardHeader>
              <CardContent className="text-start">
                <ContactForm />
              </CardContent>
            </Card>

            <Card className="card w-full items-center rounded-3xl md:w-1/3 lg:w-1/5 mb-10">
              <CardContent className="p-5 text-center">
                <p className="text-base font-bold text-wwblue md:text-2xl">
                  Our consultants will contact you within 24 hours to customize
                  a data solution that satisfies your goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
