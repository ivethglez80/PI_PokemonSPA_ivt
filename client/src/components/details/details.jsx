// import React, { useEffect } from "react";
// import {Link} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";

// import styles from "./cards.module.css";
// import imgNotFound from "../../img/imgNotFound.png"

// const Detail = (props)=>{
//     const dispatch = useDispatch();
//     const myPoke = useSelector((state)=>state.pokeDetail);
//     useEffect(()=>{
//         dispatch(getDetailPromise(props.match.params.id))
//         return ()=>{
//             dispatch(cleanDetail(dispatch), cleanPokemons(dispatch))
//         }
//     },[dispatch,props.match.params.id]);

// return(
//     <div>
//         {
//             myPoke.length>0?
//             <div>
//                 <h3>{myPoke.charAt(0).toUpperCase()+myPoke.slice(1)}</h3>
//                 <p><div id={myPoke[0].img ? myPoke[0].img : imgNotFound} alt="img not found" heigth="250px" width="250px"></div></p>
//                 <h4>{myPoke[0].types?.map((p,k)=>{
//                     return (
//                         <div key={k}>
//                             <img src={e.img} alt="X" />
//                             <p>{e.name.charAt(0).toUpperCase()+e.name.slice(1)}</p>
//                         </div>
//                     )
//                 })}

//                 </h4>
//             </div> :
//             null
//         }
//     </div>
// )
// }

// export default Detail;


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import styles from "./cards.module.css";
// import imgNotFound from "../../img/imgNotFound.png";

// const Detail = (props) => {
//   const dispatch = useDispatch();
//   const myPoke = useSelector((state) => state.pokeDetail);
//   useEffect(() => {
//     dispatch(getDetailPromise(props.match.params.id));
//     return () => {
//       dispatch(cleanDetail(dispatch), cleanPokemons(dispatch));
//     };
//   }, [dispatch, props.match.params.id]);

//   return (
//     <div>
//       {myPoke.length > 0 ? (
//         <div>
//           <h3>{myPoke[0].charAt(0).toUpperCase() + myPoke[0].slice(1)}</h3>
//           <div id={myPoke[0].img ? myPoke[0].img : imgNotFound} alt="img not found" height="250px" width="250px"></div>
//           <h4>
//             {myPoke[0].types?.map((p, k) => {
//               return (
//                 <div key={k}>
//                   <img src={p.img} alt="X" />
//                   <p>{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</p>
//                 </div>
//               );
//             })}
//           </h4>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default Detail;













































// export default function cards({pokes, onClose, isFav}){
//     return(
//         <div classmyPoke="style.cardscontainer">
//             {pokes.map((p)=>(
//                 <card
//                     key={p.id}
//                     p={p}
//                     onClose={onClose}
//                     isFav={isFav}
//                 />
//             ))}
//         </div>
//     )
// }