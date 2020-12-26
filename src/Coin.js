import './Coin.css';

const Coin = ({ result }) => {
    const headsImage = 'https://www.usmint.gov/wordpress/wp-content/uploads/2019/11/2020-america-the-beautiful-quarters-coin-uncirculated-obverse-philadelphia-768x768.jpg';
    const tailsImage = 'https://www.usmint.gov/wordpress/wp-content/uploads/2019/11/2020-america-the-beautiful-quarters-coin-tallgrass-prairie-kansas-uncirculated-reverse-768x768.jpg';

    return (
        <div className="Coin">
            <img className="Coin-image" src={result === 'heads' ? headsImage : tailsImage} alt={result === 'heads' ? 'heads' : 'tails'} />
        </div>
    )
}

export default Coin;