
//import PanContainer from './PanContainer';

const SwipeContainer = ({
  children,
  close,
  setIsDragging,
  disableSwipe,
}) => {
  return disableSwipe ? (
    <>{children}</>
  ) : (
    // <PanContainer setIsDragging={setIsDragging} close={close}>
    //   {children}
    // </PanContainer>
    <>{children}</>
  );
};

export default SwipeContainer;


// import React from 'react';
// import PanContainer from './PanContainer';


//   children: any;
//   close: () => void;
//   setIsDragging: any;
//   disableSwipe?: boolean;
