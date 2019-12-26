
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
            {/* button to remove player, we us a anon functin to call to props remove player
            that we set in the App class and thanks to props we are able to get the id to 
            delete the correct one */}
            <button className="remove-player"  onClick={ () => props.removePlayer(props.id)}>x</button>
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
        //updateing state based on previous state making it more reliahle
        this.setState( prevState => ({
            score: prevState.score +1
        }));
    }
    decrementScore = () =>{
        this.setState(prevState => ({
            score: prevState.score -1
        }));
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
//Changed app function into a class to set a state for the players
class App extends React.Component{
        state = {
            players: [
                {
                    name: "Eddy",
                    id:1
                  },
                  {
                    name: "Bev",
                    id:2
                  },
                  {
                    name: "Dani",
                    id:3
                  },
                  {
                    name: "Alex",
                    id:4
                  }
            ]
        };
        // this is the event handler that will delete the players
        // *setState = setState() schedules an update to a component's state object. 
        // When state changes, the component responds by re-rendering.

      handleRemovePlayer = (id) => {
          this.setState( prevState => {
              return {
                  players: prevState.players.filter( p => p.id !== id )
              }
          })
      }

    render(){
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={this.state.players.length}/>
    
                {/* Players List */}
                {this.state.players.map( player =>
                    <Player 
                    name={player.name} 
                    id={player.id}
                    key={player.id.toString()}
                    removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        )
    }
    }
   

ReactDOM.render(
    <App /> ,document.getElementById('root')
);

