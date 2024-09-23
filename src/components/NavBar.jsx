import { IoCart, IoSearch } from 'react-icons/io5';
import Logo from '../assets/logo/logo.png'
import DarkModeToggle from './DarkModeToggle';

function NavBar(){
    return(
        <div>
            <div className='flex justify-between items-center bg-ct-dark-green-9DC88D text-ct-light-browngrey-3C403D font-bold dark:bg-ct-dark-green-164A41 dark:text-ct-light-tanly-DADED4'>
                <div className='justify-center items-center '>
                    <a href="#" className='flex items-center'>
                        <img src={Logo} alt="logo" className='size-[50px]'/>
                        <span className='px-2'>Shopsuey</span>
                    </a>

                </div>
                {/* //SearchBar */}
                <div className='grow flex justify-center'>
                    <div className='relative md:w-[400px] justify-between items-center'>
                        <input type="text" placeholder='search' className='md:w-[400px] rounded-full px-2'/>
                        <IoSearch className='absolute top-1/2 -translate-y-1/2 right-3 '/>
                    </div>
                </div>
                
                {/* Cart, Login, DarkMode */}
                <div className='flex justify-between items-center'>
                    <a href="#"><IoCart className='size-[30px]'/></a>
                    <a href="#" className='p-4'>Login</a>
                    <DarkModeToggle />
                </div>
            </div>
            
        </div>
    );

}

export default NavBar