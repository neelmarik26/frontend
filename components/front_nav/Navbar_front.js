"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import './navbar.css';

const Navbar_front = () => {
    const pathname = usePathname();

    // Check if link is active
    const isActive = (path) => {
        return pathname === path;
    };

    return (
        <div className={`navbar scrolled`}>
            <div className="naming">
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
                    <div className="nav-icon-wrapper">
                        <Image
                            src="/icon.png"
                            className='icon'
                            alt="Logo"
                            width={42}
                            height={42}
                            priority
                        />
                    </div>
                    <span style={{
                        color: '#fff',
                        textShadow: '0 0 30px rgba(120, 119, 198, 0.5)',
                        letterSpacing: '-0.5px'
                    }}>
                        HOME LINK
                    </span>
                </Link>
            </div>

            <div className="links">
                <Link
                    href="/new_connection"
                    className={`link_new_connection ${isActive('/new_connection') ? 'active' : ''}`}
                >
                    new_connection
                </Link>
                <Link
                    href="/login"
                    className={`link_login ${isActive('/login') ? 'active' : ''}`}
                >
                    login
                </Link>
                <Link
                    href="/about"
                    className={`link_about ${isActive('/about') ? 'active' : ''}`}
                >
                    about
                </Link>
            </div>
        </div>
    );
}

export default Navbar_front;