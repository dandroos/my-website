import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="p-2">
      <Link to="/" className="navbar-brand">
        <h1 style={{
      width: '70%'
    }}>
          David Andrews{" "}
          <span
            className="text-muted"
            style={{
              fontSize: "1.75rem",
              display: "block"
            }}
          >
            App Developer
          </span>
        </h1>
      </Link>
    </div>
  );
}
