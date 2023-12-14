import Link from 'next/link';
import { wwLogo } from './wwLogo';

export const Footer = () => {
    return (
        <footer className='w-full absolute z-0 bg-wwgreen'>
            <div className='mx-auto flex flex-col sm:flex-row justify-between items-center sm:px-16 px-6 py-2'>
                <div className='mb-4 sm:mb-0'>
                    {wwLogo()}
                </div>
                <div className='flex flex-col sm:flex-row justify-between items-center'>
                    <Link href='/faq' className='mb-4 sm:mb-0 sm:ml-10'>
                        <span className='font-neuropol text-white font-bold '>
                            FAQs
                        </span>
                    </Link>
                    <Link href='/accessibility-help' className='mb-4 sm:mb-0 sm:ml-10'>
                        <span className='font-neuropol text-white font-bold '>
                            Accessibility Help
                        </span>
                    </Link>
                    <Link href='/corporate-website' className='mb-4 sm:mb-0 sm:ml-10'>
                        <span className='font-neuropol text-white font-bold '>
                            Corporate Website
                        </span>
                    </Link>
                    <Link href='/contact-us' className='mb-4 sm:mb-0 sm:ml-10'>
                        <span className='font-neuropol text-white font-bold '>
                            Contact Us
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
