import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function ColorPage () {
  const { color } = useParams();
  const navigate = useNavigate();
  const colors = useSelector((state) => state.colors);
  const colorEntry = colors.find((c) => c.name === color);

  if (!colorEntry) {
    navigate('/colors');
    return null;
  }

  const goBack = () => navigate(-1);

  const pageStyle = {
    backgroundColor: colorEntry.value,
    color: 'white',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={pageStyle}>
      <h1>This is {colorEntry.name}</h1>
      <button onClick={goBack}>Go back</button>
    </div>
  );
}

export default ColorPage;