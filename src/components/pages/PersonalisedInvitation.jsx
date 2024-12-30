import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to extract URL parameters
import guests from '../../data/guests';
import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n';
import styles from "./PersonalisedInvitation.module.css"
import LanguageSwitcher from "../ui/LanguageSwitcher/LanguageSwitcher"
import PlaceOfWeddingInfo from "../ui/PlaceOfWeddingInfo/PlaceOfWedding"
import DressCode from "../ui/DressCode/DressCode"
import CelebrationAgenda from "../ui/CelebrationAgenda/CelebrationAgenda"

function PersonalisedInvitation() {

    const { t } = useTranslation();
    const guestId = useParams();
    console.log(guestId)
    const language = i18n.language;
    const guestInfo = guests.find(guest => guest.id === guestId.id)
    if (!guestInfo) {
        return (
            <div>Guest was not found</div>
        )
    }

    const guestName = guestInfo.name[language] || guestInfo.name.en;


    return (
        <>
            {/* <p className={styles.try_fonts}>Try fonts it is trying</p>
<p>Try fonts it is trying</p>
    <div>Personalised invitation </div>
    <p>Welcome to our wedding!</p>
    <p>BELLOW IS TEST</p> */}
            <p>{t('welcome')}</p>
            <p>{guestName}</p>
            <LanguageSwitcher></LanguageSwitcher>
            <CelebrationAgenda></CelebrationAgenda>
            <div className={styles.divider}></div>
            <PlaceOfWeddingInfo></PlaceOfWeddingInfo>
            <div className={styles.divider}></div>
            <DressCode></DressCode>
            <div className={styles.divider}></div>
        </>
    )

}

export default PersonalisedInvitation;