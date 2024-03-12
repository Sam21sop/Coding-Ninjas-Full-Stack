// import React, { Component } from "react";

// Complete this Component
const ListItem = ({dataObject}) => {
  const {id, icon, name, link, bgColor} = dataObject;
  return (
    <div key={id} className="ListItem" style={{height: 30, backgroundColor:bgColor}}>
      <img src={icon} alt="" />
      <a href={link}>{name}</a>
    </div>
  );
};

// const ListItem = () => {
  
//   const {id, icon, name, link, bgColor} = dataObject;
//   return (
//     <div  className="ListItem" style={{height: 30, backgroundColor:'#b8b3e8'}}>
//       <img src='https://cdn-icons-png.flaticon.com/128/733/733579.png' alt="Twitter" />
//       <a href="https://twitter.com/">Twitter</a>
//     </div>
//   );
// };

export default ListItem;
