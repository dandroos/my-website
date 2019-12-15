import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function NavButton(props) {
    
    let placeToggle;

    const [compState, setCompState] = useState({
      scroll_position: window.scrollY,
      top: 0,
      height: '3.5rem',
      width: '3.5rem'
    })

    useEffect(()=>{
      window.addEventListener('scroll', (e)=>{
        setCompState({ ...compState, scroll_position: window.scrollY })
       
      })
    }, [])

    useEffect(()=>{
      if(compState.scroll_position > 0){
        setCompState({
          ...compState,
          top: 15
        })
      }else{
        setCompState({
          ...compState,
          top: 38
        })
      }
    }, [compState.scroll_position])
  return (
    <div
      onClick={props.click}
      className="toggler"
      style={{
        top: compState.top,
        height: compState.height,
        width: compState.width
      }}
    >
      <div>
        {props.isOpen ? (<FontAwesomeIcon icon={faBars} />) : (<FontAwesomeIcon icon={faTimes} />)
        }
      </div>
    </div>
  );
}
