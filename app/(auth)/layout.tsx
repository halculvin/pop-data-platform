import { NavBar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ReactNode } from 'react';

interface LoginLayoutProps {
  children: ReactNode,
}

const LoginLayout = ({
  children
}: LoginLayoutProps) => {
  return (
    <div>
        <div className=''>
          <div>
            <NavBar/>
          </div>          
          <main className='w-full h-full bg-safe-bg'>{children}</main>
          <div>
            <Footer/>
          </div>
        </div>
      </div>
  )
}

export default LoginLayout;