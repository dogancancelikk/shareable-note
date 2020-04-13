import { db } from '../Config/db'

const createList = (title, description) => {
  let listsRef = db.ref('lists')
  listsRef.push({
    title: title,
    desc: description,
  })
}

const deleteList = (id) => {
  db.ref(`lists/${id}`).remove()
}

export default { createList, deleteList }
