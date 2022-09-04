import styles from '../styles/Home.module.css'
import React from "react";
import Particles from 'react-tsparticles'
import { loadSnowPreset } from "tsparticles-preset-snow";

class Landing extends React.Component {

  
  
  render() {
  return (
    
    <div>
    <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>
        <p className={styles.description}>
         Congrats human, you made it to Outer Space.{' '}
          <br></br>
          {/* <button className={styles.code} onClick={() => play()}>Enter</button> */}
          <audio 
          autoPlay
          // controls 
          src="/cantina.mp3" />
        </p>
    </main>
    <Particles id="tsparticles" options={{
        preset: "snow",
        fullScreen: {
          zIndex: -1
        }
      }} init={async (engine) => await loadSnowPreset(engine)} />
    

    </div>
  )
}
}

export default Landing;
