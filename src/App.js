import './App.css';
import Router from './layouts/ComponentRouter';
import Nav from './layouts/Nav';

function App() {
	return (
		<>
			<Nav isLogged={false} />
			<div className='content'>
				<Router />
			</div>
		</>
	);
}

export default App;
