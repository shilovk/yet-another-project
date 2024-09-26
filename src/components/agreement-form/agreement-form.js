import React, { useEffect, useRef } from 'react';

const UIButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} onClick={props.onClick}>
      {props.content}
    </button>
  );
});

export default function AgreementForm() {
  const yesButtonRef = useRef(null);

  useEffect(() => {
    if (yesButtonRef.current) {
      yesButtonRef.current.focus();
    }
  }, []);

  function handleNo() {
    console.log('Нет');
  }

  function handleYes() {
    console.log('Да');
  }

  return (
    <div>
      <p>Добавить существованию немного смысла.</p>
      <UIButton content="No" onClick={handleNo} />
      <UIButton content="Yes" onClick={handleYes} ref={yesButtonRef} />
    </div>
  );
}
