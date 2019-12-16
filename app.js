
// React jsx
const desc = 'I just learned how to create a React Node and render it!';
const myTitleId = 'main-title';
const name = 'Eddy';

const header = (
<header>
<h1 id={myTitleId}>{name}'s First React Element!</h1>
<p>{desc}</p>
</header>

)

//Renders the prop within the div tag we set for it.
ReactDOM.render(
    header, document.getElementById('root')
);

// console.log(title);