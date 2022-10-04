import { createContext, useState, useContext } from 'react';

const User = createContext({ name: '', auth: false });

function UserProvider({ children }) {
	const [user, setUser] = useState({ name: '', phone: '', email: '', password: '', auth: false });
	const [errorMessage, setErrorMessage] = useState("");
	const [empty, setEmpty] = useState(false);
	const [showSignup, setShowSignup] = useState(false);
	const [showLogin, setShowLogin] = useState(false);

	const [users, setUsers] = useState([{
		id: 0,
		name: "Admin1",
		phone: "+7 (775) 976-41-65",
		email: "admin@gmail.com",
		password: "QWErty123",
		auth: true 
	}, 
	{
		id: 1,
		name: "Admin2",
		phone: "+7 (778) 000-23-10",
		email: "admin2@gmail.com",
		password: "QWErty123",
		auth: true 
	}]);

	function checkUppercase (str) {
		for (var i = 0; i < str.length; i++) {
			if (str.charAt(i) == str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)) {
				return true;
			}
		}
		return false;
	};
	function checkLowercase (str) {
		for (var i = 0; i < str.length; i++) {
			if (str.charAt(i) == str.charAt(i).toLowerCase() && str.charAt(i).match(/[a-z]/i)) {
				return true;
			}
		}
		return false;
	};
	function checkNumber (str) {
		return /[0-9]/.test(str);
	}
	function checkPhoneNumber (str) {
		for (var i = 0; i < str.length; i++) {
			if (str.charAt(i) === '_') {
				return true;
			}
		}
		return false;
	};
	
	const Signup = details => {
		if ((details.name === "") || (details.phone === "") || (details.email === "") || (details.password === "") || (details.passwordConf === "")) {
			setEmpty(true);
			setErrorMessage("Заполните поле");
		}
		else if (checkPhoneNumber(details.phone)) {
			setEmpty(false);
			setErrorMessage("Укажите правильный номер телефона.");
		}
		else if (users.filter(user => (user.email === details.email)).length > 0) {
			setEmpty(false);
		   setErrorMessage("Пользователь с таким e-mail (" + details.email + ") уже существует.");
		}
		else if (users.filter(user => (user.phone === details.phone)).length > 0) {
			setEmpty(false);
		   setErrorMessage("Пользователь с таким номером (" + details.phone + ") уже существует.");
		}
		else if (details.password !== details.passwordConf) {
			setEmpty(false);
		   setErrorMessage("Введите корректный повтор пароля.");
		}
		else if (details.password.length < 8) {
			setEmpty(false);
		   setErrorMessage("Пароль должен состоять хотя бы из 8 символов.");
		}
		else if (!checkUppercase(details.password)) {
			setEmpty(false);
		   setErrorMessage("Пароль должен содержать хотя бы одну прописную букву.");
		}
		else if (!checkLowercase(details.password)) {
			setEmpty(false);
		   setErrorMessage("Пароль должен содержать хотя бы одну строчную букву.");
		}
		else if (!checkNumber(details.password)) {
			setEmpty(false);
		   setErrorMessage("Пароль должен содержать хотя бы одну цифру.");
		}
		else {
			setUsers((user) => {
				return [
					...users,
					{
						name: details.name,
						phone: details.phone,
						email: details.email,
						password: details.password,
						auth: true
					}
				]
			});
			setUser((user) => ({
				name: details.name,
				phone: details.phone,
				email: details.email,
				password: details.password,
				auth: true
			}));
			setEmpty(false);
			setShowSignup(false);
		}
	};

	// Login updates the user data with a name parameter
	const Login = details => {
		const currentUser = users.filter(user => (user.email === details.email) && (user.password === details.password))
 
		if (currentUser.length > 0) {
			setUser((user) => ({
				name: currentUser[0].name,
				phone: currentUser[0].phone,
				email: currentUser[0].email,
				password: currentUser[0].password,
				auth: currentUser[0].auth
			}));
			setEmpty(false);
			setShowLogin(false);
		}
		else if (details.email === "" || details.password === "") {
			setEmpty(true);
			setErrorMessage("Заполните поле");
		}
		else {
		   setEmpty(false);
		   setErrorMessage("Неверный логин или пароль.");
		}
	};

	// Logout updates the user data to default
	const Logout = () => {
		setUser((user) => ({
		  	name: '',
			phone: '',
			email: '',
			password: '',
			auth: false
		}));
	};

	const handleOpenLogin = () => {
		setShowSignup(false);	
		setShowLogin(true);	
		setErrorMessage("");
		setEmpty(false);
	};
  
	const handleClose = () => {
		setShowLogin(false);	
		setShowSignup(false);
		setErrorMessage("");
		setEmpty(false);
	};
  
	const handleOpenRegistration = () => {
		setShowLogin(false);	
		setShowSignup(true);
		setErrorMessage("");
		setEmpty(false);
	};
  
  	return (
	 	<User.Provider value={{ user, errorMessage, empty, Signup, Login, Logout, showLogin, handleOpenLogin, handleClose, showSignup, handleOpenRegistration }}>
			{ children }
		</User.Provider>
  	);
}

export const UserState = () => {
	return useContext(User);
}

export default UserProvider;