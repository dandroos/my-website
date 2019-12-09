import React from "react";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "react-spring/renderprops";
import styled from "styled-components";

export default function LoadScreen(props) {
	const LoadScreen = styled.div`
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: white;
		z-index: 5000;
	`;
	// if (location.pathname === "/") {
		return (
			<Transition
				native
				items={!props.isReady}
				from={{ opacity: 1 }}
				enter={{ opacity: 1 }}
				leave={{ position: "absolute", zIndex: 5000, opacity: 0 }}
			>
				{show =>
					show &&
					(props => (
						<animated.div style={props}>
							<LoadScreen />
						</animated.div>
					))
				}
			</Transition>
		);
	// }else{
	// 	return null
	// }
}
