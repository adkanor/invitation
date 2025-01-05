import guests from '../data/guests';

export const findGuestById = (guestId) => {
  return guests.find(guest => guest.id === guestId);
};