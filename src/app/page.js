import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import FAQ from './components/FAQ'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headercontainer}>
        <div className={styles.gencontainer}>
          <div className={styles.genzedu}>GenZedu</div>
          <div className={styles.help}>help and support</div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button1}>Sign in</button>
          <button className={styles.button2}>Register</button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.textSection}>
          <h1>Need a hand? <br /> We've got you.</h1>
          <input type="text" placeholder="Search here..." className={styles.searchBar} />
        </div>
        <div className={styles.imageSection}>
          
          <Image
            src="/img1.svg" // Adjust the image path
            alt="team"
            width={400}
            height={400}
            className={styles.teamImage}
          />
        </div>
      </div>

        <div>
          <FAQ />
        </div>
      
    </div>
  );
};

export default HomePage;
