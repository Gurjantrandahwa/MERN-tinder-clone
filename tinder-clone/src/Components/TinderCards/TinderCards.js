import React, {useEffect, useState} from "react";
import "./tinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "../../axios";

function TinderCards() {
    const [people, setPeople] = useState([])
    const swiped = (direction, nameToDelete) => {
        console.log("removing:", nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }
    const API_BASE = "http://localhost:3001";
    useEffect(() => {
        cards()
    }, [])
    const cards = () => {
        fetch(API_BASE + "/tinder/cards")
            .then(res => res.json())
            .then(data => setPeople(data))
            .catch(err => console.log("error", err))
    }
    console.log(people)
    return <div className={"tinder-cards"}>
        <div className={"tinder-cards-container card-content"}>
            {
                people.map((person) => {
                    return <TinderCard className={"swipe"}
                                       key={person.name}
                                       preventSwipe={["up", "down"]}
                                       onSwipe={(dir) => swiped(dir, person.name)}
                                       onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div className={"card c"}
                             style={{backgroundImage: `url(${person.imageURL})`}}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                })
            }
        </div>
    </div>

}

export default TinderCards