import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
            <ul className='flex gap-6'>
                <li className='font-lato text-gray-400 hover:text-gray-600 hover:font-bold'><a href="#">Facebook</a></li>
                <li className='font-lato text-gray-400 hover:text-gray-600 hover:font-bold'><a href="#">Instagram</a></li>
                <li className='font-lato text-gray-400 hover:text-gray-600 hover:font-bold'><a href="#">Twitter</a></li>
            </ul>
            <div className='flex gap-2'>
                <img src="./assets/Help-Avatar.svg" alt="helping assistant" />
                <div>
                    <p className='font-playfair font-thin'>Have any Questions?</p>
                    <a href="#" className='font-lato font-medium' >Talk to a specialist</a>
                </div>
            </div>
        </div>

    )
}

export default Footer