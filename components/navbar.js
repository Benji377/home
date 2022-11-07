import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

/*
 * Creates a responsive navbar and returns it inside a <nav> tag
 * The navbar is the same for mobile and desktop, only the alignemnet changes
 */
export default function Navbar() {
    // Checks if mobile or desktop should be used
    const [active, setActive] = useState(false);

    // Changes the state of the navbar items when clicked, highlighting them
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className='flex items-center flex-wrap bg-green-400 p-3 '>
                <Link href='/' className='inline-flex items-center p-2 mr-4 hover:text-white rounded'>
                    <Image
                        priority
                        src="/images/logo.svg"
                        className="fill-current text-white h-8 w-8 mr-2"
                        height={24}
                        width={24}
                        alt=""
                    />
                    <span className='text-xl text-white font-bold uppercase tracking-wide'>
                        Benjamin
                    </span>
                </Link>
                <button
                    className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                    title='Hamburger'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                    <Link href='/blog' onClick={handleClick}
                        className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                            Blog
                        </Link>
                        <Link href='/projects' onClick={handleClick} 
                        className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                            Projects
                        </Link>
                        <Link href='/skills' onClick={handleClick} 
                        className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                            Skills
                        </Link>
                        <Link href='/about' onClick={handleClick} 
                        className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                            About
                        </Link>
                        <Link href='/contact' onClick={handleClick} 
                        className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};