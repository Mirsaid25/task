import React from 'react'

function ChangeGenre({setGanreInfo}) {

	function onchange(e) {
		if (e.target.checked) {
			setGanreInfo(e.target.value);
		}
	}


  return (
    <div className="flex flex-col border w-[15%] absolute right-0 top-0 p-3">
            <div className="flex items-center gap-2">
				<input onChange={onchange} type="radio" value="any" name='genre'/>
				<p>Any genre</p>
			</div>
			<div className="flex items-center gap-2">
				<input onChange={onchange} type="radio" value="action" name='genre'/>
				<p>Action</p>
			</div><div className="flex items-center gap-2">
				<input onChange={onchange} type="radio" value="comedy" name='genre'/>
				<p>Comedy</p>
			</div><div className="flex items-center gap-2">
				<input onChange={onchange} type="radio" value="drama" name='genre'/>
				<p>Drama</p>
			</div><div className="flex items-center gap-2">
				<input onChange={onchange} type="radio" value="thriller" name='genre'/>
				<p>Thriller</p>
			</div>
        </div>
  )
}

export default ChangeGenre