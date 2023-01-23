import React from "react";



function SearchItem({item}) {    
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <p>{item.title}</p>
        <div className="flex items-center">
          {
            item.starArr.map(item => <img key={item.id} src={item.src} alt="" />)
          }
        </div>
      </div>
      <p>{item.category}</p>
    </div>
  );
}

export default SearchItem;
