<h1>Учёт расходов</h1>

<form on:submit|preventDefault={addExpense}>
  <label for="name">Название:</label>
  <input type="text" id="name" bind:value={newName} />
  <label for="amount">Сумма:</label>
  <input type="text" id="amount" bind:value={newAmount} />
  <button type="submit">Добавить</button>
</form>

<table>
<thead>
<tr>
  <th>Название</th>
  <th>Сумма</th>
  <th>Действия</th>
</tr>
</thead>

<tbody>
  {#each expenses as expense, i}
   <tr>
    <td><div>{expense.name}</div> </td>
    <td><div>{expense.amount}</div> </td>
    <td><button on:click={() => deleteExpense(i)}>Удалить</button></td>
   </tr>
  {/each}
</tbody>
</table>

<script>
 let expenses = [];

 let newName = '';
 let newAmount = '';

 function addExpense() {
  const obj = {
   name: newName,
   amount: newAmount,
  };
  
  expenses.push(obj);
  expenses = expenses;
  newName = '';
  newAmount = '';
}

 function deleteExpense(index) {
  expenses.splice(index, 1);
  expenses = expenses;
}
</script>

<style>
label {
  margin-top: 10px;
  display: block;
  margin-bottom: 10px;
}

input[type='text'] {
  padding: 5px;
  border: 2px solid #c6bebe;
  border-radius: 5px;
  margin-right: 10px;
  width: 150px;
}

table {
  margin-top: 25px;
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #c6bebe;
  padding: 10px;
  text-align: left;
}

th {
  background-color: rgb(220, 211, 211) 
}

button {
  padding: 5px 20px;
  background-color: #57ca5b;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
}

h1 {
  font-size: 25px;
  margin-bottom: 20px;
}
</style>