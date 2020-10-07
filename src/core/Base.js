import React from 'react';
import { Link, withRouter } from "react-router-dom";
import "./Base.css";
import Logo from "./bg.png";

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return {};
    } else {
        return {};
    }
};


const Base = ({ history }) => {
    return (
        <div className="body">
            <nav>
                <input type="checkbox" id="check" />
                    <label for="check" class="checkbtn">
                        <i class="fas fa-bars"></i>
                    </label>
                    <div className="logo m-2 p-3">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <ul>
                    <li><Link style={currentTab(history, "/")} to="/" class="active a">Home</Link></li>
                    <li><Link style={currentTab(history, "/events")} to="/events" className="a">Events</Link></li>
                    <li><Link style={currentTab(history, "/theteam")} to="/theteam" className="a">The Team</Link></li>
                    <li><Link style={currentTab(history, "/https://dsc.community.dev/shri-vaishnav-vidyapeeth-vishwavidyalaya/")} to="https://dsc.community.dev/shri-vaishnav-vidyapeeth-vishwavidyalaya/" className="a">Join Us</Link></li>
                    </ul>
            </nav>
        </div>
    );
}

export default withRouter(Base);