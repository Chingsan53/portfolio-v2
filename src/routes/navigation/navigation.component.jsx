import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as SEngineer } from "../../assets/SEngineer.svg";
import "./navigation.styles.scss";

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <SEngineer className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/project">
                        Project
                    </Link>
                    <Link className="nav-link" to="/experiences">
                        Experiences
                    </Link>
                </div>
            </div>
    
    </Fragment>
    )
};

export default Navigation;