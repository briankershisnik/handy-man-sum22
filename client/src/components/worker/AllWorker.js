import { Container, Row, Col, Card } from "react-bootstrap";


import Worker from './Worker';

const AllWorker = ({ workers, updateWorker, deleteWorker }) => (
  <>
    <br/>
    <h1>All Workers</h1>
    <br/>
   
    <Container>
    <Row>
      { workers.map( w => 
          <Col>
            <Card style={{ width: '12rem' }}>
              <Card.Body>
                <Worker 
                  key={w.id}
          
                  {...w} 
                  updateWorker={updateWorker} 
                  deleteWorker={deleteWorker} 
                />
              </Card.Body>
            </Card>
          </Col>  
        )}
    </Row>
    </Container>

    <br/>

  </>
)

export default AllWorker;