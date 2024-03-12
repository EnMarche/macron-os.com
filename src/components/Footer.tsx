import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <p>
                <a href="#" className="text-gray-500 no-underline hover:no-underline">&copy; App 2020</a> - Template by{' '}
                <a href="https://www.tailwindtoolbox.com" className="text-gray-500 no-underline hover:no-underline">TailwindToolbox.com</a>
            </p>
        </div>
    );
};

export default Footer;
