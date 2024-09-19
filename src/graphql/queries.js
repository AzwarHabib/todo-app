export const listTodos = `
query listTodoTypeTables {
  listTodoTypeTables {
    items {
      created_at
      id
      description
      completed
    }
  }
}`;
  