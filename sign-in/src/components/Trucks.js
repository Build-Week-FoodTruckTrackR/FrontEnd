import {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Row} from "reactstrap"

export default function FavoriteTrucks(){
    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get("http://68.183.138.134")
        .then(res =>{
            setData(res);
            console.log(res);
        })
        .catch(error =>{
            console.log("data not found", error);
        })
    }, [])

    return(
        <Container>
            <Row>
                {}
            </Row>
        </Container>
    )
}