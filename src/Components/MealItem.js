import React from "react";
import { useNavigate } from "react-router-dom";
const MealItem=({data})=>{
    let navigate = useNavigate();
    return(
        <>  
            {
                (!data) ?"Not Found": data.map(item=>{
                    return(
                    <div className="card" key={item.idMeal} onClick={()=>navigate(`/${item.idMeal}`)}>
                        <img src={item.strMealThumb} alt="" />
                        <span className="meal-item-name">{item.strMeal}</span>
                    </div>
                    )
                })
            }
            
        </>
    )
}
export default MealItem;