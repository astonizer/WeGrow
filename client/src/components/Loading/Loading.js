import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

function Loading() {
  return (
    <>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <Spinner
          as="span"
          animation="border"
          role="status"
          aria-hidden="true"
        />
        Loading...        
      </Button>
    </>
  );  
}

export default Loading;
