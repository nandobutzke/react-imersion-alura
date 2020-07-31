import React from 'react';

function ButtonLink(props) {
  //props => { className: "Alguma coisa", href: "/" }
  return (
    <a className={props.ButtonLink} href={props.ButtonLink}> 
      New Video
    </a>
  )
}



export default ButtonLink;

