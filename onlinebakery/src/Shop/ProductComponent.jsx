import { useEffect,useState } from 'react';
import {Row,Col} from 'react-bootstrap';
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
  },[data])
 

  
   
   
    return (
      <>
      <Row d-flex>
        <Col md="4">
        {data && data.length>0 && data.map((eachprod)=>{
        return(
          <CardComponent cardData={eachprod}/>
        )
      })}
        </Col>
      </Row>
      
      </>
    );
  }
  