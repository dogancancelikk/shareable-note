import { db } from '../Config/db'

const createList = (title, description) => {
  let listsRef = db.ref('lists')
  listsRef.push({
    title,
    description,
  })
}

const deleteList = (id) => {
  db.ref(`lists/${id}`).remove()
}

const addListItem = (listId, title, isChecked) => {
  let listItemsRef = db.ref(`lists/${listId}/items`)
  listItemsRef.push({
    title,
    isChecked,
  })
}

const deleteListItem = (listId, itemId) => {
  db.ref(`lists/${listId}/items/${itemId}`).remove()
}

export default { createList, deleteList, addListItem, deleteListItem }
