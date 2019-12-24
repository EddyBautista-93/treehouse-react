const players = [
    {
        name: "Eddy",
        score: 50,
        id:1
      },
      {
        name: "Bev",
        score: 85,
        id:2
      },
      {
        name: "Dani",
        score: 95,
        id:3
      },
      {
        name: "Alex",
        score: 80,
        id:4
      }

];


const Header = (props) => {
    return (
<header>
    <h1>{ props.title }</h1>
    <span className="stats">Players: { props.totalPlayers }</span>
</header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            {/* We don't need to pass in the state */}
            <Counter />
        </div>
    );
}

class Counter extends React.Component {
// initlizes what the score will start at// setting the constructor and 
// calling the super method
// constructor() {
//     super()
//     this.state = {
//         score: 0
//     };
// }
// you can set state in a shorter way but is not sipported by all web browsers

state = {
    score: 0
};
// state changed and render the componder, you pass it a object with
// part of the state you want to change
    incrementScore = () =>{
        this.setState({
            score: this.state.score +1
        });
    }
    decrementScore = () =>{
        this.setState({
            score: this.state.score -1
        });
    }

    render() {
        return(
        <div className="counter">
            <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
            {/* Changing props to state  */}
            <span className="counter-score">{ this.state.score }</span>
            {/* Arrow us binding helping with the scope */}
            <button className="counter-action increment" onClick={this.incrementScore}> + </button>
    </div>
         )
     }
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={props.initialPlayers.length}/>

            {/* Players List */}
            {props.initialPlayers.map( player =>
                <Player 
                name={player.name} 
                key={player.id.toString()}
                />
            )}
        </div>
    ) 
}

ReactDOM.render(
    <App initialPlayers={players}/> ,document.getElementById('root')
);

