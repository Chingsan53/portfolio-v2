import { Fragment } from "react";
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as SEngineer } from "../../assets/SEngineer.svg";
import "./navigation.styles.scss";

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                {/* <Link className="logo-container" to="/">
                    <SEngineer className="logo" />
                </Link> */}
                <div className="nav-links-container">
                    <Link className="nav-link" to="/project">
                        Projects
                    </Link>
                    <Link className="nav-link" to="/experiences">
                        Work
                    </Link>
                    <Link className="nav-link" to="/education">
                        Education
                    </Link>
                    <Link className="nav-link" to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
            <Outlet />
    </Fragment>
    )
};

export default Navigation;