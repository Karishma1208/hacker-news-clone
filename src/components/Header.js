import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <div className="back">
      <h1>Hacker News Clone</h1>
      
      <div className="nav-link">
        <NavLink to="/top" activeClassName="active">
          Top 
        </NavLink>
        <NavLink to="/show" activeClassName="active">
          Show
        </NavLink>
        <NavLink to="/ask" activeClassName="active">
          Ask
        </NavLink>
        <NavLink to="/job" activeClassName="active">
          Job
        </NavLink>
        <NavLink to="/new" activeClassName="active">
          New
        </NavLink>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
