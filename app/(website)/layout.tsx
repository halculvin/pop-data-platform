import { NavBar } from '@/components/navbar';
import { Banner } from '@/components/banner';
import { Footer } from '@/components/footer';

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <div>
        <NavBar/>
      </div>
      <div>
        <div className='flex h-auto bg-banner-bg bg-center bg-cover'>
          <Banner/>
        </div>
      </div>
      <div className='flex-1'>
        <main>{children}</main>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
