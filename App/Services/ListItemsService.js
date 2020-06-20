import { db, auth } from '../Config/db'

const addListItem = (listId, title, isChecked) => {
  let listItemsRef = db.ref(`users/${auth.currentUser.uid}/lists/${listId}/items`)
  listItemsRef.push({
    title,
    isChecked,
  })
}

const deleteListItem = (listId, itemId) => {
  db.ref(`users/${auth.currentUser.uid}/lists/${listId}/items/${itemId}`).remove()
}

const updateListItem = (listId, itemId, isChecked) => {
  db.ref(`users/${auth.currentUser.uid}/lists/${listId}/items/${itemId}`).update({ isChecked })
}

export default { addListItem, deleteListItem, updateListItem }
