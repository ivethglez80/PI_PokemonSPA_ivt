import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetailPromise, cleanDetail, cleanPokemons } from "../../reducer/actions";
import styles from "./detail.component.css";
import imgNotFound from "../../img/imgNotFound.png";

const Detail = (props) => {
  const dispatch = useDispatch();
  const myPoke = useSelector((state) => state.pokeDetail);

  useEffect(() => {
    dispatch(cleanDetail());
    dispatch(getDetailPromise(props.match.params.id));
    return () => {
      dispatch(cleanDetail());
      dispatch(cleanPokemons());
    };
  }, [dispatch, props.match.params.id]);

  return (
    <div>
      {myPoke.length > 0 ? (
          <div>
          <h3>{myPoke[0].name.charAt(0).toUpperCase() + myPoke[0].name.slice(1)}</h3>
          <img src={myPoke[0].img ? myPoke[0].img : imgNotFound} alt="img not found" height="250px" width="250px"/>
          <h4>
            {myPoke[0].types?.map((p, k) => {
              return (
                <div key={k}>
                  {/* <img src={p.img} alt="X" /> */}
                  <p>{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</p>
                </div>
              );
            })}
          </h4>
          <div>
            <h6> HP: {myPoke[0].hp}</h6>
            <h6> Attack: {myPoke[0].attack}</h6>
            <h6> Defense: {myPoke[0].defense}</h6>
            <h6> Speed: {myPoke[0].speed}</h6>
            <h6> Height: {myPoke[0].height}</h6>
            <h6> Weight: {myPoke[0].weight}</h6>
          </div>
        </div>
        
      ) : 
            <p>Loading...</p>
      }
      <div>
        <Link to="/home">
            <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
