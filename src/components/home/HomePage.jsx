import React from 'react';
import { Button } from 'reactstrap';

import Sidebar from '../shared/Sidebar'
export default function HomePage() {
  const showAlert = () => {
    alert('Hello~');
  };
  return (
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <p>
            This is the homepage~
          </p>
          <p>
            Here's a button:
          </p>
          <Button onClick={showAlert}>Click Me</Button>
        </div>
        <Sidebar />
      </div>
  );
}
