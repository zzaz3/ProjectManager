import React from 'react';
import { Button } from 'reactstrap';

import Sidebar from '../shared/Sidebar'
export default function HomePage(props) {
  const { decrementFunction, incrementFunction, testoFunction } = props;
  return (
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <Button onClick={testoFunction}></Button>
          <Button onClick={incrementFunction}>Increment</Button>
          <Button onClick={decrementFunction}>Decrement</Button>
          <p>
            Please log-in to view/manage your projects.
          </p>
        </div>
        <Sidebar />
      </div>
  );
}
