import React from 'react';
import { useHistory } from 'react-router';
import pr from '../../assets/predict.svg';

function Predict() {
	const history = useHistory();

	const clickHandler = () => {
		history.push('/predict');
	};

	return (
		<div>
			<div
				style={{ background: 'rgb(16, 185, 129, 0.1)' }}
				className="card mb-3 predict m-5 p-3"
			>
				<div className="row">
					<div className="col-12 col-md-5 col-sm-3 col-xs-2">
						<img className="card-img" src={pr} alt="cap" />
					</div>
					<div className="col col-md-7 col-sm col-xs">
						<div className="card-body m-auto">
							<h3 className="card-title">
								<b>
									Predict the crops which best suits you with
									WeGrow
								</b>
							</h3>
							<p className="card-text">
								Wanna know what crops are suitable for the
								weather around you? Want to have an edge over
								other farmers and get to produce the crops which
								are suitable for your environment?
							</p>
							<h5>
								<strong>Well, we got your back!!!!!</strong>
							</h5>
							<p>
								Click{' '}
								<a
									href="/#"
									style={{
										cursor: 'pointer',
										color: '#0645AD',
										textDecoration: 'underline',
									}}
									onClick={clickHandler}
								>
									here
								</a>{' '}
								to know more
							</p>
							<p className="card-text">
								<small className="text-muted">
									Over 5M+ Farmers already got benefited from
									this service
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Predict;
