import React from 'react';
// import { MailIcon } from '@heroicons/react/solid'

const Button = props => {
    return (
        <button
            type="button"
            onClick={props.onClick}
            className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            {/* <MailIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" /> */}
            {props.children}
        </button>
    )
}

export default Button;
