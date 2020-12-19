import { useState, useEffect } from 'react';
import pup1 from '../img/pup1.jpg'
import pup2 from '../img/pup2.jpg'
import pup3 from '../img/pup3.jpg'
import pup4 from '../img/pup4.jpg'
import pup5 from '../img/pup5.jpg'
import pup6 from '../img/pup6.jpg'
import pup7 from '../img/pup7.jpg'
import pup8 from '../img/pup8.jpg'
import pup9 from '../img/pup9.jpg'
import pup10 from '../img/pup10.jpg'
import pup11 from '../img/pup11.jpg'
import pup12 from '../img/pup12.jpg'

const Card = (props) => {
    const { score, setScore, highScore, setHighScore} = props;
    const [valSequence, setValSequence] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const [isRandomized, setIsRandomized] = useState(false);
    
    const [pup] = useState([
        pup1, pup2, pup3, pup4,
        pup5, pup6, pup7, pup8,
        pup9, pup10, pup11, pup12
    ])
    const [pickedPup, setPickedPup] = useState([
        false, false, false, false,
        false, false, false, false,
        false, false, false, false
    ])

    let recordSet = []
    let pickedPupSet = [false, false, false, false, false, false, false, false, false, false, false, false]

    const randomizeVal = () => {
        recordSet = [];
        let valSequenceCopy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        valSequenceCopy.map((e, id) => {
            let number = Math.floor(Math.random() * 12);
            while (recordSet.includes(number)) {
                number = Math.floor(Math.random() * 12);
            }
            valSequenceCopy[id] = number;
            recordSet.push(valSequenceCopy[id]);
            return number;
        });

        setValSequence(recordSet);
    };

    useEffect(() => {
        if (!isRandomized) {
            randomizeVal();
            setIsRandomized(true);
        };
    });

    const scorePoint = (num) => {
        randomizeVal();
        if (pickedPup[num]) {
            if (highScore < score) {
                setHighScore(score);
            }

            setScore(0);
            pickedPupSet = pickedPupSet.map((e) => {
                return false;
            });
            setPickedPup(pickedPupSet);
        } else {
            setScore(score + 1);
            pickedPupSet = [...pickedPup];
            pickedPupSet[num] = true;
            setPickedPup(pickedPupSet);
        }
    };

    return valSequence.map((num) => {
        return (
            <div
                className="card"
                onClick={(e) => scorePoint(num)}
            >
                <img src={pup[num]} alt={pup[num]} key={num} />
            </div>
        )
    })
}

export default Card;