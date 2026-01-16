import React from 'react';

const HeaderChangeTheme = () => {
    const [changeTheme, setChangeTheme] = React.useState(false);

    const onChangeTheme = () => {
        setChangeTheme((prev) => !prev);
    };

    React.useEffect(() => {
        const body = document.body;

        if (changeTheme) {
            body.classList.remove('light');
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
        }
    }, [changeTheme]);

    return (
        <div className='changeTheme' onClick={onChangeTheme}>
            <button />
        </div>
    );
};

export default HeaderChangeTheme;
