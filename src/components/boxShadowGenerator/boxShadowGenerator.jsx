import React, { useRef, useState } from 'react';
import styles from './boxShadowGenerator.module.css';


const BoxShadowGenerator = () => {
  const colorShadowRef = useRef('#000000');
  const colorBoxRef = useRef('#ccc');
  const BlurRef = useRef(0);
  const RadiusRef = useRef(0);
  const HorizontalRef = useRef(0);
  const VerticalRef = useRef(0);
  const OpacityRef = useRef(1);
  const boxRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleColorShadowChange = (e) => {
    colorShadowRef.current = e.target.value;
    updateBoxShadow();
  };

  const handleColorBoxChange = (e) => {
    colorBoxRef.current = e.target.value;
    updateBoxShadow();
  };

  const handleBlurChange = (e) => {
    BlurRef.current = e.target.value;
    updateBoxShadow();
  };

  const handleRadiusChange = (e) => {
    RadiusRef.current = e.target.value;
    updateBoxShadow();
  };

  const handleHorizontalChange = (e) => {
    HorizontalRef.current = e.target.value;
    updateBoxShadow();
  };

  const handleVerticalChange = (e) => {
    VerticalRef.current = e.target.value;
    updateBoxShadow();
  };

  const handleOpacityChange = (e) => {
    OpacityRef.current = e.target.value;
    updateBoxShadow();
  };

  const updateBoxShadow = () => {
    const boxShadow = `${HorizontalRef.current}px ${VerticalRef.current}px ${BlurRef.current}px ${RadiusRef.current}px rgba(${parseInt(colorShadowRef.current.slice(1, 3), 16)}, ${parseInt(colorShadowRef.current.slice(3, 5), 16)}, ${parseInt(colorShadowRef.current.slice(5, 7), 16)}, ${OpacityRef.current})`;
    boxRef.current.style.boxShadow = boxShadow;
  };

  const copyBoxShadow = () => {
    const boxShadow = `${HorizontalRef.current}px ${VerticalRef.current}px ${BlurRef.current}px ${RadiusRef.current}px rgba(${parseInt(colorShadowRef.current.slice(1, 3), 16)}, ${parseInt(colorShadowRef.current.slice(3, 5), 16)}, ${parseInt(colorShadowRef.current.slice(5, 7), 16)}, ${OpacityRef.current})`;
    navigator.clipboard.writeText(boxShadow);
   setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  
  return (
    <div className={styles.container} >
      <div className={styles.preview}>
        <div ref={boxRef} className={styles.box} style={{ backgroundColor: colorBoxRef.current }}></div>
      </div>

      <div className={styles.settings}>

        <div class={styles.inputWrapper}>
          <label>Vertical Shadow</label>
          <input type="range" min="-100" max="100" value={VerticalRef.current} onChange={handleVerticalChange} />
        </div>

        <div class={styles.inputWrapper}>
          <label >Horizontal Shadow</label>
          <input type="range" min="-100" max="100" value={HorizontalRef.current} onChange={handleHorizontalChange} />
        </div>

        <div class={styles.inputWrapper}>
          <label>Radius</label>
          <input type="range" min="0" max="50" value={RadiusRef.current} onChange={handleRadiusChange} />
        </div>

        <div class={styles.inputWrapper}>
          <label>Blur</label>
          <input type="range" min="0" max="100" value={BlurRef.current} onChange={handleBlurChange} />
        </div>

        <div class={styles.colorWrapper}>
          <input type="color" value={colorShadowRef.current} onChange={handleColorShadowChange} />
          <label>Color Shadow</label>
        </div>

        <div class={styles.inputWrapper}>
          <label>Opacity</label>
          <input type="range" min="0" max="1" step="0.1" value={OpacityRef.current} onChange={handleOpacityChange} />
        </div>

        <div class={styles.colorWrapper}>
          <input type="color" min="0" max="100" value={colorBoxRef.current} onChange={handleColorBoxChange} />
          <label>Color Box</label>
        </div>

      </div>

      <button className={styles.button} onClick={copyBoxShadow}>
      {copied ? '✔️' : 'Copy Box Shadow'}
      </button>
    </div>
  );
};

export default BoxShadowGenerator;