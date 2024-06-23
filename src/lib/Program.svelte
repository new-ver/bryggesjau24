<script>
  let schedule = {
    Friday: [
      { time: "19:00", band: "Improv w. Språkkafeens Teatergruppe" },
      { time: "21:00", band: "HOUSE" },
      { time: "22:00", band: "acoustic fireplace type beat" },
      // More bands
    ],
    Saturday: [
      { time: "13:00", band: "Yoga w. Lindy Svendsen" },
      { time: "19:00", band: "Schnitzeljakt" },
      { time: "22:00", band: "DJ&FRIENDS" },
      // More bands
    ],
    Sunday: [
      { time: "", band: "breakfast" },
      // More bands
    ],
  };
</script>

<div class="top-image-container"></div>
<div id="program">
  <div class="program-content">
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
  <div class="sidenote">
    <ul>📍 Førlandsvegen 479</ul>
    <ul>🕔 fri. 16. aug - sun. 18 aug</ul>
    <ul>🍴 DIY</ul>
    <ul>🛏️ Camping or talk to me</ul>
    <ul>🛁 Stamp - <b>swim wear</b></ul>
  </div>
</div>

<style>
  #program {
    display: flex;
    flex-direction: row;
    justify-content: center; /* Center the program content */
    align-items: center; /* Center the program content vertically */
    height: 100vh; /* Full viewport height */
    position: relative; /* Needed for the sidenote absolute positioning */
  }
  .program-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; /* Center the text */
    margin: auto; /* Center the column */
    width: 60%; /* Adjust as needed to take the appropriate space */
  }
  .day {
    margin-bottom: 20px;
    width: 100%; /* Ensure each day block takes full width */
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
  h3 {
    color: red;
    font-weight: bold;
    font-size: 2em;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
  ul {
    list-style: none;
    padding: 0; /* Remove default padding */
  }
  li {
    margin: 5px 0; /* Add some margin between items */
    font-family: "Courier New", Courier, monospace; /* Typewriter font */
    font-weight: bold;
  }
  .sidenote {
    position: absolute;
    top: 20px; /* Adjust this value as needed */
    right: 20px; /* Adjust this value as needed */
    background-color: rgba(255, 192, 203, 0.9); /* Pink with high opacity */
    border-radius: 50px; /* Pill shape */
    padding: 20px; /* Padding inside the pill */
    color: black; /* Text color */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow */
  }
</style>
