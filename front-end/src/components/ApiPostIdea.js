import axios from "axios"
import { useState, useEffect } from "react"
import Popup from "./Popup";
import PostIdeaData from "./PostIdeaData";

const apiURL = "http://localhost:8050/idea-post"

function Api_postIdea() {

  const [post, setPost] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setPost(response.data);
      console.log(response.data)
    });
  }, []);

  if (!post) return "no post";


  return (
    <div>
      <div className="">
        <p className='flex justify-center text-4xl font-medium mt-20'>บอร์ดไอเดีย</p>
        <Popup />
        <div className="flex justify-center mt-5">
          <input onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
            type="text" name="" id="" className="w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Search" required />
        </div>
      </div>
      <div className="grid grid-cols-3 mt-2">
        {post.filter((e) => {
          if (searchTerm == "") {
            return e
          } else if (e.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return e
          }
        }).map(e => {
          return <PostIdeaData ID={e.ID} title={e.title} body={e.body} contract={e.contract} key={e.ID} />

        })}
      </div>
    </div>
  );
}

export default Api_postIdea
