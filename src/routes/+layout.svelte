<script>
    import Header from "./Header.svelte";
    import "../lib/global.css";
</script>

<div class="app">
    <!-- <Header /> -->

    <main>
        <slot />
    </main>
</div>

<style>
    /* General Body and Background Styling */

    .app {
        /* display: flex;
        flex-direction: column;
        min-height: 100vh; */
    }

    /* main { flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 100rem;
        margin: 0 auto;
        box-sizing: border-box;
    } */
</style>
