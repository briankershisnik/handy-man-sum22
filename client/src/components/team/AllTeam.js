import { Container, Row, Col, Card } from "react-bootstrap";
import Team from './Team';

const AllTeam = ({ workers }) => (
  <>
  


  <Container>
  <Row>
      { workers.map( w => 
          <Col>
            <Card style={{ width: '12rem' }}>
              <Card.Body>
                <Team 
                  key={w.id}
          
                  {...w} 
                 
                />
              </Card.Body>
            </Card>
          </Col>  
        )}
    </Row>
    </Container>


  </>
)

export default AllTeam;