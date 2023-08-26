import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
    <header className='w-full  absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
            <Link href='/' className='flex justify-center items-center'>
                <Image
                    src='/vercel.svg'
                    alt='logo'
                    width={118}
                    height={18}
                    className='object-contain'
                />
            </Link>

            <div className='flex items-center space-x-4'>
                <div className='text-blue-500 hover:text-blue-700'>
                    <Link href='/timetable'>
                        Timetable
                    </Link>
                </div>
                <div className='text-blue-500 hover:text-blue-700'>
                    <Link href='/services'>
                        Services
                    </Link>
                </div>
                <div className='text-blue-500 hover:text-blue-700'>
                    <Link href='/contact-us'>
                        About
                    </Link>
                </div>
                <div className='text-blue-500 hover:text-blue-700'>
                    <Link href='/contact-us'>
                        Contact Us
                    </Link>
                </div>
                
                <CustomButton
                    title='Sign in'
                    btnType='button'
                    containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                />
            </div>
        </nav>
    </header>
);

export default NavBar;