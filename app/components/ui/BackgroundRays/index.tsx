import { memo } from 'react';
import styles from './styles.module.scss';

// Memoize the BackgroundRays component to prevent unnecessary re-renders.
// Since this is a purely decorative component with no props, it doesn't need to re-render
// every time its parent component does. This saves rendering cycles.
const BackgroundRays = memo(() => {
  return (
    <div className={`${styles.rayContainer} `}>
      <div className={`${styles.lightRay} ${styles.ray1}`}></div>
      <div className={`${styles.lightRay} ${styles.ray2}`}></div>
      <div className={`${styles.lightRay} ${styles.ray3}`}></div>
      <div className={`${styles.lightRay} ${styles.ray4}`}></div>
      <div className={`${styles.lightRay} ${styles.ray5}`}></div>
      <div className={`${styles.lightRay} ${styles.ray6}`}></div>
      <div className={`${styles.lightRay} ${styles.ray7}`}></div>
      <div className={`${styles.lightRay} ${styles.ray8}`}></div>
    </div>
  );
});

BackgroundRays.displayName = 'BackgroundRays';

export default BackgroundRays;
