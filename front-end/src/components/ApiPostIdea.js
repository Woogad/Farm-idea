import axios from "axios"
import { useState, useEffect } from "react"
import Popup from "./Popup";
import PostIdeaData from "./PostIdeaData";

const apiURL = "http://localhost:8050/"

function Api_postIdea() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setPost(response.data);
      console.log(response.data)
    });
  }, []);

  if (!post) return "no post";


  return (
    <div>
      <div>
        <p className='flex justify-center text-4xl font-medium mt-20'>บอร์ดไอเดีย</p>
        <Popup />
      </div>
      <div className="grid grid-cols-3 mt-2">
        {post.map(e => {
          return <PostIdeaData ID={e.ID} title={e.title} body={e.body} contract={e.contract} />
        })}
      </div>
    </div>
  );
}

export default Api_postIdea
