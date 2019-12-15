import React from "react";
import { NavItem, NavLink } from "reactstrap"

export default function PortfolioNavLink(props) {
	return (
			<NavItem>
				<NavLink
					href={props.link}
					className="btn btn-info text-center d-flex justify-content-center align-items-center flex-column"
				>
					<img
						src={props.icon}
						style={{
							display: "block",
							width: "60%",
							maxWidth: 175
						}}
					/>
					{props.title}
				</NavLink>
			</NavItem>
	);
}
