/* eslint-disable react/prop-types */
import styles from '../styles/Hero.module.css';
import icon from '../assets/iconLocalizer.png';

const Hero = (props) => {

    let  textUppercase 
        if(props.location){
            textUppercase = props.location;
            textUppercase   = textUppercase.toUpperCase();
        }

    return(
        <>
            <main className={styles.main}>
                    <div className={styles.hero}>
                        <img className={styles.img}  src={props.imageUrl} alt="travel-img" />
                    </div>
                    <div className={styles.localization}>
                    <div className={styles.icon}>
                        <img className={styles.localizer} src={icon} alt='icon' />
                        <p className={styles.p}>{textUppercase}</p>
                        <p className={styles.p}> 
                            <a className={styles.a} href={props.googleMapsUrl}>
                                View on google maps
                            </a>
                        </p>
                    </div>
                    <div className={styles.description}>
                        <h2>{props.title}</h2>
                        <h6>{props.startDate}- {props.endDate}</h6>
                        <p>{props.description}</p>
                    </div>
                   
                </div>
            </main>
        
        </>
    )
}

export default Hero