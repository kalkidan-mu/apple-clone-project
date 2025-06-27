import React from 'react'
import { Link } from "react-router-dom";
function Headerlink(props) {
  return (
    
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={props.link}>
          {props.name}
        </Link>
      </li>
    
  );
}

export default Headerlink
