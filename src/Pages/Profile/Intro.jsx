import React from 'react';
import { RiCake2Line } from 'react-icons/ri';
import { SlGraduation } from 'react-icons/sl';

const Intro = () => {
    return (
        <div>
             <h3 className="text-primary text-xl font-bold my-3">Intro</h3>
            <div className="flex text-sm my-2"><SlGraduation className='text-4xl mr-2'/> <p> Studies at <span className='font-bold  text-primary'>Pundra University of Science & Technology</span></p></div>
            <div className="flex text-sm my-2"><RiCake2Line className='text-4xl mr-2'/> <p> Born <span className='font-bold  text-primary'>Pundra University of Science & Technology</span></p></div>
            <div className="flex text-sm my-2"><SlGraduation className='text-4xl mr-2'/> <p> Studies at <span className='font-bold  text-primary'>Pundra University of Science & Technology</span></p></div>
            <div className="flex text-sm my-2"><SlGraduation className='text-4xl mr-2'/> <p> Studies at <span className='font-bold  text-primary'>Pundra University of Science & Technology</span></p></div>
            <div className="flex text-sm my-2"><SlGraduation className='text-4xl mr-2'/> <p> Studies at <span className='font-bold  text-primary'>Pundra University of Science & Technology</span></p></div>
        </div>
    );
};

export default Intro;