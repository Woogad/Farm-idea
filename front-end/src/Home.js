import logo from './Imgs/logo.jpg';
function Home() {

    return (

        <main>
            <div class="text-lg flex justify-between mt-0.5 ">
                <div class="ml-5 mt-6">
                    <a href="#" class="hover:text-blue-800">Discover</a>
                    <a href="#" class="ml-5 hover:text-blue-800">Start a project</a>
                </div>

                <div class="ml-32">
                    <img class="w-25 h-20" src={logo} />
                </div>

                <div class="mr-5 mt-6 flex">
                    <input type="text" class=" form-control block w-25 h-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id="SearchInput1" placeholder="Search" />
                    <div class="ml-1">
                        
                    </div>
                    <a href="#" class="ml-5 hover:text-blue-800">Login</a>
                    <a href="#" class="ml-5 hover:text-blue-800">Sign in</a>
                </div>
            </div>

        </main>
    );
}

export default Home;