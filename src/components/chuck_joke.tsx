import Joke from '../joke';


// An alternative way of declaring a component is to write it as a function which
// returns a React.ReactNode. This is equivalent to the syntax in <ChuckCard/>
function ChuckJoke(joke: string): React.ReactNode {

	return (
		<p>
			<p> {joke} </p>
		</p>
	)
}

export default ChuckJoke;

