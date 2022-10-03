import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import LoginButton from '../../components/LoginButton';
import closeButton from '../../assets/close.svg';

function LoginForm({ login, error, showLogin, close }) {
	const [details, setDetails] = useState({ email: "", password: "" });

	const handleSubmit = e => {
		e.preventDefault();
		login(details);
	}
	// const userRef = useRef();
	// const errRef = useRef();

	// const [user, setUser] = useState('');
	// const [password, setPassword] = useState('');
	// const [errorMessage, setErrorMessage] = useState('');
	// const [success, setSuccess] = useState(false);

	// useEffect(() => {
	// 	useRef.current.focus();
	// }, []);
	
	// useEffect(() => {
	// 	setErrorMessage('');
	// }, [user, password]);

	// const handleSubmit = async (e) =>{
	// 	e.preventDefault();
	// 	console.log(user, password);
	// 	setUser('');
	// 	setPassword('');
	// 	setSuccess(true);
	// }
  	return (
		showLogin ?
			<Wrapper>
				<div className="form-outer">
					<div className="form-inner">
						<div className="form-container">
							<div className="form-header">
								<h2 className='title form-title'>Вход</h2>
								
								<span className='form-registration'>
									<a href="/registration">Регистрация</a>
								</span>
							</div>

							{(error !== "") ? ( <div className='error-message'>{error}</div> ) : ""}

							<form onSubmit={ handleSubmit } >
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input 
										type="email"
										name="email"
										id="email"
										onChange={e => setDetails({...details, email: e.target.value})}
										value={details.email}
										className={(details.email !== "") ? (details.email.includes("@") ? "" : "email-error") : ""}
										// ref={userRef}
										// onChange={(e) => setUser(e.target.value)}
										// value={user}
										required
									/>
								</div>

								<div className="form-group">
									<label htmlFor="password">Пароль</label>
									<input 
										type="password"
										name="password"
										id="password"
										onChange={e => setDetails({...details, password: e.target.value})}
										value={details.password}
										// onChange={(e) => setPassword(e.target.value)}
										// value={password}
										required
									/>
								</div>

								<div className="form-footer">
									<span className='form-reset'>
										<a href="/reset-password">Забыли пароль?</a>
									</span>
									<LoginButton/>
								</div>
							</form>
						</div>

						<img src={closeButton} alt="close button" className="button login-icon" onClick={close}/>
					</div>
				</div>
			</Wrapper>
		:
			null
  	);
}

const Wrapper = styled.nav`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 10;

	.form-outer {
		background: rgba(0, 0, 0, 0.5);
		height: 100%;
		width: 100%;
		padding-top: 100px;
	}

	.form-inner {
		display: flex;
		justify-content: space-between;
		width: 580px;
		background: var(--clr-white);
		margin: auto;
		padding: 60px 21px 110px 80px;
	}
	
	.form-container {
		width: 420px;
	}

	.form-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 30px;
	}

	.form-title {
		font-size: 30px;
		font-weight: 500;
		line-height: 40px;
	}
	
	.form-registration {
		font-size: 18px;
		font-weight: 400;
		line-height: 20px;
		margin-top: 20px;
	}

	.error-message {
		font-size: 18px;
		font-weight: 500;
		color: red;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
	}
	
	.form-group label {
		font-size: 18px;
		font-weight: 400;
		line-height: 20px;
		margin-bottom: 10px;
	}
	
	.form-group input {
		height: 50px;
		font-size: 16px;
		font-weight: 400;
		padding: 20px;
	}

	.email-error {
		border: 1px solid red;
	}

	.form-footer {
		display: flex;
		justify-content: space-between;
		height: 50px;
		margin-top: 30px;
	}

	.form-reset {
		font-size: 18px;
		font-weight: 400;
		line-height: 20px;
		text-decoration: underline;
		margin-top: 10px;
	}

	.login-icon {
		width: 17px;
		height: 17px;
		margin-top: -40px; 
	}
`

export default LoginForm;