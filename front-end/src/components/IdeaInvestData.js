import React from 'react'
import { AiOutlineRead } from "react-icons/ai";
import { Link } from 'react-router-dom';
import dataInvestideaContext from './Data/DataInvesideaContext';


function IdeaInvestData(props) {
    const { ID, nameProject, amount, tag } = props

    return (
        <div>
            <dataInvestideaContext.Provider value={props}>
                <div class="ml-6">
                    <div class="rounded-lg shadow-lg bg-lime-400">
                        <div class="p-20">
                            <p>
                                ID: {ID}
                            </p>
                            <h5 class="text-gray-900 text-xl font-medium mb-2">{nameProject}</h5>
                            <p class="text-gray-700 text-base mb-4">
                                amount: {amount}
                            </p>
                            <p class="text-gray-700 text-base mb-4">
                                Tag: {tag}
                            </p>
                            <Link to='/detail-inves'>
                                <p className='mt-20 ml-20 text-2xl hover:text-slate-200'>
                                    <AiOutlineRead />
                                </p>
                            </Link>
                        </div>
                    </div>

                </div>
            </dataInvestideaContext.Provider>
        </div>

    )
}

export default IdeaInvestData
