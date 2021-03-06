import React,{useEffect} from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

function Game({ name, released, image, id }) {
  //load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(45775));
  };   

 
  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3> {name} </h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
}
//<img src={image} alt={name}/>
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
