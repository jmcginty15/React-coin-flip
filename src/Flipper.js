import { useState } from 'react';
import Coin from './Coin';

const Flipper = () => {
    const [flips, setFlips] = useState(0);
    const [heads, setHeads] = useState(0);
    const [tails, setTails] = useState(0);
    const [lastFlip, setLastFlip] = useState(null);

    return (
        <div className="Flipper">
            <h3>Let's flip a coin!</h3>
            <div>{lastFlip ? <Coin result={lastFlip} /> : null}</div>
            <button onClick={flipCoin}>FLIP MEEEE</button>
            <p>Out of {flips} flips, there have been {heads} heads and {tails} tails.</p>
        </div>
    )

    function flipCoin() {
        setFlips(flips + 1);
        const flipResult = Math.random() < 0.5 ? 'heads' : 'tails';

        if (flipResult === 'heads') {
            setLastFlip('heads');
            setHeads(heads + 1);
        } else if (flipResult === 'tails') {
            setLastFlip('tails');
            setTails(tails + 1);
        }
    }
}

export default Flipper;