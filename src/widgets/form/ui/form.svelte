<script lang="ts">
  import {type ITodo, todoStore} from "../../list/model/list.store";

  let title = "";
  let description = "";

  const handleSubmit = (event: Event) => {
    event.preventDefault()

    const newTodo: ITodo = {
      id: Date.now(),
      title: title,
      description: description,
    }

    todoStore.addItem(newTodo)
  }
</script>

<form on:submit={handleSubmit} class="flex flex-col gap-2">
    <input bind:value={title} type="text" class="border border-amber-500 p-2 focus:outline-none" placeholder="Enter title">
    <input bind:value={description} type="text" class="border border-amber-500 p-2 focus:outline-none" placeholder="Enter description">
    <button class="text-white bg-amber-500 p-2 hover:bg-amber-600" type="submit">Send</button>
</form>