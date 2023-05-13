import db from '../db/firestore';
import firebase from 'firebase/app';

export const fetchChats = () => {
    return db
        .collection('chats')
        .get()
        .then((snapshot) => {
            const data = snapshot.docs.map(doc => {
                return doc.data();
            })

            return data;
        })
}

export const createChat = chat =>
    db
        .collection('chats')
        .add(chat)
        .then(docRef => docRef.id)

export const joinChat = async (userId, chatId) => {
    const userRef = db.doc(`profiles/${userId}`);
    const chatRef = db.doc(`chats/${chatId}`);

    await userRef.update({joinedChats: firebase.firestore.FieldValue.arrayUnion(chatRef)})
    await chatRef.update({joinedUsers: firebase.firestore.FieldValue.arrayUnion(userRef)})

}