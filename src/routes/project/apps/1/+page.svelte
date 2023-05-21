<svelte:head>
 <title>Портфолио</title>
</svelte:head>

<script>
import Icon from '../../../../components/Icon.svelte';
let newItem = '';
let todoList = [];
function add() {
  if (newItem !== '') {
    todoList = [
      ...todoList,
      {
        задача: newItem,
        завершено: false,
      },
    ];
    newItem = '';
  }
}
function remove(index) {
  todoList.splice(index, 1);
  todoList = todoList;
}
function complete(index) {
  todoList[index].completed = !todoList[index].completed;
}
</script>


<main>
    <h1>My to-do list</h1>
    <form on:submit|preventDefault={add}>
        <input bind:value={newItem} placeholder="Enter to-do" />
        <button class="add-todo" on:click={add}><span>+</span></button>
      </form>

      <div class="todos">
    {#each todoList as item, index}
     <span class="todo__text">{item.task}</span>
     <div class="todo__buttons">
      <button class="complete" on:click={() => complete(index)}>
        <Icon name="check-mark" />
      </button>
      <button class="delete" on:click={() => remove(index)}>
        <Icon name="delete" />
      </button>
</div>
    {/each}
</div>
 
</main>


<style>
  .container {
   margin: 50px auto;
   max-width: 800px;
   padding: 0 20px;
  }

  .apps {
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 20px;
  }
  .app {
   border: 1px solid #ddd;
   padding: 10px;
   box-shadow: 0 0 10px #eee;
  }

  .link {
   color: rgb(10, 10, 139);
  }

  main {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  padding: 5vmin;
  box-sizing: border-box;
  background: antiquewhite;
}
form {
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

input {
  flex-grow: 1;
  width: 0;
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  box-shadow: none;
  font-size: 1.2rem;
  margin: 0;
  outline: none;
}
.todos {
  width: 100%;
  max-width: 500px;
}

.todo {
  display: flex;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 15px rgb(0 0 0 / 20%);
  background-color: hsla(0, 0%, 100%, 0.2);
  margin-top: 1rem;
  font-size: 1.2rem;
  justify-content: space-between;
  align-items: center;
}
.todo__buttons {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}
.todo button {
  width: 32px;
  height: 32px;
  padding: 4px;
  margin: 0;
  flex-shrink: 0;
}
h1 {
  text-align: center;
  font-size: 1.5rem;
  margin: 2em 0;
}
button {
  background-color: transparent;
  border: none;
}

button.delete,
button.delete:hover {
  color: brown;
  transition: color 100ms ease-out;
}
button.complete,
button.complete:hover {
  color: cadetblue;
  transition: color 100ms ease-out;
}
.todo.completed {
  color: slategray;
}

.todo.completed .todo__text {
  text-decoration: line-through;
}

.todo.completed button {
  color: silver;
}
.todos {
  width: 100%;
  max-width: 500px;
}
</style>
