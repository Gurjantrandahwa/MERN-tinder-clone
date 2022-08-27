import React, {useEffect, useState} from "react";
import "./tinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "axios";
function TinderCards() {
    const [people, setPeople] = useState([])
    const swiped = (direction, nameToDelete) => {
        console.log("removing:", nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }

    useEffect(() => {
        axios.get("http://localhost:3001/tinder/cards").then(res=>{
           console.log(res.data)
             setPeople(res.data)
        } )
    }, [])

    return <div className={"tinder-cards"}>
        <div className={"tinder-cards-container "}>
            {
                people && people.map((person) => {
                    return <TinderCard className={"swipe"}
                                       key={person.name}
                                       preventSwipe={["up", "down"]}
                                       onSwipe={(dir) => swiped(dir, person.name)}
                                       onCardLeftScreen={() => outOfFrame(person.name)} >

                        <div style={{backgroundImage:`url(${person.imageURL})`}}
                             className={"card"}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                })
            }
        </div>
    </div>
}
export default TinderCards