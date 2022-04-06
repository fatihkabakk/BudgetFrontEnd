import './App.css';
import Nav from './components/nav/Nav';

function App() {
	return (
		<div className='App'>
			<Nav isLogged={false} />
			<div className='content'>
				<p>Hello, React!</p>
			</div>
		</div>
	);
}

export default App;
