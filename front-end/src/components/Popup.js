import Modal from './Modal'
import { useState } from "react";

function Popup() {
    const [modalOn, setModalOn] = useState(false);

    const clicked = () => {
        setModalOn(true)
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="flex cursor-pointer justify-center w-1/4  bg-blue-400 p-4  m-6 rounded-md text-white"

                    onClick={clicked}
                >
                    Create
                </div>
            </div>           
            {modalOn && < Modal setModalOn={setModalOn} />}
        </div>
    )
}
export default Popup;
