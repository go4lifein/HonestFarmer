import React from 'react';
import '../styles/loading.css';

const Loading = () => {
  return (
    <div style={{minHeight: 200, width: '100%'}} className="flex center middle p-10">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;