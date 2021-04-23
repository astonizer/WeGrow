import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from '../../assets/logo.png';

function Footer() {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	return (
		<footer className="footer" id="footer">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-3 col-md-4 links">
						<ul className="list-unstyled links">
							{isAuthenticated ? (
								<>
									<li>
										<Link className="footer-link" to="/">
											Home
										</Link>
									</li>
									<li>
										<Link className="footer-link" to="/buy">
											Buy
										</Link>
									</li>
									<li>
										<Link
											className="footer-link"
											to="/sell"
										>
											Sell
										</Link>
									</li>
									<li>
										<Link
											className="footer-link"
											to="/profile"
										>
											Profile
										</Link>
									</li>
								</>
							) : (
								<>
									<li>
										<Link
											className="footer-link"
											to="/auth/register"
										>
											Register
										</Link>
									</li>
									<li>
										<Link
											className="footer-link"
											to="/auth/login"
										>
											Login
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
					<div className="col-lg-5 col-md-8 align-self-center">
						<h3>We Grow</h3>
						<Link to="/">
							<img className="weGrow" src={Logo} alt="logo" />
						</Link>
					</div>
					<div className="col-lg-4">
						<div className="align-self-center">
							<a
								className="btn btn-social-icon btn-linkedin"
								href="https://in.linkedin.com/"
							>
								<i className="fab fa-linkedin"></i>{' '}
							</a>
							<a
								className="btn btn-social-icon btn-twitter"
								href="https://twitter.com/"
							>
								<i className="fab fa-twitter"></i>{' '}
							</a>
							<a
								className="btn btn-social-icon btn-instagram"
								href="https://www.instagram.com/"
							>
								<i className="fab fa-instagram"></i>{' '}
							</a>
							<a
								className="btn btn-social-icon btn-facebook"
								href="https://www.facebook.com/"
							>
								<i className="fab fa-facebook"></i>{' '}
							</a>
							<a
								className="btn btn-social-icon btn-google"
								href="https://google.com/"
							>
								<i className="fab fa-google-plus"></i>
							</a>
							<a
								className="btn btn-social-icon btn-google"
								href="https://youtube.com/"
							>
								<i className="fab fa-youtube"></i>{' '}
							</a>
						</div>
						<div className="copyright">
							<p>Copyright &copy; 2021 WeGrow</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
