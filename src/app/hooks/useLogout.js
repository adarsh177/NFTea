import { useEffect, useRef, useState } from 'react';

const useLogout = () => {
    const [isAuth, setisAuth] = useState(false);

    const logout = () => {
        window.localStorage.setItem('isAuth', false);
        window.location.href = '/';
        setisAuth();
    }

    useEffect(() => {
        setisAuth(localStorage.getItem('isAuth'));
    }, []);

    return [isAuth, logout];
};

export default useLogout;
