<script>
    let schedule = {
        Friday: [
            { time: "4:00 PM", band: "Band A" },
            { time: "6:00 PM", band: "Band B" },
            // More bands
        ],
        Saturday: [
            { time: "3:00 PM", band: "Band C" },
            { time: "5:00 PM", band: "Band D" },
            // More bands
        ],
        Sunday: [
            { time: "3:00 PM", band: "Band E" },
            { time: "5:00 PM", band: "Solo Artist F" },
            // More bands
        ],
    };
</script>

<div class="top-image-container"></div>
<div id="program">
    <div class="program-content">
        <h2>Festival Program</h2>
        {#each Object.entries(schedule) as [day, events]}
            <div class="day">
                <h3>{day}</h3>
                <ul>
                    {#each events as { time, band }}
                        <li>{time} - {band}</li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</div>

<style>
    .program-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .day {
        margin-bottom: 20px;
    }
    .top-image-container {
        width: 100%; /* Full width */
        position: relative;
        height: 350px; /* Set the height as needed */
        margin-top: -220px;
        z-index: 10001;
        background-image: url("../lib/assets/gress.png");
        background-repeat: repeat-x; /* Repeat the image horizontally */
        background-size: auto 100%; /* Make the height 100% and width auto */
        background-position: top center; /* Position at the top center */
    }
</style>
