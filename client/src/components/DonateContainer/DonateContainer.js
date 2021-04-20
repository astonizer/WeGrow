import React from 'react';
import { useHistory } from 'react-router-dom';
import  donate from '../../assets/donate.svg';

import './DonateContainer.css';

function DonateContainer() {
	const history = useHistory();

	const handleClick = () => {
		history.push('/donate');
	}

	return (
		<div className="card mb-3 donate" onClick={handleClick}>
			<div className="row">
				<div className="col-12 col-md-4 col-sm-3 col-xs-2">
					<img className="card-img" src={donate} alt="Card image cap" />
				</div>
				<div className="col col-md col-sm col-xs"> 
					<div className="card-body m-auto">
						<h4 className="card-title">Donate</h4>
						<p className="card-text">Making a donation is the ultimate sign of solidarity. Actions speak louder than words.</p>
						<p className="card-text"><small className="text-muted">Over 1M+ Farmers already got benefited by this Donations</small></p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DonateContainer;
