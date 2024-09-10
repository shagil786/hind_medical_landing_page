"use client"
import SessionProvider from 'next-auth';

const Provider = ({children}: {children: React.ReactNode}) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}