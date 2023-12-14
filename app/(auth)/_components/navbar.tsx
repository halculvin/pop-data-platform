import UserAccountNav from '@/components/userAccountNav';
import Image from 'next/image';
import Link from 'next/link';  

export const NavBar = () => {
    return (
        <header className='w-full  bg-wwlgreen'>
        <nav className='mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <div className='justify-start'>
                <Link href='/'>
                    <Image 
                        src='/logo.svg'
                        alt='Population Data Platform Logo'
                        width={120}
                        height={20}
                        className='object-contain'
                    />
                </Link>
            </div>  
            <div>
                <UserAccountNav/>                              
            </div>            
        </nav>        
    </header>
    )
}