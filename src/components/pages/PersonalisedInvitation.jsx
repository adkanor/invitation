import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n';
import styles from "./PersonalisedInvitation.module.css"
import PlaceOfWeddingInfo from "../ui/PlaceOfWeddingInfo/PlaceOfWedding"
import DressCode from "../ui/DressCode/DressCode"
import CelebrationAgenda from "../ui/CelebrationAgenda/CelebrationAgenda"
import ConfirmationSection from '../ui/ConfirmationSection/ConfirmationSection';
import Header from "../ui/Header/Header.jsx"
import { findGuestById } from '../../utils/findGuestById.js';
import ScrollProgress from '../ui/ScrollProgress/ScrollProgress.jsx';
import PhotosSection from "../ui/PhotosSection/PhotosSection.jsx"
import Footer from "../ui/Footer/Footer.jsx"
import Timer from "../ui/Timer/Timer.jsx"
function PersonalisedInvitation() {

    const { t } = useTranslation();
    const guestId = useParams();
    const language = i18n.language;
    const guestInfo = findGuestById(guestId.id);

    useEffect(() => {
        sessionStorage.setItem('guestId', guestId.id);
        localStorage.setItem('guestId', guestId.id);

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

            <ScrollProgress />
            <Header></Header>

            <div className={styles.darkBackground}>
                <PhotosSection></PhotosSection>
                <Timer></Timer>
            </div>


            <div className={styles.divider}></div>
            <PlaceOfWeddingInfo></PlaceOfWeddingInfo>
            <div className={styles.divider}></div>
            <CelebrationAgenda></CelebrationAgenda>
            <div className={styles.divider}></div>
            <DressCode></DressCode>
            <div className={styles.divider}></div>
            <ConfirmationSection guestName={guestName} ></ConfirmationSection>
            <Footer></Footer>




        </>
    )

}

export default PersonalisedInvitation;