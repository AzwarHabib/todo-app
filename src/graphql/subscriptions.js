export const onCreateTodo = `subscription onCreateTodoTypeTable {
    onCreateTodoTypeTable(
		created_at: String,
		id: String,
		description: String,
		completed: Boolean
	)
  }`;
  