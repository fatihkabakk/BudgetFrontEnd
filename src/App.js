import './App.css';
import Nav from './components/nav/Nav';

function App() {
	return (
		<>
			<Nav isLogged={false} />
			<div className='content'>
				<p>Hello, React!</p>
			</div>
		</>
	);
}

export default App;
