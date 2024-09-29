"use client";

import { useEffect, useState } from 'react';
import tokenStorage from '../utils/token';

export default function Page() {
    const [token, setToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = tokenStorage.getToken();
        const storedRefreshToken = tokenStorage.getRefreshToken();

        if (storedToken == null || storedRefreshToken == null)
            window.location.href = "/login";

        setToken(storedToken);
        setRefreshToken(storedRefreshToken);
    }, []);

    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <div>{token}</div>
            <div>{refreshToken}</div>
        </div>
    );
}
