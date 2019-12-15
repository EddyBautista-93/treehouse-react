
//Doesnt create dom nodes, this is not a real h1 element this is a object represntation of a dom node
// the type is h1 // the props are the attribute i gave it // the children is in the third comma
const title = React.createElement (
    'h1',
    { id: 'main-title', title: 'This is a title'},
    'My First React Element!'
);

//What this looks looks ^
// <h1 id="main-title" title="This is a title">
    // "My First React Element"
// </h1>    

const desc = React.createElement(
    'p',
    null,
    'I just learned how to create a React node and render it into the DOM.'
);

const header = React.createElement(
    'header',
    null,
    title,
    desc
)

//Renders the prop within the div tag we set for it.
ReactDOM.render(
    header, document.getElementById('root')
);

console.log(title);