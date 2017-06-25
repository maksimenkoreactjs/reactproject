var image = React.createElement('img', {src: 'https://facebook.github.io/react/img/logo.svg' });
var element = React.createElement('h1', null, 'React');
var subtitle = React.createElement('p', null, 'Library for UI');
var container = React.createElement('div', {className: 'container', image,title,subtitle}, children)

ReactDOM.render (
	element, document.getElementById('root')
	);
