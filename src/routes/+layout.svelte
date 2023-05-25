<script lang="ts">
    import Nav from "../components/nav.svelte";
</script>

<div class="p8 max-w-6xl mx-auto">
    <Nav/>
    <slot></slot>
    <span>a7oo</span>
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>