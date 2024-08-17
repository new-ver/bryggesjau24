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
      {
        time: "19:00",
        band: "Schnitzeljakt",
        url: "https://schnitzeljakt24.netlify.app/",
      },
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
  <div class="sidenote">
    <ul>📍 Førlandsvegen 479</ul>
    <ul>🕔 fri. 16. aug - sun. 18 aug</ul>
    <ul>🍴 DIY</ul>
    <ul>🛏️ Camping or talk to me</ul>
    <ul>🛁 Stamp - <b>swim wear</b></ul>
  </div>
  <div class="program-content">
    {#each Object.entries(schedule) as [day, events]}
      <div class="day">
        <h3>{day}</h3>
        <ul>
          {#each events as { time, band, url }}
            <li>
              {time} -
              {#if url}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-as-text">{band}</a
                >
              {:else}
                {band}
              {/if}
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</div>

<style>
  a.link-as-text {
    color: inherit; /* Inherit text color from parent */
    text-decoration: none; /* Remove underline */
    cursor: pointer; /* Show pointer cursor on hover */
  }
  a.link-as-text:hover {
    text-decoration: underline; /* Optional: underline on hover to indicate clickable */
    color: darkblue; /* Optional: change color on hover */
  }
  #program {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .program-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
    width: 60%;
  }
  .day {
    margin-bottom: 20px;
    width: 100%;
  }
  .top-image-container {
    width: 100%;
    position: relative;
    height: 350px;
    margin-top: -220px;
    z-index: 10001;
    background-image: url("../lib/assets/gress.png");
    background-repeat: repeat-x;
    background-size: auto 100%;
    background-position: top center;
  }
  h3 {
    color: red;
    font-weight: bold;
    font-size: 2em;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 5px 0;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
  }
  .sidenote {
    background-color: rgba(255, 192, 203, 0.9);
    border-radius: 50px;
    padding: 20px;
    color: black;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 20px;
    right: 20px;
  }

  @media (max-width: 768px) {
    #program {
      flex-direction: column;
    }
    .sidenote {
      position: static;
      margin-bottom: 20px;
    }
    .program-content {
      width: 100%;
    }
  }
</style>
