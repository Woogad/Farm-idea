import logo from '../asset/Image/logo.png';
import Navbar from './Navbar';
import * as ai from "react-icons/ai";
import { Link } from 'react-router-dom';
function Menu() {

    return (
        <main>
            <div className="text-lg flex justify-between mt-0.5 ">
                <div className="flex justify-between">
                    <Navbar />
                    <div className=" mt-6 ">
                        <Link to="/idea-inves">
                            <label className="mx-5 mt-6 hover:text-blue-800 cursor-pointer">Start a project</label>
                        </Link>
                    </div>
                </div>

                <div className="ml-40">
                    <Link to="/">
                        <img className="w-25 h-20" src={logo} alt='logo' />
                    </Link>
                </div>

                <div className="mr-5 mt-6 flex">
                    <input type="text" className=" form-control block w-25 h-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id="SearchInput1" placeholder="Search" />
                    <div className="ml-2 mt-1 text-2xl">
                        <ai.AiOutlineSearch />
                    </div>
                    <div className="ml-1">
                    </div>
                    <a href="/" className="ml-5 hover:text-blue-800">Login</a>
                    <Link to="/register" className='ml-5 hover:text-blue-800'>Sign up</Link>
                </div>
            </div>

        </main>
    );
}

export default Menu;