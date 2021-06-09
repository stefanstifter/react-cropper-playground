import React from 'react';

const Button = props => {
    return (
        <button
            type="button"
            onClick={props.onClick}
            className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
            {props.children}
        </button>
    )
}

export default Button;
