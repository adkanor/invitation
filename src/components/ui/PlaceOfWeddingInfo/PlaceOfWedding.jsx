import React from "react";
import { useTranslation } from 'react-i18next'
import styles from "./PlaceOfWedding.module.css"
// import KoziGrodPanoram from "../../../assets/images/Orange_viewPoint.webp"

const PlaceOfWeddingInfo = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className={styles.placeOfWeddingSection}>
                <h2 className={styles.placeOfWeddingTitle}>{t('venueTitle')}</h2>
                <p className={styles.placeOfWeddingText}>{t('venueDescription')}</p>
                <p className={styles.placeOfWeddingAdress}>{t('venueAdress')}</p>
            </div>
            <div className={styles.placeOfWeddingPhoto}></div>
            <div className={styles.howToGetSection}>
                <div className={styles.howToGetInfo}>
                    <h2 className={styles.howToGetTitle}>{t('howToGet')}</h2>
                    <p className={styles.howToGetText}>{t('transportation')}</p>
                </div>
                <div>
                    <iframe title="hotel 'Kozi Grod'" className={styles.mapHotel} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2332.695919872071!2d18.373609103240547!3d54.22087107817564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd828260a3a1cb%3A0x805b9815e4f739!2sHotel%20Kozi%20Gr%C3%B3d!5e0!3m2!1sru!2spl!4v1735509375767!5m2!1sru!2spl" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </>
    )
}

export default PlaceOfWeddingInfo;