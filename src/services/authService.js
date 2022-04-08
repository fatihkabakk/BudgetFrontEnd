import post from 'axios';

export default class AuthService {
	login(username, password) {
		return axios.post('http://localhost:5000/login', {
			username,
			password,
		});
	}

	register(username, password) {
		return axios.post('http://localhost:5000/register', {
			username,
			password,
		});
	}
}
