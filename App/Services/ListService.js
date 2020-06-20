import { db, auth } from '../Config/db'

const createList = (title, description) => {
  let listsRef = db.ref(`users/${auth.currentUser.uid}/lists`)
  listsRef.push({
    title,
    description,
  })
}

const deleteList = (id) => {
  db.ref(`users/${auth.currentUser.uid}/lists/${id}`).remove()
}

export default { createList, deleteList }
