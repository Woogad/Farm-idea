import { BsPencilFill, BsTrash2Fill } from "react-icons/bs";
import { useState } from "react";
import EditPost from './EditPost'



function PostIdeaData({ ID, title, body, contract }) {
    const [upDate, setUpdate] = useState(false);

    const clickedUp = () => {
        setUpdate(true)
    }

    return (
        <div className='mt-4 ml-5 p-8 bg-green-500 shadow-lg font-sm text-2xl rounded-lg hover:bg-green-600'>
            <p>Title: {title}</p>

            <div className="break-all">

                <p>Body :{body}</p>

            </div>

            <p>Contract: {contract}</p>
            <div className="flex justify-end mt-10">

                <div className="mr-10 hover:text-gray-50" onClick={clickedUp}>
                    <BsPencilFill />
                </div>

                <div className="hover:text-gray-50">
                    <BsTrash2Fill />
                </div>
                {upDate && < EditPost setUpdate={setUpdate} />}
            </div>

        </div>
    )
}

export default PostIdeaData
