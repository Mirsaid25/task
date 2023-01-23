import React from "react";

function ChangeReting({ setRetingInfo }) {
  function onchange(e) {
    if (e.target.checked) {
        setRetingInfo(e.target.value);
    }
}

  return (
    <div className="flex flex-col border w-[30%] p-3 absolute right-0 top-0">
      <div className="flex items-center gap-4">
        <input onChange={onchange} type="radio" name="contact" value="0" />
        <p>Any rating</p>
      </div>
      <div className="flex items-center gap-4">
        <input onChange={onchange} type="radio" name="contact" value="1" />
        <div className="flex items-center">
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input onChange={onchange} type="radio" name="contact" value="2" />
        <div className="flex items-center">
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input onChange={onchange} type="radio" name="contact" value="3" />
        <div className="flex items-center">
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input onChange={onchange} type="radio" name="contact" value="4" />
        <div className="flex items-center">
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input onChange={onchange} type="radio" name="contact" value="5" />
        <div className="flex items-center">
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input onChange={onchange} type="radio" name="contact" value="6" />
        <div className="flex items-center">
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input onChange={onchange} type="radio" name="contact" value="7" />
        <div className="flex items-center">
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input onChange={onchange} type="radio" name="contact" value="8" />
        <div className="flex items-center">
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input onChange={onchange} type="radio" name="contact" value="9" />
        <div className="flex items-center">
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-white.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input onChange={onchange} type="radio" name="contact" value="10" />
        <div className="flex items-center">
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
          <img src="/icons/Star-black.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ChangeReting;
