import { db } from '../Config/db'

const createList = (title, description) => {
  let listsRef = db.ref('lists')
  listsRef.push({
    title: title,
    desc: description,
  })
}

export default { createList }
