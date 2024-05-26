<script>
    function scrollDown() {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
</script>

<div>
    <div class="banner">
        <button class="scroll-button" on:click={scrollDown}>
            BRYGGESJAU 2024. AUG. 17 - AUG. 18.
        </button>
        <div class="scroll-down"></div>
    </div>
</div>

<style>
    .banner {
        background: url("./assets/background.png") no-repeat center center;
        background-size: cover;
        height: 93vh;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        position: relative;
    }

    .scroll-button {
        background: rgba(0, 0, 0, 0.6);
        border: 2px solid white;
        padding: 1rem 2rem;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        transition:
            background 0.3s,
            color 0.3s,
            transform 0.3s;
        border-radius: 5px;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
    }

    .scroll-button:hover {
        background: rgba(255, 255, 255, 0.8);
        color: black;
        transform: scale(1.05);
    }

    .scroll-down {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 2rem;
        animation: bounce 2s infinite;
        color: white;
    }

    @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }

    .scroll-down::before {
        content: "↓";
        font-size: 3rem;
    }
</style>
