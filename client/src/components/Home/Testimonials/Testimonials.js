import React from 'react';
import { Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import './Testimonials.css';

function Testimonials() {
	return (
		<Container align="center" className="testimonials">
			<h1>Testimonials</h1>
			<br />
			<Jumbotron>
				<Row>
					<Col xs={4}>
						<Image
							classname="testimonial_givers"
							src="https://img.etimg.com/thumb/width-350,height-300,imgsize-120883,resizemode-1,msid-65900120/news/india-unlimited/csr/xsall-and-marginal-farmers-are-to-see-better-days-with-a-free-of-cost-farmer-to-farmer-rental-program-through-this-revolutionary-app-by-tafes-jfarm-services.jpg"
						/>
					</Col>
					<Col xs={8}>
						WeGrow has helped me to grow in a way which was very
						unknown to me at first. In this digital world, there are
						so many people who could get the job done for you. The
						problem is finding the correct people but fortunately
						WeGrow has the solutions to most of our problems in one
						place
					</Col>
				</Row>
			</Jumbotron>
			<Jumbotron>
				<Row>
					<Col xs={8}>
						WeGrow has helped me to grow in a way which was very
						unknown to me at first. In this digital world, there are
						so many people who could get the job done for you. The
						problem is finding the correct people but fortunately
						WeGrow has the solutions to most of our problems in one
						place
					</Col>
					<Col xs={4}>
						<Image
							classname="testimonial_givers"
							src="https://img.etimg.com/thumb/width-350,height-300,imgsize-120883,resizemode-1,msid-65900120/news/india-unlimited/csr/xsall-and-marginal-farmers-are-to-see-better-days-with-a-free-of-cost-farmer-to-farmer-rental-program-through-this-revolutionary-app-by-tafes-jfarm-services.jpg"
						/>
					</Col>
				</Row>
			</Jumbotron>
			<Jumbotron>
				<Row>
					<Col xs={4}>
						<Image
							classname="testimonial_givers"
							src="https://img.etimg.com/thumb/width-350,height-300,imgsize-120883,resizemode-1,msid-65900120/news/india-unlimited/csr/xsall-and-marginal-farmers-are-to-see-better-days-with-a-free-of-cost-farmer-to-farmer-rental-program-through-this-revolutionary-app-by-tafes-jfarm-services.jpg"
						/>
					</Col>
					<Col xs={8}>
						WeGrow has helped me to grow in a way which was very
						unknown to me at first. In this digital world, there are
						so many people who could get the job done for you. The
						problem is finding the correct people but fortunately
						WeGrow has the solutions to most of our problems in one
						place
					</Col>
				</Row>
			</Jumbotron>
		</Container>
	);
}

export default Testimonials;
