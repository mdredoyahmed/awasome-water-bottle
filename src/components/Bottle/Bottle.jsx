import './Bottle.css'

const Bottle = ({bottle ,handelAddToCard }) => {
    const {name , price ,img} = bottle ;
    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h2>Bottle Name : {name}</h2>
            <p>Bottle Price  : {price} </p>
            <button onClick={ ()=>handelAddToCard(bottle) } >purses</button>
            

        </div>
    );
};

export default Bottle;