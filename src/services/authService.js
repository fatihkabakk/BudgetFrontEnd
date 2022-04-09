import axios from 'axios';

export default class AuthService {
	login(username, password, rememberMe) {
		rememberMe = rememberMe ? rememberMe : false;
		return axios.post('http://localhost:5000/login', {
			username,
			password,
			rememberMe,
		});
	}

	register(username, password) {
		return axios.post('http://localhost:5000/register', {
			username,
			password,
		});
	}
}
