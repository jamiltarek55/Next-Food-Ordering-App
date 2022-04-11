import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            pizza-mall,Kallyanpur main road.
            <br /> Dhaka, 1200
            <br /> 01955-506305
          </p>
          <p className={styles.text}>
           pizza-mall, NurZahan-Paza.
            <br /> Magura, 7600
            <br /> 01717-374655
          </p>
          <p className={styles.text}>
            pizza-mall, bypass terminal,
            <br /> Pabna, 6600.
            <br /> 01955-506305
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00am – 10:00pm
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00pm – 10:00pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
