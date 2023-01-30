import React from 'react';

export default function AboutMe() {
    return (
        <div className='flex flex-col py-20 items-center my-20 max-w-screen-md border-4 drop-shadow-xl  border-black rounded-lg min-h-min bg-gradient-to-b from-blue-400 to-indigo-500'>
            <article className='text-lg font-Burtons'>
                <h1 className='text-4xl font-extrabold font-Burtons text-center'>Who am I?</h1>
                <p className='px-10 pt-10 font-bold'>Hello! My name is Tim, a Software Engineer located in <b>New Jersey</b>, who has experience in taking an application from 0 to 100.<br /><br />I currently attending <b>New Jersey Institute of Technology</b> as a Computer Science major. <br /><br />Over the last couple of years I have been able to learn many different languages and skills. These skills have helped me create some amazing Projects. And I hope to continue bettering these skills as time goes on.</p>
            </article>
        </div>
    );
}