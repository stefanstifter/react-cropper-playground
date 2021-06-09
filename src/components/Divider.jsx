import React from 'react';

const Divider = props => {
    const title = props.title ?? 'Foo Bar';
    return (
        <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
                <span className="px-3 bg-white text-lg font-medium text-gray-900">{title}</span>
            </div>
        </div>
    );
}

export default Divider;
