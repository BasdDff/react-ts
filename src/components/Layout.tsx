import React, {FC} from 'react';
import {Link, Outlet} from 'react-router-dom';

const Layout: FC = () => {
    return (
        <div>
            <div>
                <Link to="/users"> Users </Link>
                <Link to="/todos"> Todos </Link>
                <Link to="/test"> Test </Link>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;