import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ColorsList() {
  const colors = useSelector((state) => state.colors);

  return (
    <div>
      <h1>Welcome to the color factory.</h1>
      <Link to="/colors/new">Add a new color</Link>
     <ul>
        {colors.map((color) => (
          <li key={color.name}>
            <Link to={`/colors/${color.name}`} style={{ color: color.value }}>
              {color.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorsList;