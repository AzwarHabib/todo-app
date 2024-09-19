export const createTodoTypeTable = `mutation createTodoTypeTable($createtodotypetableinput: CreateTodoTypeTableInput!) {
  createTodoTypeTable(input: $createtodotypetableinput) {
    created_at
    id
    description
    completed
  }
}
`;
export const updateTodoTypeTable = `mutation updateTodoTypeTable($id: String!, $completed: Boolean!,$created_at:String!) {
  updateTodoTypeTable(input: { id: $id, completed: $completed,created_at:$created_at }) {
    created_at
    id
    
    completed
  }
}
`;

  

  export const deleteTodoTypeTable = `mutation deleteTodoTypeTable($deleteTodoTypeTableInput: DeleteTodoTypeTableInput!) {
  deleteTodoTypeTable(input: $deleteTodoTypeTableInput) {
    created_at
    id
  }
}`