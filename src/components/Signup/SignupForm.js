import React, { useState } from 'react';
import styled from 'styled-components';
import { UserState } from '../../context/UserContext';
import Button from '../LoginButton';
import Input from '../Input';
import closeButton from '../../assets/close.svg';

function LoginForm() {
	const {
		errorMessage,
		empty,
		Signup,
		showSignup,
		handleOpenLogin,
		handleClose
	} = UserState();

	const [details, setDetails] = useState({ name: "", phone: "", email: "", password: "", passwordConf: "" });

	const handleSubmit = e => {
		e.preventDefault();
		Signup(details);
	}

	return (
		showSignup ?
			<Wrapper>
				<div className="form-outer">
					<div className="form-inner">
						<div className="form-container">
							<div className="form-header">
								<h2 className='title form-title'>РЕГИСТРАЦИЯ</h2>
								
								<span className='form-login' onClick={handleOpenLogin}>
									<p>Вход</p>
								</span>
							</div>

							{(errorMessage !== "" && empty === false) ? <div className='error-message'>{errorMessage}</div> : ""}

							<form onSubmit={ handleSubmit }>
								<div className="form-group">
									<div className="form-label">
										<label htmlFor="text">ФИО</label>
										{(details.name === "" && empty === true) ? <div className='error-message'>{errorMessage}</div> : ""}
									</div>
									<input
										type="text"
										name="name"
										id="name"
										onChange={e => setDetails({...details, name: e.target.value})}
										value={details.name}
										/>
								</div>
								
								<div className="form-group">
									<div className="form-label">
										<label htmlFor="number">Телефон</label>
										{(details.phone === "" && empty === true) ? <div className='error-message'>{errorMessage}</div> : ""}
									</div>
									<Input 
										type="text"
										placeholder={'+7 (___) ___-__-__'} 
										mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
										name="phone"
										id="phone"
										onChange={e => setDetails({...details, phone: e.target.value})}
										value={details.phone}
									/>
								</div>
								
								<div className="form-group">
									<div className="form-label">
										<label htmlFor="email">Email</label>
										{(details.email === "" && empty === true) ? <div className='error-message'>{errorMessage}</div> : ""}
									</div>
									<input
										type="text"
										name="email"
										id="email"
										onChange={e => setDetails({...details, email: e.target.value})}
										value={details.email}
										className={(details.email !== "") ? (details.email.includes("@") ? "" : "email-error") : ""}
									/>
								</div>
								
								<div className="form-group">
									<div className="form-label">
										<label htmlFor="password">Пароль</label>
										{(details.password === "" && empty === true) ? <div className='error-message'>{errorMessage}</div> : ""}
									</div>
									<input
										type="password"
										name="password"
										id="password"
										onChange={e => setDetails({...details, password: e.target.value})}
										value={details.password}
									/>
								</div>
								
								<div className="form-group">
									<div className="form-label">
										<label htmlFor="passwordConf">Подтверждение пароля</label>
										{(details.passwordConf === "" && empty === true) ? <div className='error-message'>{errorMessage}</div> : ""}
									</div>
									<input
										type="password"
										name="password"
										id="password"
										onChange={e => setDetails({...details, passwordConf: e.target.value})}
										value={details.passwordConf}
									/>
								</div>

								<div className="form-footer">
									<Button/>
									<p>Регистрируясь на сайте вы соглашаетесь с <a href="/terms_of_use">пользовательским соглашением</a></p>
								</div>
							</form>
						</div>

						<img src={closeButton} alt="close button" className="button close-icon" onClick={handleClose}/>
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
	position: fixed;
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
		padding: 60px 21px 80px 80px;
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
	
	.form-login {
		font-size: 18px;
		font-weight: 400;
		line-height: 20px;
		margin-top: 20px;
		cursor: pointer;
	}

	.error-message {
		font-size: 18px;
		font-weight: 400;
		color: #FA0000;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
	}

	.form-label {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	
	.form-label label {
		font-size: 18px;
		font-weight: 400;
		line-height: 20px;
	}
	
	.form-group input {
		height: 50px;
		font-size: 16px;
		font-weight: 400;
		padding: 20px;
	}

	.email-error {
		border: 1px solid #FA0000;
	}

	.form-footer {
		text-align: center;
		margin-top: 30px;
	}

	.form-footer .button {
		width: 260px;
		height: 50px;
	}

	.form-footer p {
		font-size: 14px;
		font-weight: 400;
		margin-top: 20px;
	}
	
	.form-footer a {
		text-decoration: underline;
	}

	.close-icon {
		width: 17px;
		height: 17px;
		margin-top: -40px; 
	}
`

export default LoginForm;