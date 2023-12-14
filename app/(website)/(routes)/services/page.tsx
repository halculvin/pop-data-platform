import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <div className="flex w-full flex-col">
      {/* Our services section  */}
      <div className="flex h-3/6 flex-auto flex-row items-center justify-center bg-laptopscollab-bg bg-cover">
        <Card className="align-items-center card relative my-10 w-3/4 rounded-3xl md:w-2/4 ">
          <CardHeader className="text-center">
            <p className="-mb-5 text-lg font-bold text-wwblue md:text-2xl ">
              Our Services
            </p>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm font-bold text-wwblue md:p-5 md:text-lg lg:text-xl ">
              High-quality data is the fuel that enables the business of
              government. Meaningful analytics, AI, ML, DL, and NLP can only be
              derived from a computational and data infrastructure that is
              optimized. Let us help you define your ecosystem to manage your
              data and succeed with data and AI initiatives.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Data Digitization section  */}
      <div className="flex h-auto w-full flex-col items-center justify-center bg-lightnetwork-bg bg-cover bg-center ">
        <div>
          <span>
            <h1 className="md:text-5xl mt-10 text-4xl font-bold text-white lg:text-5xl xl:text-5xl 2xl:text-5xl">
              Data Digitization
            </h1>
          </span>
        </div>

        <div className="my-10 flex w-full flex-col items-center justify-evenly lg:flex-row lg:items-stretch">
          <Card className="card mb-3 flex w-5/6 items-center justify-center rounded-3xl bg-white p-10 md:w-1/2 md:p-0 lg:mb-0 lg:w-2/5 xl:w-1/4">
            <Image
              className="flex"
              src="/POPDataGraph.png"
              width={500}
              height={500}
              alt="data digitization"
            />
          </Card>
          <Card className="card w-5/6 items-center rounded-3xl md:w-1/2 lg:w-2/5 lg:py-10 xl:w-1/4">
            <CardHeader className="text-center">
              <p className="-mb-2 text-sm font-bold text-wwblue  md:text-base lg:text-lg xl:text-xl ">
                Advantages of data digitization
              </p>
            </CardHeader>
            <CardContent className="flex-auto text-left md:text-sm">
              <p className="text-sm font-bold text-wwblue  md:text-base lg:text-lg xl:text-xl">
                • instant accessibility
                <br />
                • enhanced organization and searchability through tagging and
                metadata
                <br />
                • cost and space savings by eliminating physical storage needs
                <br />
                • increased data security with encryption and access controls
                <br />
                • disaster recovery capabilities
                <br />
                • environmental benefits by reducing paper usage
                <br />
                • improved efficiency and productivity.
                <br />
                <br />
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Data Curation section  */}
        <div className="flex h-auto w-full flex-col items-center justify-center bg-darkusa-bg bg-cover bg-center">
          <div>
            <span>
              <h1 className="md:text-5xl mt-10 text-4xl font-bold text-white lg:text-5xl xl:text-5xl 2xl:text-5xl ">
                Data Curation
              </h1>
            </span>
          </div>

          <div className="my-3 flex w-full flex-col items-center justify-evenly md:my-10 lg:flex-row lg:items-stretch xl:my-20">
            <Card className="card relative mb-3 w-5/6 items-center rounded-3xl md:w-1/2 lg:mb-0 lg:w-2/5 xl:w-1/4">
              <CardContent className="text-center md:text-sm">
                <p className="py-5 text-sm font-bold text-wwblue  md:text-base lg:text-lg xl:text-xl">
                  Our data curation services ensure data quality, integrity, and
                  usability through a comprehensive range of activities,
                  including data collection, organization, cleaning,
                  integration, validation, metadata creation, documentation, and
                  preservation. We facilitate data-driven decision-making by
                  enhancing data quality and fostering seamless data sharing and
                  reuse.
                </p>
              </CardContent>
            </Card>

            <Card className="card flex w-5/6 items-center justify-center rounded-3xl bg-white bg-cover md:w-1/2 lg:w-2/5 lg:items-stretch xl:w-1/4">
              <Image
                className="flex "
                src="/pdpcuration.png"
                width={300}
                height={300}
                alt="data digitization"
              />
            </Card>
          </div>
        </div>
      </div>

      {/* Data Visualization section  */}
      <div className="flex h-auto w-full flex-col items-center justify-center bg-outlineboxes-bg bg-cover bg-center ">
        <div>
          <span>
            <h1 className="md:text-5xl mt-10 text-4xl font-bold text-white lg:text-5xl xl:text-5xl 2xl:text-5xl">
              Data Visualization
            </h1>
          </span>
        </div>

        <div className="my-3 flex w-full flex-col items-center justify-evenly md:my-10 lg:flex-row lg:items-stretch xl:my-20">
          <Card className="card mb-3 flex w-5/6 items-center justify-center rounded-3xl bg-white bg-cover md:w-1/2 lg:mb-0 lg:w-2/5 xl:w-1/4">
            <Image
              className="flex "
              src="/pdpvisual.png"
              width={300}
              height={300}
              alt="data visualization"
            />
          </Card>

          <Card className="card w-5/6 items-center rounded-3xl md:w-1/2 lg:w-2/5 xl:w-1/4">
            <CardContent className="text-center md:text-sm">
              <p className="py-10 text-sm font-bold text-wwblue  md:text-base lg:text-lg xl:text-xl">
                Data visualization transforms complex data into visual
                representations that are easier to understand, analyze, and
                communicate. By leveraging visualizations, individuals and
                organizations can gain actionable insights, make informed
                decisions, and effectively communicate data-driven narratives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
