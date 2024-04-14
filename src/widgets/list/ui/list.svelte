<script lang="ts">
    import {todoStore} from "../model/list.store.js";
</script>

<div class="flex flex-col gap-2">
    {#each $todoStore as todo}
        <div class="flex flex-col gap-2 border border-amber-500 p-2">
            <p class="text-amber-500">
                {todo.title}
            </p>
            <p class="text-amber-500">
                {todo.description}
            </p>
            <button on:click={() => todoStore.removeItem(todo.id)} class="text-white bg-red-500 p-2 hover:bg-red-600">Delete</button>
        </div>
    {/each}
</div>