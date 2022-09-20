import React from 'react'

function PostIdeaData({ ID, title, body, contract }) {


    return (
        <div className='mt-4 ml-5 p-20 bg-green-500 shadow-lg font-sm text-2xl rounded-lg hover:bg-green-600'>
            <p>id: {ID}</p>
            <p>Title: {title}</p>
            
            <div className="break-all">
                
                <p>Body :{body}</p>
            
            </div>
            
            <p>Contract: {contract}</p>
        
        </div>
    )
}

export default PostIdeaData
