import { useEffect,useState } from 'react';
import {Row,Col,Container,Form,FormControl,Navbar } from 'react-bootstrap';
import { CardComponent } from './CardComponent';





export default  function Shop(props) {
  const [data,setdata]=useState([]);
 
 
  useEffect(()=>{
    const requestOptions = {
      method: 'GET'
    };
    
    fetch("http://localhost:9090/products", requestOptions)
.then(response => response.json())
.then(result => setdata(result))
.catch(error => console.log('error', error));
  },[])
    
    return (
      <>
      <Container style={{margin:'5%'}}>
      <SearchBar> </SearchBar>

        <Row d-block>
          
          {data && data.length>0 && data.map((eachprod)=>{
        return(
          <Col md="4">
          <CardComponent cardData={eachprod}/>
          </Col>
        )
      })}
          
        </Row>
      </Container>     
      </>
    );
  }

  function SearchBar(){
    return(
     <>
       <Container fluid>
     <Navbar bg="light" expand="lg" me="2"  >
    <Form className="d-flex" style={{width:'100%',minHeight:'30px',borderRadius:'25px'}}>
          <FormControl style={{textAlign:'center'}}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          </Form>
    </Navbar>
    </Container>
     </>
     );
  }
  