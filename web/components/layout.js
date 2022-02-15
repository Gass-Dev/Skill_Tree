import React from 'react';
import Navigation from '../components/navigation';

const Layout = ({ children }) => {
    return (
        <div >
            <Navigation />
        </div>
    )
}
Layout.propTypes = {
    children: 'string',
}
export default Layout