import React, { useRef, useState } from 'react';

const CodeInput = () => {
  const inputsRef = useRef([]);
  const [completedFields, setCompletedFields] = useState([true, false, false, false, false, false]);

  const handleInputChange = (index, value) => {
    if (value.length === 1) {
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
        const newCompletedFields = [...completedFields];
        newCompletedFields[index + 1] = true;
        setCompletedFields(newCompletedFields);
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && !inputsRef.current[index].value) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="code-container">
      {[...Array(6)].map((_, i) => (
        <input
          key={i}
          type="text"
          className="code-input"
          maxLength="1"
          ref={(el) => (inputsRef.current[i] = el)}
          onChange={(e) => handleInputChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
        />
      ))}
    </div>
  );
};

export default CodeInput;
