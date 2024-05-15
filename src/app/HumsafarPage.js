import React from 'react';

function HumsafarPage() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33D6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const pageStyle = {
        backgroundColor: randomColor,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const textStyle = {
        color: 'white',
        textAlign: 'center',
        fontSize: '2rem',
        marginTop: '10px', // Corrected mt to marginTop
    };
    const headerStyle = {
        fontSize: '5rem',
    };

    const detailStyle = {
        marginTop: '20px',
    };

    return (
        <div style={pageStyle}>
            <div style={textStyle}>
                <p style={headerStyle}>Humsafar</p>
                <div style={detailStyle}>
                    <h2>App Service</h2>
                    <p>Humsafar provides an innovative drive app service that connects cities efficiently.</p>
                    <p>Whether it's a business trip or a personal journey, Humsafar ensures a comfortable and reliable transportation experience.</p>
                </div>
            </div>
        </div>
    );
}

export default HumsafarPage;
