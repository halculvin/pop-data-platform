import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className='w-full absolute  bg-wwgreen'>
            <div className='mx-auto flex justify-between items-center sm:px-16 px-6 py-2'>
                <div className='justify-start'>
                    <Link href="/">
                        <Image
                            src='/wwind_logo_standard-white-web.svg'
                            alt='Whirlwind web Logo'
                            width={120}
                            height={20}
                            className='object-contain'
                        />
                    </Link>
                </div>
                <div className='flex justify-items-end items-center'>
                    <Link href='/faq' className=''>
                        <span className='font-neuropol text-white font-bold '>
                            FAQs
                        </span>
                    </Link>
                    <Link href='/accessibility-help' className='ml-10'>
                        <span className='font-neuropol text-white font-bold '>
                            Accessibility Help
                        </span>
                    </Link>
                    <Link href='/corporate-website' className='ml-10'>
                        <span className='font-neuropol text-white font-bold '>
                            Corporate Website
                        </span>
                    </Link>
                    <Link href='/contact-us' className='ml-10'>
                        <span className='font-neuropol text-white font-bold '>
                            Contact Us
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
