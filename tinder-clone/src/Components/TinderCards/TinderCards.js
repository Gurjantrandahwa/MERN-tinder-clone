import React, {useState} from "react";
import "./tinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN" +
                "8fHRpbmRlciUyMHByb2ZpbGUlMjBlbG9uJTIwbXVza3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        },
        {
            name: "Jeff Bezos",
            url: "https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN" +
                "8fHRpbmRlciUyMHByb2ZpbGUlMjBlbG9uJTIwbXVza3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        },
        {
            name: "Gur",
            url: "https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN" +
                "8fHRpbmRlciUyMHByb2ZpbGUlMjBlbG9uJTIwbXVza3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        },


    ])
    const swiped = (direction, nameToDelete) => {
        console.log("removing:", nameToDelete)

    }
    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }
    return <div className={"tinder-cards"}>
        <div className={"tinder-cards-container"}>
            {
                people.map((person) => {
                    return <TinderCard className={"swipe"}
                                       key={person.name}
                                       preventSwipe={["up", "down"]}
                                       onSwipe={(dir) => swiped(dir, person.name)}
                                       onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div className={"card"}
                             style={{backgroundImage: ""}}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                })
            }
        </div>


    </div>

}

export default TinderCards