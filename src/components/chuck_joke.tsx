import Joke from '../joke';

interface chuckJokeProps {
	id: number;
	joke: string;
}


// An alternative way of declaring a component is to write it as a function which
// returns a React.ReactNode. This is equivalent to the syntax in <ChuckCard/>
const ChuckJoke: React.FC<chuckJokeProps> = ({ id, joke }) =>
	<>
		<p key={id}>{joke} </p>
	</>
export default ChuckJoke;


