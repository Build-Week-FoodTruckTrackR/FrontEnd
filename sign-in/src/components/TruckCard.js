import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, CardHeader, CardFooter } from 
'reactstrap';

export default function Trucks({data}){
    return(
        <div className="truck-card">
         <Card>
            <CardHeader>Truck name:{data}</CardHeader>
            <CardBody>
            <CardImg src={data}/>
            <CardTitle>Rating: {data}</CardTitle>
            <Button>Edit truck</Button>
            </CardBody>
            <CardFooter>Address: {data}</CardFooter>
         </Card>
        </div>
    )
}