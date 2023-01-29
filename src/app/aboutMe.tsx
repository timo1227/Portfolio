import React from 'react';

export default function AboutMe() {
    return (
        <div className='flex flex-col items-center my-20 max-w-screen-md border-4 drop-shadow-xl  border-purple-500 rounded-lg min-h-min py-10 bg-gradient-to-b from-purple-500 to-indigo-500'>
            <article className='text-lg font-Burtons'>
                <h1 className='text-4xl font-bold font-Burtons text-center'>Who am I?</h1>
                <p className='px-10'>Hello! My name is Tim, a Software Engineer located in <b>New Jersey</b>, who has experience in taking an application from 0 to 100.</p>
            </article>
        </div>
    );
}