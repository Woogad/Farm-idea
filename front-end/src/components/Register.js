function Register() {
    return (
        <div className='flex justify-center'>
            <div className='p-6 max-w-sm bg-white rounded-lg border border-lime-500 shadow-md dark:bg-gray-800 dark:border-gray-700  w-80 h-fit mt-36 '>
                <div className='flex justify-center text-3xl'>
                    <h1>สมัครสมาชิก</h1>
                </div>

                <div>
                    <form>
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ชื่อ</label>
                            <input type="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="-" required />
                            <label for="Username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ชื่อสมาชิก</label>
                            <input type="Username" id="Username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="-" required />
                            <label for="Password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">รหัสผ่าน</label>
                            <input type="Password" id="Password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="-" required />
                            <label for="confirm password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ยืนยันรหัสผ่าน</label>
                            <input type="confirm password" id="confirm password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="-" required />
                            <label for="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">อีเมล</label>
                            <input type="Email" id="Email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="-" required />
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">ยอมรับข้อเสนอ</label>

                        </div>


                        <div className='flex justify-center'>
                            <button class="bg-transparent hover:bg-blue-500 text-lime-700 font-semibold hover:text-white py-2 px-4 border border-lime-500 hover:border-transparent rounded">
                                สมัคร
                            </button>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    );
}

export default Register;