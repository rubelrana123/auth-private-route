import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/userContext';

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
   e.preventDefault();
   const form = e.target;
   const email = form.email.value;
   const password = form.password.value;
   console.log(email, password);
   signIn(email,password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
        console.log(user);
      navigate('/');

				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
        console.log(errorMessage);
			});
  }

  const handleGoogleSignIn = () =>{
    googleSignIn().then(result => {
      const user = result.user;
      console.log(user);
      navigate('/');
    }).catch(error => console.error(error))
  }
  return (
		<div>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content flex-col '>
					<div className='text-center lg:text-left'>
						<h1 className='text-5xl font-bold'>Login now!</h1>
					</div>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form onSubmit={handleSubmit} className='border card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='text'
									name='email'
									placeholder='email'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									type='password'
									name='password'
									placeholder='password'
									className='input input-bordered'
								/>
								<label className='label'>
									<span className='label-text-alt link link-hover'>
										Forgot password?
									</span>
								</label>
								<label className='label'>
									<span className='label-text-alt link link-hover'>
										<span>if your hav'nt account</span>
										<Link to='/register' className='btn btn-link link-hover'>
											Register
										</Link>
									</span>
								</label>
							</div>
							<div className='form-control mt-6'>
								<button className='btn btn-primary'>Login</button>
							</div>
							<button onClick={handleGoogleSignIn} className='btn btn-primary'>
								google
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;