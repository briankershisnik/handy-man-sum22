import { Container, Row, Col } from 'react-bootstrap';


const TeamHeader = () => {


  return(

    <>
			<br/>
			<Container fluid="lg">
				<Row>
					<Col className="display-1 text-center font-weight-bold" lg="auto"> 
						<h1>Meet The Team</h1> 
					</Col>
					<Col className="display-6" sm="auto">
						<hr className="my-4 bg-black" />
						<p className="font-weight-dark mx-5" >
						This can be the site slogan, or a brief description of the site. This can also be a call to action used to grab the attention of the visitors and get them to click on the link below.
						</p>
					</Col>
				</Row>
			</Container>
			<br/>
    </>
  )

}

export default TeamHeader;