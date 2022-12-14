import { BsPencilFill, BsTrash2Fill } from "react-icons/bs";
import { useState } from "react";
import EditPost from './EditPost'
import axios from 'axios'
import dataPostIdeaContext from "./Data/DataPostIdeaContext";

function PostIdeaData(props) {
    const { ID, title, body, contract } = props
    const [upDate, setUpdate] = useState(false);
    const [, setPost] = useState([]);
    const apiURL = "http://localhost:8050/idea-post"
    const clickedUp = () => {
        setUpdate(true)
    }

    function DeletePost() {
        axios.delete(`${apiURL}/` + ID, {
        })
            .then(() => {
                setPost('');
                alert("ลบโพสเรียบร้อย")
            })
        window.location.reload();
    }


    return (
        <>
            <dataPostIdeaContext.Provider value={props}>
                <div className='mt-4 ml-5 p-8 bg-lime-500 shadow-lg font-sm text-2xl rounded-lg'>
                    <p className="text-center font-semibold">{title}</p>

                    <div className="my-4 py-3 text-lg break-all bg-lime-600 rounded-md">
                        <p>{body}</p>

                    </div>

                    <p className="underline">ติดต่อ: {contract}</p>
                    <div className="flex justify-end mt-10">

                        <div className="mr-10 hover:text-gray-50" onClick={clickedUp}>
                            <BsPencilFill />
                        </div>

                        <div className="hover:text-gray-50" onClick={DeletePost}>
                            <BsTrash2Fill />
                        </div>
                        {upDate && < EditPost setUpdate={setUpdate} />}
                    </div>

                </div>
            </dataPostIdeaContext.Provider>
        </>
    )
}

export default PostIdeaData
