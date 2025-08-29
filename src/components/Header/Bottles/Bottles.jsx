import { useEffect, useState } from "react";
import Bottle from "../../Bottle/Bottle";
import './Bottles.css'


const Bottles = () => {
    
    const [ bottles , setBottles ] = useState([]);
    const [card , setCard] = useState([]);
    useEffect(()=>{
        fetch('bottles.json')
        .then( (res)  => res.json() )
        .then(data => setBottles(data))
    },[])

       
       const handelAddToCard = (bottle)=>{
           const NewCard = [...card , bottle] ;
           setCard(NewCard) ;
       }

    return (
        <div>
            <h2>Bottles Here:{bottles.length}</h2>
            <h4>Card: {card.length}</h4>
           <div className="bottle-container">
             {
            bottles.map(bottle => <Bottle 
                key={bottle.id}
                handelAddToCard = {handelAddToCard }
                 bottle = {bottle} ></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;