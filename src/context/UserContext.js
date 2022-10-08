import { createContext, useState, useContext, useEffect } from 'react';

const getLocalStorageUsers = () => {
	let user = localStorage.getItem("user-items");
	if (user) {
	  return JSON.parse(localStorage.getItem('user-items'));
	} else {
	  return [];
	}
}

const getLocalStorageAuth = () => {
	let user = localStorage.getItem("auth-item");
	if (user) {
	  return JSON.parse(localStorage.getItem('auth-item'));
	} else {
	  return [];
	}
}

const User = createContext({ name: '', auth: false });

function UserProvider({ children }) {
	const [user, setUser] = useState(getLocalStorageAuth());
	const [errorMessage, setErrorMessage] = useState("");
	const [empty, setEmpty] = useState(false);
	const [showSignup, setShowSignup] = useState(false);
	const [showLogin, setShowLogin] = useState(false);

	const [users, setUsers] = useState(getLocalStorageUsers());

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
	
	const Signup = (details, history) => {
		if ((details.name === "") || (details.phone === "") || (details.email === "") || (details.password === "") || (details.passwordConf === "")) {
			setEmpty(true);
			setErrorMessage("Заполните поле");
		}
		else if (checkPhoneNumber(details.phone)) {
			setEmpty(false);
			setErrorMessage("Укажите правильный номер телефона.");
		}
		else if (!details.email.includes("@")) {
			setEmpty(false);
			setErrorMessage("Укажите правильный электронный адрес.");
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
						id: users.length,
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
			history.push("/");
			history.go(0);
		}
	};

	// Login updates the user data with a name parameter
	const Login = (details, history) => {
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
			setErrorMessage("");
			setShowLogin(false);
			history.push("/");
			history.go(0);
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

	useEffect(() => {
		localStorage.setItem('user-items', JSON.stringify(users));
		localStorage.setItem('auth-item', JSON.stringify(user));
	}, [users, user]);
  
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