import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
	const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
	console.log(user);
	console.log(isAuthenticated);
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Route exact path="/" component={Home} />
			</Router>

		</div>
	);

}

export default App;
