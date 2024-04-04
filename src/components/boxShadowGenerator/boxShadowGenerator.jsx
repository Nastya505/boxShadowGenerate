import React, { useRef, useState } from 'react';
import styles from './boxShadowGenerator.module.css';


const BoxShadowGenerator = () => {
  const colorShadowRef = useRef();
  const BlurRef = useRef();
  const RadiusRef = useRef();
  const HorizontalRef = useRef();
  const VerticalRef = useRef();
  const OpacityRef = useRef();
  const boxRef = useRef();
  const [copied, setCopied] = useState(false);
  const [boxShadow, setBoxShadow] = useState('');

const handleChange = () => {
  updateBoxShadow();
}

  function updateBoxShadow() {
    const newBoxShadow = `${HorizontalRef.current.value}px ${VerticalRef.current.value}px ${BlurRef.current.value}px ${RadiusRef.current.value}px rgba(${parseInt(colorShadowRef.current.value.slice(1, 3), 16)}, ${parseInt(colorShadowRef.current.value.slice(3, 5), 16)}, ${parseInt(colorShadowRef.current.value.slice(5, 7), 16)}, ${OpacityRef.current.value})`;
    setBoxShadow(newBoxShadow);
    boxRef.current.style.boxShadow = boxShadow;
  }

  const copyBoxShadow = () => {
    navigator.clipboard.writeText(boxShadow);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  
  return (
    <div className={styles.container} >
      <div className={styles.preview}>
        <div ref={boxRef} className={styles.box}></div>
      </div>

      <div className={styles.settings}>
        <div className={styles.inputWrapper}>
          <label>Vertical Shadow</label>
          <input type="range" min="-100" max="100" defaultValue="0" ref={VerticalRef}  onChange={handleChange} />
        </div>

        <div className={styles.inputWrapper}>
          <label >Horizontal Shadow</label>
          <input type="range" min="-100" max="100" defaultValue="0" ref={HorizontalRef} onChange={handleChange} />
        </div>

        <div className={styles.inputWrapper}>
          <label>Radius</label>
          <input type="range" min="0" max="50" defaultValue="0" ref={RadiusRef} onChange={handleChange} />
        </div>

        <div className={styles.inputWrapper}>
          <label>Blur</label>
          <input type="range" min="0" max="100" defaultValue="0" ref={BlurRef} onChange={handleChange}  />
        </div>

        <div className={styles.colorWrapper}>
          <input type="color" ref={colorShadowRef} defaultValue="#000000" onChange={handleChange}  />
          <label>Color Shadow</label>
        </div>

        <div className={styles.inputWrapper}>
          <label>Opacity</label>
          <input type="range" min="0" max="1" step="0.1" defaultValue="1" ref={OpacityRef} onChange={handleChange}  />
        </div>
      </div>

      <button className={styles.button} onClick={copyBoxShadow}>
      {copied ? '✔️' : 'Copy Box Shadow'}
      </button>
    </div>
  );
};

export default BoxShadowGenerator;