import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { UserState } from '../../context/UserContext';
import LoginButton from '../LoginButton';
import closeButton from '../../assets/close.svg';

function LoginForm() {
	const {
		errorMessage,
		empty,
		Login,
		showLogin,
		handleOpenRegistration,
		handleClose
	} = UserState();

	const [details, setDetails] = useState({ email: "", password: "" });

	const handleSubmit = e => {
		e.preventDefault();
		Login(details);
	}

  	return (
		(showLogin) ?
			<Wrapper>
				<div className="form-outer">
					<div className="form-inner">
						<div className="form-container">
							<div className="form-header">
								<h2 className='title form-title'>ВХОД</h2>
								
								<span className='form-registration' onClick={handleOpenRegistration}>
									<p>Регистрация</p>
								</span>
							</div>

							{(errorMessage !== "" && empty === false) ? <div className='error-message'>{errorMessage}</div> : ""}

							<form onSubmit={handleSubmit}>
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
										className={(details.email !== "" && empty === true) ? (details.email.includes("@") ? "" : "email-error") : ""}
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

								<div className="form-footer">
									<span className='form-reset'>
										<a href="/reset-password">Забыли пароль?</a>
									</span>
									<LoginButton/>
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

	.close-icon {
		width: 17px;
		height: 17px;
		margin-top: -40px; 
	}
`

export default LoginForm;