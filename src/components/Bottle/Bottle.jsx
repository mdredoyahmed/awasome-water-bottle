import './Bottle.css'

const Bottle = ({bottle}) => {
    const {name , price ,img} = bottle ;
    return (
        <div className='bottle'>
            <h2>Bottle Name : {name}</h2>
            <p>Bottle Price  : {price} </p>
            <img src={img} alt="" />

        </div>
    );
};

export default Bottle;