import React from "react";

const ReacipeIndex = ({alphaIndex}) => {
   const index = ['A', "B", "C", "D", "E", "F", "J", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   let num=0;
   return (
        <>
            {
                index.map(item => {
                    return(
                    <div className="numBox" key={num++} onClick={()=>alphaIndex(item)}>
                        <span className="numBoxItem">{item}</span>
                    </div>)
                })
            }
        </>
    )
}
export default ReacipeIndex;