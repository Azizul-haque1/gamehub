import React from 'react'
import Navbar from '../componets/Navbar'
import { Outlet } from 'react-router'
import Footer from '../componets/Footer'

const HomeLayout = () => {
    return (
        <div className="w-full min-h-screen relative  bg-secondary">

            {/* Background Image
            <div
                style={{
                    backgroundImage: "url('https://i.ibb.co.com/hRX57VBX/8764038.jpg')",
                }}
                className="absolute inset-0 bg-cover bg-center"
            /> */}

            {/* Theme overlay */}
            <div className="absolute inset-0 bg-neutral/80 backdrop-blur-sm" />

            {/* Main Content */}
            <div className="relative z-20 flex flex-col min-h-screen">

                <header className="w-full bg-secondary/60 backdrop-blur-xl shadow-lg border-b border-primary/20 sticky top-0 z-50">
                    <nav className="w-10/12 mx-auto">
                        <Navbar />
                    </nav>
                </header>
                {/* Page content */}
                <main className="flex-grow">
                    <Outlet />
                </main>

                {/* Footer */}
                <footer className="bg-secondary/80 backdrop-blur-xl border-t border-primary/20">
                    <Footer />
                </footer>

            </div>
        </div>
    )
}

export default HomeLayout
