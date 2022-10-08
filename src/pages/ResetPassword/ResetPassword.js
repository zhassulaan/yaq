import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import Input from '../../components/Input';
import Button from '../../components/Button';

function ResetPassword() {
	const history = useHistory();
	const [details, setDetails] = useState({ email: "", phone: "" });

	function checkPhoneNumber (str) {
		for (var i = 0; i < str.length; i++) {
			if (str.charAt(i) === '_') {
				return true;
			}
		}
		return false;
	};

	function checkEmailAddres (str) {
		for (var i = 0; i < str.length; i++) {
			if (str.charAt(i) === '@') {
				return false;
			}
		}
		return true;
	};

	const handleSubmit = e => {
			e.preventDefault();
			history.push("/");
			history.go(0);
	}

  	return (
	 	<Wrapper>
			<h1 className='title section-title'>ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h1>

			<form onSubmit={handleSubmit}>
				<p className='section-text1'>Если вы забыли пароль, введите свой email зарегистрированный на сайте. В скором времени вам будет выслан новый пароль, который после входа на сайт, вы сможете изменить в личном кабинете.</p>
				
				<div className='form-group'>
					<div className="form-label">
						<label htmlFor="email">Email</label>
					</div>
					<div className={(details.email !== "" && checkEmailAddres(details.email)) ? 'error-border' : 'default-border'}>
						<input
							type="text"
							name="email"
							id="email"
							onChange={e => setDetails({...details, email: e.target.value})}
							value={details.email}
						/>
					</div>
				</div>

				<p className='section-text2'>Или вы можете ввести номер телефона. В скором времени вам будет отправлен новый пароль.</p>
								
				<div className='form-group'>
					<div className="form-label">
						<label htmlFor="number">Телефон</label>
					</div>
					<div className={(details.phone !== "" && checkPhoneNumber(details.phone)) ? 'error-border' : 'default-border'}>
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
				</div>
								
				<div className='form-button'>
					<Button text={"Отправить"} bool={checkEmailAddres(details.email) || checkPhoneNumber(details.phone)}/>
				</div>
			</form>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	padding: 1.875rem 13.125vw 8.75rem;
	
	.section-title {
		font-size: 80px;
		font-weight: 500;
		margin-bottom: 3.125rem;
	}

	.section-text1,
	.section-text2 {
		font-weight: 400;
	}
	
	.section-text1 {
		width: 56.25vw;
		font-size: 20px;
		margin-bottom: 40px;
	}
	
	.section-text2 {
		width: 30vw;
		font-size: 18px;
		margin-bottom: 30px;		
	}

	.form-label {
		font-size: 18px;
		font-weight: 400;
		margin-bottom: 10px;
	}

	input,
	.input-placeholder-text {
		margin-bottom: 30px;
	} 
	
	.input-placeholder-text {
		border: none;
	}

	.form-button .button {
		height: 50px;
		width: 16.25vw;
		margin-top: 20px;
	}

	.default-border input,
	.default-border .input-placeholder-text {
		width: 26.25vw;
		height: 50px;
		border: 1px solid var(--clr-primary-4);
		padding-left: 20px;
		font-size: 16px;
	}

	.error-border input,
	.error-border .input-placeholder-text {
		width: 26.25vw;
		height: 50px;
		border: 1px solid #FA0000;
		padding-left: 20px;
		font-size: 16px;
	}

	@media (max-width: 1280px) {
		.section-title {
			font-size: 75px;
		}

		.section-text1 {
			width: 60.25vw;
			font-size: 19px;
			margin-bottom: 35px;
		}
		
		.section-text2 {
			width: 34vw;
			font-size: 17px;
			margin-bottom: 25px;	
		}

		.form-label {
			font-size: 17px;
		}

		.form-button .button {
			width: 20.25vw;
		}
	
		.default-border input,
		.default-border .input-placeholder-text {
			width: 30.25vw;
		}
	
		.error-border input,
		.error-border .input-placeholder-text {
			width: 30.25vw;
		}
	}

	@media (max-width: 1100px) {
		padding: 1.875rem 9vw 8.75rem;

		.section-text1 {
			width: 64.25vw;
		}
		
		.section-text2 {
			width: 38vw;
		}
		
		.default-border input,
		.default-border .input-placeholder-text {
			width: 34.25vw;
			height: 45px;
		}
		
		.error-border input,
		.error-border .input-placeholder-text {
			width: 34.25vw;
			height: 45px;
		}
		
				.form-button .button {
					width: 24.25vw;
					height: 45px;
				}
	}

	@media (max-width: 1024px) {
		.section-title {
			font-size: 70px;
		}
	}

	@media (max-width: 992px) {
		.section-title {
			font-size: 60px;
			margin-bottom: 45px;
		}

		.section-text1 {
			width: 62.25vw;
			font-size: 18px;
			margin-bottom: 30px;
		}
		
		.section-text2 {
			width: 36vw;
			font-size: 16px;
			margin-bottom: 20px;	
		}

		.form-label {
			font-size: 16px;
		}

		input,
		.input-placeholder-text {
			margin-bottom: 25px;
		} 
		
		.default-border input,
		.default-border .input-placeholder-text {
			width: 32.25vw;
			font-size: 14px;
			padding-left: 15px;
		}
		
		.error-border input,
		.error-border .input-placeholder-text {
			width: 32.25vw;
			font-size: 14px;
			padding-left: 15px;
		}
		
		.form-button .button {
			width: 22.25vw;
			font-size: 20px;
			margin-top: 15px;
		}
	}

	@media (max-width: 768px) {
		.section-title {
			font-size: 55px;
		}

		.section-text1 {
			width: 66.25vw;
			font-size: 16px;
			margin-bottom: 25px;
		}
		
		.section-text2 {
			width: 40vw;
			font-size: 14px;
			margin-bottom: 15px;	
		}
		
		.form-label {
			font-size: 14px;
			margin-bottom: 5px;	
		}

		input,
		.input-placeholder-text {
			margin-bottom: 25px;
		} 
		
		.default-border input,
		.default-border .input-placeholder-text {
			width: 36.25vw;
			height: 40px;
			margin-bottom: 20px;
		}
		
		.error-border input,
		.error-border .input-placeholder-text {
			width: 36.25vw;
			height: 40px;
			margin-bottom: 20px;
		}
		
		.form-button .button {
			width: 26.25vw;
			height: 40px;
			font-size: 18px;
			margin-top: 10px;
		}
	}

	@media (max-width: 650px) {
		.section-title {
			font-size: 45px;
			margin-bottom: 40px;
		}

		.section-text1 {
			width: 70.25vw;
			font-size: 15px;
		}
		
		.section-text2 {
			width: 44vw;
			font-size: 13px;
		}
		
		.form-label {
			font-size: 13px;
		}
		
		.default-border input,
		.default-border .input-placeholder-text {
			width: 40.25vw;
			height: 35px;
			font-size: 12px;
		}
		
		.error-border input,
		.error-border .input-placeholder-text {
			width: 40.25vw;
			height: 35px;
			font-size: 12px;
		}
		
		.form-button .button {
			width: 30.25vw;
			height: 40px;
		}
	}
	
	@media (max-width: 610px) {
		.section-title {
			font-size: 40px;
			margin-bottom: 35px;
		}

		.section-text1 {
			font-size: 14px;
			margin-bottom: 20px;
		}
		
		.section-text2 {
			font-size: 12px;
		}
		
		.form-label {
			font-size: 12px;
		}
		
		.default-border input,
		.default-border .input-placeholder-text {
			height: 30px;
			font-size: 11px;
			margin-bottom: 15px;
		}
		
		.error-border input,
		.error-border .input-placeholder-text {
			height: 30px;
			font-size: 11px;
			margin-bottom: 15px;
		}
		
		.form-button .button {
			width: 30.25vw;
			height: 35px;
			font-size: 17px;
		}
	}
	
	@media (max-width: 550px) {
		.section-title {
			font-size: 35px;
			margin-bottom: 30px;
		}

		.section-text1 {
			width: 70.25vw;
			font-size: 11px;
		}
		
		.section-text2 {
			width: 46vw;
			font-size: 10px;
			margin-bottom: 10px;
		}
		
		.form-label {
			font-size: 10px;
		}
		
		.default-border input,
		.default-border .input-placeholder-text {
			width: 42.25vw;
			font-size: 9px;
		}
		
		.error-border input,
		.error-border .input-placeholder-text {
			width: 42.25vw;
			font-size: 9px;
		}
		
		.form-button .button {
			width: 32.25vw;
			font-size: 16px;
		}
	}
	
	@media (max-width: 480px) {
		padding: 0 0 6.875rem;
		background-color: var(--clr-primary-6);

		.section-title {
			font-size: 28px;
			line-height: 3.125rem;
			background-color: var(--clr-white);
			padding: 1.25rem 5.5556vw;
			margin: 0;
		}

		form {
			width: 20rem;
			background: var(--clr-white);
			margin: 1.25rem auto;
			padding: 1.25rem;
		}

		.section-text1,
		.section-text2 {
			line-height: 30px;
			margin-bottom: 20px;
		}
		
		.form-label {
			margin-bottom: 10px;
		}

		.section-text1,
		.section-text2, 
		.form-label {
			font-size: 16px;
		}

		.section-text1,
		.section-text2, 
		.default-border input,
		.default-border .input-placeholder-text,
		.error-border input,
		.error-border .input-placeholder-text {
			width: 100%;
		}

		.default-border input,
		.default-border .input-placeholder-text,
		.error-border input,
		.error-border .input-placeholder-text {
			height: 50px;
			font-size: 14px;
			margin-bottom: 20px;
			padding-left: 20px;
		}

		.form-button {
			text-align: center;
		}

		.form-button .button {
			width: 200px;
			height: 50px;
			font-size: 22px;
			margin: 10px 0 20px;
		}
	}
`

export default ResetPassword;