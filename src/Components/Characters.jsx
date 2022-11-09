import React from 'react';
import './Characters.css'

const Characters = ({characters, loading}) => {
    return (
        (loading) ? (
            <h1 className='display flex justify-center'>
                <i className="fa-10x fas fa-sync fa-spin"></i>
            </h1>
        ): (
            <div className='display flex flex-col'>
                <div className="fondo w-full display flex flex-wrap justify-evenly">
                    {characters.map(character => (              
                        <div>
                            <div className="card-container p-3 w-80 border border-black display flex flex-col rounded-lg bg-indigo-500 text-white hover:bg-indigo-700">
                                <div className="head-container rounded-lg display flex flex-col text-center mb-4 border border-black">
                                    <img className="rounded-lg" src={character.image} alt="" />
                                    <span className="font-black font-mono my-3">{character.name}</span>
                                </div>
                                <div className="body-container text-center display flex flex-col">
                                    <span>Species: {character.species}</span>
                                    <span>Gender: {character.gender}</span>
                                </div>
                            </div>
                        </div>                     
                    ))}
                </div>
            </div>
        )     
    )        
    
}

export default Characters

