import React from 'react';
import AudioButton from './AudioButton';

const Main: React.FC = () => {
    return (
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* Left Column */}
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                    PARCE QUE C'EST
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-red-500"> NOTREU </span>
                     PROJET !!!!!
                </h1>
                <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                    Je ne céderai rien, ni aux fainéants, ni aux cyniques, ni aux extrêmes.
                </p>
                <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                    {/* Form content */}
                    <div className="mb-4">
                        <label className="block text-blue-300 py-2 font-bold mb-2" for="emailaddress">
                            This form is useless just like you habibi
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                            id="emailaddress"
                            type="text"
                            placeholder="you@somewhere.com"
                        />
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <AudioButton
                            label={"Don't Sign Up"}
                            twlClasses={"bg-gradient-to-r from-red-800 via-white to-blue-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"}
                            audioPath={"/gpasdamis.mp3"} />

                    </div>
                </form>
            </div>
            {/* Right Column */}
            <div className="w-full xl:w-3/5 p-12 overflow-hidden">
                <img className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="macbook.svg" alt="Macbook" />
            </div>
            <div className="mx-auto md:pt-16">
                <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
                    Download our app:
                </p>
                <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                    <img src="/App Store.svg" className="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out" />
                    <img src="/Play Store.svg" className="h-12 transform hover:scale-125 duration-300 ease-in-out" />
                    {/* App Store and Play Store icons */}
                </div>
            </div>
        </div>
    );
};

export default Main;
