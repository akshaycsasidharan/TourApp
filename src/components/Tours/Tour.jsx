import React, { useState } from "react";

function Tour({ id, image, info, name, price, removeTour }) {
  const [readmore, setReadmore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
          <p>
            {readmore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadmore(!readmore)}>
              {readmore ? "...show less" : "   read more"}
            </button> 
          </p>

          <button className="delete-btn" onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </div>
      </footer>
    </article>
  );
}

export default Tour;
