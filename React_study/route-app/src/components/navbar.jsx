import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className='navbar-brand' to="/">主页</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/java">Java</Link>
                            <Link className="nav-link" to="/javascript">JavaScript</Link>
                            <Link className="nav-link" to="/typescript">TypeScript</Link>
                            <Link className="nav-link" to="/python">python</Link>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}
 
export default Navbar;