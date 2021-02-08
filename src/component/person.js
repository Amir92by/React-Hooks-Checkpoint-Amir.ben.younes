import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
import photoCV from '../assets/rio.jpg'


class Person extends Component {

state={
    intervall:null,
    timer:0
}
   persons =[
        {
                 fullName:'Amir Ben Younes',
                  bio: "Hello Every body! I'am a student at 'Go my code' since 21 December 2020 and I ...",
                  imgSrc:photoCV,
                  profession: '"Designer"'
        }
      ]
    

 componentDidMount(){
      this.setState({
        intervall: setInterval(() => {
          this.setState({timer:this.state.timer+1})}, 1000)})}


    render() {
        return (
           <div className ='card'>
               {this.persons.map((person,i)=>(
 <Card style={{ width: '18rem', color:'black' }}>
                    <Card.Img className='Img' variant="top" src={person.imgSrc} />
                    <Card.Body>
                    <Card.Title className='title'>{person.fullName} </Card.Title>
                    <Card.Title className='proffesion'>{person.profession} </Card.Title>
                    <Card.Text className='bio'>{person.bio} </Card.Text>
                    <Button className='myBtn' variant="primary">more info</Button>
                    </Card.Body>
                    <h6>Timer : {this.state.timer} </h6>
                </Card>

               ))}
              
           

            </div>
        )
    }
}

export default  Person

















// import React, { Component } from 'react'
// import photoCV from '../assets/rio.jpg'



// export class Person extends Component {
// persons=[
//     {
//        fullName:'Amir ben younes',
//         bio: 'Student at "Go my code"',
//         imgSrc:photoCV,
//         profession: 'Designer'
//     }
// ]
    
  
//     render() {
//         return (
//             <div>
//               <ul>
//                   {this.persons.map((person,i) => (
//                       <li key={i}>{person}</li>
//                   ))}
//               </ul>
//             </div>
//         )
//     }
// }

// export default Person
