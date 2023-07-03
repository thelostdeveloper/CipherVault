import React from 'react';

function OutputBox({ text }) {
  return (
    <div style={{ 
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '8px',
      fontSize: '16px',
      width: '100%'
    }}>
      {text}
    </div>
  );
}

export default OutputBox;
