import React from "react";
import { withRouter } from "react-router";
import './menu-item.styles.scss'


const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    /*we are able to access history and match becaause we wrapped Menutem
    with withRouter to prevent prop drilling and give access to the props
    passed to homepage when rendered with Route which included 
    history, match and location*/
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div 
            className = 'background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
         </div>
     </div>
);

export default withRouter(MenuItem);