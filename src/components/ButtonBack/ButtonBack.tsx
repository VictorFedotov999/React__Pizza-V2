import React from 'react';

const ButtonBack = () => {
    return (
        <>
            <div className='product-info__back'>
                <button className='back-button'>
                    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
                        <path
                            d='M15 18l-6-6 6-6'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                    Назад
                </button>
            </div>
        </>
    );
};
export default ButtonBack;
