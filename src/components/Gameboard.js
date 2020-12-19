import Card from './Card';

const Gameboard = (props) => {
    return (
        <div className="gameboard">
            <Card {...props} />
        </div>
    )
}

export default Gameboard;