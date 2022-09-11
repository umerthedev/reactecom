import React from 'react';
import '../../assets/Admin/css/styles.css';
import '../../assets/Admin/js/scripts';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MasterLayout = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    Master Files

                </main>
                <Footer />
            </div>

        </div>
    )
}
export default MasterLayout;