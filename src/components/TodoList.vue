<template>
  <div class="todo-container">
    <h1 class="title">Todo List</h1>
    <div class="input-container">
      <input v-model="newTodo" @keyup.enter="addTodoItem" placeholder="Add a todo" class="todo-input">
    </div>
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <div class="todo-content">
          <input 
            type="checkbox" 
            v-model="todo.completed" 
            @change="updateTodoItem(todo)" 
            class="todo-checkbox"
          >
          <span :class="{ completed: todo.completed }">{{ todo.description }}</span>
        </div>
        <button @click="deleteTodoItem(todo.id,todo.created_at)" class="delete-button">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { listTodos } from '../graphql/queries';
import { generateClient } from 'aws-amplify/api';
import { createTodoTypeTable, deleteTodoTypeTable, updateTodoTypeTable } from '../graphql/mutations';

export default {
  setup() {
    const todos = ref([]);
    const newTodo = ref('');

    // Fetch existing todos
    const fetchTodos = async () => {
      try {
        const client = generateClient();
        const todoData = await client.graphql({query: listTodos});
        todos.value = todoData.data.listTodoTypeTables.items;
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    // Add new todo
    const addTodoItem = async () => {
      if (!newTodo.value.trim()) return;  // Ensure description is not empty
      try {
        const client = generateClient();
        const todo = {
          id: Math.random().toString(36).substr(2, 9),  // Set your ID here or use UUID
          description: newTodo.value,
          completed: false,
          created_at: new Date().toISOString() // Example of created_at as current timestamp
        };

        await client.graphql({
          query: createTodoTypeTable,  
          variables: {
            createtodotypetableinput: todo  
          }
        })
        .then(() => {
          fetchTodos();
          newTodo.value = '';
        })
        .catch(err => console.log("Error is:", err));

      } catch (error) {
        console.error('Error adding todo:', error);
      }
    };

    // Delete todo item
       const deleteTodoItem = async (id,created_at) => {
      try {
        const client = generateClient();
        await client.graphql({
          query: deleteTodoTypeTable,
          variables: {deleteTodoTypeTableInput:{ id,created_at }}
        });

        // Refresh the list after deletion
        fetchTodos();
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    };

    // Update todo item (change completed status)
    const updateTodoItem = async (todo) => {
      try {
        const client = generateClient();
        await client.graphql({
          query: updateTodoTypeTable,
          variables: {
            id: todo.id,
            completed: todo.completed,
            created_at:todo.created_at
          }
        });
        // Optional: refetch or update UI optimistically
        console.log('Todo updated:', todo);
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    };

    onMounted(() => {
      fetchTodos();
    });

    return {
      todos,
      newTodo,
      addTodoItem,
      deleteTodoItem,
      updateTodoItem
    };
  }
};
</script>

<style scoped>
.todo-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #353939;
}

.input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.todo-input {
  width: 100%;
  max-width: 500px;
  padding: 10px 15px;
  font-size: 1rem;
  border: 1px solid #DAD7D7;
  border-radius: 6px;
  outline: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;
}

.todo-input:focus {
  border-color: #353939;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #EFF3EF;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.todo-content {
  display: flex;
  align-items: center;
}

.todo-checkbox {
  margin-right: 10px;
}

.completed {
  text-decoration: line-through;
  color: #a9a9a9;
}

.delete-button {
  background-color: #ff5c5c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #ff3030;
}

@media (max-width: 600px) {
  .todo-input {
    width: 90%;
  }
}
</style>
