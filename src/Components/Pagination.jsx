import React from 'react'

const Pagination = ({prev, next, onPrevious, onNext}) => {

    const handlePrevious = () => {
        onPrevious()
    }

    const handleNext = () => {
        onNext()
    }


    return (
        <nav>
            <ul className="display flex justify-center list-none bg-black"> 
                {
                    prev ?
                <li>
                    <button onClick={handlePrevious} className="border border-black bg-blue-200 rounded p-2 m-2 hover:bg-blue-400">Previous</button>
                </li>
                : null}
                {
                    next ?
                <li>
                    <button onClick={handleNext} className="border border-black bg-blue-200 rounded p-2 m-2 hover:bg-blue-400">Next</button>
                </li>
                : null
                }
            </ul>
        </nav>
    )
}

export default Pagination
