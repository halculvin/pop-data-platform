import { NavBar } from '@/app/(dashboard)/_components/navbar';
import { Footer } from '@/components/footer';
import  Sidebar  from '@/app/(dashboard)/_components/sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
        <div className='flex flex-col'>
          <div>
            <NavBar/>
          </div>
          <div className=' flex flex-row justify-start'>
            <Sidebar/>
            <main className='flex w-full '>{children}</main>
          </div>         
          <div>
            <Footer/>
          </div>
        </div>
      </div>
  )
}
