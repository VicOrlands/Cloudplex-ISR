import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div style={styles.container}>
            <div style={styles.svgContainer}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="150"
                    height="150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
            </div>
            <h1 style={styles.heading}>404 - Page Not Found</h1>
            <p style={styles.message}>
                Oops! The page you are looking for does not exist.
            </p>
            <Link href="/" style={styles.link}>Return to Home
            </Link>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        color: '#333',
        padding: '0 20px',
    },
    svgContainer: {
        marginBottom: '20px',
        color: '#555',
    },
    heading: {
        fontSize: '3rem',
        marginBottom: '10px',
    },
    message: {
        fontSize: '1.6rem',
        marginBottom: '20px',
    },
    link: {
        fontSize: '1.4rem',
        color: '#0070f3',
        textDecoration: 'none',
    },
};

export default NotFound;
