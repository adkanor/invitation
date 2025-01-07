import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to extract URL parameters
// import guests from '../../data/guests';

import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n';
import styles from "./PersonalisedInvitation.module.css"
import PlaceOfWeddingInfo from "../ui/PlaceOfWeddingInfo/PlaceOfWedding"
import DressCode from "../ui/DressCode/DressCode"
import CelebrationAgenda from "../ui/CelebrationAgenda/CelebrationAgenda"
import Logo_rounded from "../../assets/images/Logo-rounded.svg"
import ConfirmationSection from '../ui/ConfirmationSection/ConfirmationSection';
import Header from "../ui/Header/Header.jsx"
import { findGuestById } from '../../utils/findGuestById.js'; // Импортируем функцию


function PersonalisedInvitation() {

    const { t } = useTranslation();
    const guestId = useParams();
    const language = i18n.language;
    const guestInfo = findGuestById(guestId.id);
    // const guestInfo = guests.find(guest => guest.id === guestId.id)

    useEffect(() => {
        sessionStorage.setItem('guestId', guestId.id);
    }, [guestId.id]);

    if (!guestInfo) {
        return (
            <div>
                <p>Guest was not found</p>
            </div>
        );
    }

    const guestName = guestInfo.name[language] || guestInfo.name.en;


    return (
        <>
            {/* <p className={styles.try_fonts}>Try fonts it is trying</p>
<p>Try fonts it is trying</p>
    <div>Personalised invitation </div>
    <p>Welcome to our wedding!</p>
    <p>BELLOW IS TEST</p> */}
            <Header></Header>
           

           
            <PlaceOfWeddingInfo></PlaceOfWeddingInfo>
            <div className={styles.divider}></div>
            <CelebrationAgenda></CelebrationAgenda>
            <div className={styles.divider}></div>
            <DressCode></DressCode>
            <div className={styles.divider}></div>
            <ConfirmationSection guestName={guestName} ></ConfirmationSection>
            <p className={styles.happyToSeeYou}>{t('happyToSeeYou')}</p>
            <img className={styles.Logo_rounded} src={Logo_rounded} alt='Ceremony icon' />


        </>
    )

}

export default PersonalisedInvitation;