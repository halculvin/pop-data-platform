import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { ShieldAlert } from "lucide-react";
import Link from "next/link";

const Overview = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (session?.user) {
    return (
      <div className="flex w-full flex-1 flex-col">
        {/* Subscription Dashboard  */}
        <div className="flex h-auto 2xl:h-fit w-full flex-col items-center justify-center bg-wwlblue bg-cover bg-center ">
          <div className=" h-auto w-full items-start justify-start">
            <span>
              <h1 className="ml-10 mt-10   text-3xl font-bold text-wwblue">
                Subscription Dashboard
              </h1>
            </span>
          </div>

          <div className="mb-10 mt-10 flex w-full flex-row items-center justify-evenly  ">
            <Card className=" card h-full w-1/5 items-center rounded-3xl">
              <CardHeader className="flex items-center justify-center">
                <Image
                  src="/digitization.svg"
                  width={100}
                  height={100}
                  alt="data digitization"
                />
              </CardHeader>
              <CardContent className="mt-2 text-center md:text-sm">
                <p className=" text-2xl font-bold text-wwblue">
                  Data Digitization
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-center ">
                <Button
                  variant="default"
                  size="default"
                  className="items-center bg-wwlgreen hover:bg-wwgreen"
                >
                  <p className="font-bold text-wwblue">More Details</p>
                </Button>
              </CardFooter>
            </Card>

            <Card className="card h-full w-1/5 items-center rounded-3xl">
              <CardHeader className="flex items-center justify-center">
                <Image
                  src="/curation.svg"
                  width={50}
                  height={50}
                  alt="data digitization"
                />
              </CardHeader>
              <CardContent className="text-center md:text-sm ">
                <p className=" text-2xl font-bold text-wwblue">Data Curation</p>
              </CardContent>
              <CardFooter className="flex items-center justify-center">
                <Button
                  variant="default"
                  size="default"
                  className="items-center bg-wwlgreen hover:bg-wwgreen"
                >
                  <p className="font-bold text-wwblue">More Details</p>
                </Button>
              </CardFooter>
            </Card>

            <Card className=" card h-full w-1/5 items-center rounded-3xl">
              <CardHeader className="flex items-center justify-center">
                <Image
                  src="/brokerage.svg"
                  width={75}
                  height={75}
                  alt="data digitization"
                />
              </CardHeader>
              <CardContent className="flex-auto text-center md:text-sm">
                <p className=" text-2xl font-bold text-wwblue">
                  Data Brokerage
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-center">
                <Button
                  variant="default"
                  size="default"
                  className="items-center bg-wwlgreen hover:bg-wwgreen"
                >
                  <p className="font-bold text-wwblue">More Details</p>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="flex h-auto w-full flex-col items-center justify-center bg-wwlblue bg-cover bg-center ">
          <div className="mb-10 mt-10 flex w-full flex-row items-center justify-evenly  ">
            <Card className=" card h-full w-1/5 items-center rounded-3xl">
              <CardHeader className="flex items-center justify-center">
                <Image
                  src="/visualization.svg"
                  width={75}
                  height={75}
                  alt="data visualiztion"
                />
              </CardHeader>
              <CardContent className="flex-auto text-center md:text-sm">
                <p className=" text-2xl font-bold text-wwblue">
                  Data Visualization
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-center">
                <Button
                  variant="default"
                  size="default"
                  className="items-center bg-wwlgreen hover:bg-wwgreen"
                >
                  <p className="font-bold text-wwblue">More Details</p>
                </Button>
              </CardFooter>
            </Card>

            <Card className=" card h-full w-1/5 items-center rounded-3xl">
              <CardHeader className="flex items-center justify-center">
                <Image src="/lab.svg" width={50} height={50} alt="data lab" />
              </CardHeader>
              <CardContent className="flex-auto text-center md:text-sm">
                <p className=" text-2xl font-bold text-wwblue">Data Lab</p>
              </CardContent>
              <CardFooter className="flex items-center justify-center">
                <Button
                  variant="default"
                  size="default"
                  className="items-center bg-wwlgreen hover:bg-wwgreen"
                >
                  <p className="font-bold text-wwblue">More Details</p>
                </Button>
              </CardFooter>
            </Card>

            <Card className=" card h-full w-1/5 items-center rounded-3xl">
              <CardHeader className=" flex items-center justify-center">
                <Image
                  src="/survey.svg"
                  width={50}
                  height={50}
                  alt="survey generator"
                />
              </CardHeader>
              <CardContent className="mt-3 flex-auto text-center md:text-sm">
                <p className=" text-2xl font-bold text-wwblue">
                  Survey Generator
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-center">
                <Button
                  variant="default"
                  size="default"
                  className="items-center bg-wwlgreen hover:bg-wwgreen"
                >
                  <p className="font-bold text-wwblue">More Details</p>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="  flex-grow  ">
        <div className="flex h-full w-full flex-col items-center justify-center bg-wwlblue bg-cover bg-center ">
          <Card className=" card items-center rounded-3xl bg-wwlgreen">
            <CardHeader className="flex items-center justify-center ">
              <ShieldAlert color="#ff0000" />
              <hr />
            </CardHeader>
            <CardContent className="text-center text-red-600 ">
              <Link href="/login" className="">
                <h2 className="text-2xl">
                  Please login to view your dashboard
                </h2>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
};

export default Overview;
