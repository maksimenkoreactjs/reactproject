var ImageCounter = function(props) {
	return (
		<div className="image-counter">
			<div className="count">{props.count}</div>
			<img src={'img/' + props.ImageUrl} onClick={props.onCount} />
		</div>
		);
}

var Hero = React.createClass({
	getInitialState: function() {
		return {
			count: 0
		};
	},
	handleClicks: function(){
		this.setState({
			count: this.state.count+1
		});



	},
	render: function() {

			return (
			<div className = "container">
				<ImageCounter imageUrl = {this.props.ImageUrl} count={this.state.count} onCount={this.handleClicks} />
				<h1>{this.props.title}</h1>
				<p>{this.props.subtitle}</p>
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
				<div>
				{this.props.heroes.map(function(hero) {
					return <Hero
					key={hero.id}
					title={ hero.title }
					subtitle={hero.subtitle}
					imageUrl={hero.ImageURL}
					/>;
				})}
					
			
				</div>
			);
	}
});

var data = [
	{
		id:1,
		title: 'React',
		subtitle: 'UI library',
		ImageUrl: 'react.png'
	},
	{	
		id:2,
		title: 'Angular 2',
		subtitle: 'Full framework',
		ImageUrl: 'angular.png'
	},
	{
		id:3,
		title: 'Ember',
		subtitle: 'One more fast framework',
		ImageUrl: 'ember.png'
	},
	{
		id:4,
		title: 'Vue', 
		subtitle: 'The newest framework',
		ImageUrl: 'vue.png'
	}
];

ReactDOM.render(<App heroes={data} />,document.getElementById('root'));