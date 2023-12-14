import { Card, CardContent,CardHeader,CardFooter } from "@/components/ui/card";

const ContactUsPage = () => {

  return (
    <div className="flex flex-col w-full font-merriweatherb">
      {/* // Contact Us section */}
      
      <div className='flex flex-col w-full bg-map-bg bg-center bg-cover items-center justify-center'> 
        <div className="w-full flex justify-center lg:justify-start h-full">
          <Card className="w-3/4 md:w-1/2 lg:w-1/3 2xl:w-1/5 relative card rounded-3xl text-wwblue text-center lg:ml-20 my-40 md:my-20 xl:my-40 items-center">
            <CardHeader className="flex flex-col justify-center items-center">
              <p className="text-xl md:text-2xl font-bold px-8 md:px-6 md:py-3">
              Connect with us to schedule a
              consultation </p>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center md:mx-10">
              <p className="text-xl md:text-2xl font-bold px-10 md:px-2">
                office: 301-850-1023 <br />
                fax: 1-866-224-7935</p>
            </CardContent>
            <CardFooter className="flex flex-col justify-center items-center">
              <p className="text-xl md:text-2xl font-bold md:px-2 md:pb-10"> 
              137 National Plaza,
              National Harbor, MD, 20745</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
    
  )
}

export default ContactUsPage