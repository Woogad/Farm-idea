import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"

import IdeaInvestData from './IdeaInvestData';

const apiURL = "http://localhost:8050/idea-invest"

function IdeaInvest() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setPost(response.data);
            console.log(response.data)
        });
    }, []);


    return (
        <div className='h-[1200px]' style={{ backgroundImage: `url("https://png.pngtree.com/thumb_back/fw800/back_pic/03/52/11/86579339b4ca51c.jpg")`,backgroundSize:"cover" }}>
            <div class="flex justify-start mt-10">
                <div className="grid grid-cols-6 mt-2">
                    {post.map(e => {
                        return < IdeaInvestData ID={e.ID} nameProject={e.nameProject} amount={e.amount} tag={e.tag}  />
                    })}
                </div>
            </div>
        </div>
    )
}

export default IdeaInvest
