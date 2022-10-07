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
        <div>
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
