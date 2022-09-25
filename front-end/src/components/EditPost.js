import axios from 'axios'
import { useState } from "react"


const EditPost = ({ setUpdate, ID }) => {
    const [, setPost] = useState([]);
    const [title, setTitle] = useState('');
    const [contract, setContract] = useState('');
    const [body, setBody] = useState('');
    

    const apiURL = "http://localhost:8050/"

    const handleCancelClick = () => {
        setUpdate(false)
    }

    function PostUpdate() {
        axios.put(`${apiURL}` + ID, {
            title: title,
            contract: contract,
            body: body
        })
            .then((response) => {
                setPost(response.data);
            })
        alert("สร้างโพสต์เรียบร้อย")
        window.location.reload();
    }



    return (

        <div className="bg-zinc-200 fixed inset-0 z-50">

            <div className="flex h-screen justify-center items-center">

                <div className="bg-white py-7 px-40 border-4 border-green-500 rounded-xl">

                    <div className="">

                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 ">ชื่อไอเดีย</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="" id="" class="w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="title" required />
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 mt-4 ">ติดต่อ</label>
                        <input value={contract} onChange={(e) => setContract(e.target.value)} type="text" name="" id="" class="w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="contract" required />
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 mt-4 ">รายละเอียด</label>
                        <textarea value={body} onChange={(e) => setBody(e.target.value)} name="" id="" class="w-[500px] h-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="" required />

                    </div>

                    <div className='flex justify-center'>

                        <button onClick={PostUpdate} className=" rounded px-4 py-2 text-white mt-10  bg-green-400 ">Update</button>
                        <button onClick={handleCancelClick} className=" rounded px-4 py-2 text-white mt-10 ml-2  bg-red-400 ">Close</button>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default EditPost