class ToDoList {
  constructor(list = []) {
    this.list = list
  }

  // Создание элемента
  create(name) {
    let id = 1
    if (this.list.length) {
      id = this.list[this.list.length - 1].id + 1
    }
    this.list.push({ id, name })
  }

  // Редактирование элемента по id
  edit(id, newValue) {
    this.list = this.list.map(item => {
      if (item.id === id) {
        item.name = newValue
      }
      return item
    })
  }

  // Удаление элемента по id
  remove(id) {
    this.list = this.list.filter(item => item.id !== id)
  }
}