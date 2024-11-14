import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to extract URL parameters
import guests from '../../data/guests';
import {useTranslation} from 'react-i18next'
import i18n from '../../utils/i18n'; 

function PersonalisedInvitation () {

    const {t} = useTranslation();
    const guestId = useParams();
    console.log(guestId)
    const language = i18n.language;
    const guestInfo = guests.find(guest => guest.id === guestId.id)

if(!guestInfo){
    return (
    <div>Guest was not found</div>
)}

const guestName = guestInfo.name[language] || guestInfo.name.en;


return (
<>
    <div>Personalised invitation </div>
    <p>Welcome to our wedding!</p>
    <p>BELLOW IS TEST</p>
    <p>{t('welcome')}</p>
<p>{guestName}</p>
</>
)

}

export default PersonalisedInvitation;