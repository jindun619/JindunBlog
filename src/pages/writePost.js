import * as React from "react"

function WritePost () {
    return(
        <div className="flex w-full">
            <div className="grids bg-base-300 place-items-center">
                <div>
                    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
                </div>
            </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="grids bg-base-300 place-items-center">
            
        </div>
      </div>
    )
}

export default WritePost