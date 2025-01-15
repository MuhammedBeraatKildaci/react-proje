import React, { useRef, forwardRef } from 'react';

const CustomButton = forwardRef((props, ref) => (
  <button ref={ref} {...props}>
    {props.children}
  </button>
));

function UseRefAndForwardRef() {
  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current.style.backgroundColor = 'blue';
  };

  return (
    <div>
      <CustomButton className="p-4 m-2 rounded-xl" ref={buttonRef}>Click Me</CustomButton>
      <button onClick={handleClick}>Rengi Değiştir</button>
    </div>
  );
}

export default UseRefAndForwardRef;
