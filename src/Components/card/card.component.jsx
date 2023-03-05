import { Component } from "react";
import "./card.style.css";

class Card extends Component {
  render() {
    const { name, id, email } = this.props.monsters;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monsters ${name}`}
          src={`https://robohash.org/${id}?set=set2`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
