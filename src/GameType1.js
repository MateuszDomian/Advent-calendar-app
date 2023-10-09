
export default function GameType1({imgSource}){

    return (
        <div className="game-content">
        <img className='back-img' src={imgSource} alt="backroundImage" />

        <div className="game1-puzzle" id='puzzle-1'>1</div>
        <div className="game1-puzzle" id='puzzle-2'>2</div>
        <div className="game1-puzzle" id='puzzle-3'>3</div>
        <div className="game1-puzzle" id='puzzle-4'>4</div>
        <div className="game1-puzzle" id='puzzle-5'>5</div>
        <div className="game1-puzzle" id='puzzle-6'>6</div>
        <div className="game1-puzzle" id='puzzle-7'>7</div>
        <div className="game1-puzzle" id='puzzle-8'>8</div>
        <div className="game1-puzzle" id='puzzle-9'>9</div>

        
        </div>
    )
}

