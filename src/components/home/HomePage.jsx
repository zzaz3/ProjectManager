import React from 'react';

import Sidebar from '../shared/Sidebar'
export default function HomePage() {
  const showAlert = () => {
    alert('Hello~');
  };
  return (
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <p>
            Please log-in to view/manager your projects.
          </p>
        </div>
      </div>
  );
}
