import React from "react";
import {useTranslation} from 'react-i18next'
import styles from "./PlaceOfWedding.module.css"
import KoziGrodPanoram from "../../../assets/images/Orange_viewPoint.webp"

const PlaceOfWeddingInfo = ()=>{
    const {t} = useTranslation();

    return (
<>
    <div className={styles.placeOfWeddingSection}>
        <h2 className={styles.placeOfWeddingTitle}>{t('venueTitle')}</h2>
        <p className={styles.placeOfWeddingText}>{t('venueDescription')}</p>
        <p className={styles.placeOfWeddingText}>{t('venueAddress')}</p>
</div>
<div className={styles.placeOfWeddingPhoto}></div>
    <div>
        <div>
        <h3>{t('howToGet')}</h3>
        <p>{t('transportation')}</p>
        </div>
        <div>
            Map
        </div>
    </div>
    
</>
)
}

export default PlaceOfWeddingInfo;