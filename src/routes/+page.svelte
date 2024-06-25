<script lang="ts">
  import Banner from "$lib/Banner.svelte";
  import Program from "$lib/Program.svelte";
  import { BASE_URL } from "$lib/constants";
  import { onMount, onDestroy } from "svelte";

  interface Attendee {
    name: string;
    response: string;
    comment: string;
  }

  let name = "";
  let response = "Kommer"; // Default value
  let comment = "";
  let formSent = false;
  let attendees: Attendee[] = [];

  onMount(() => {
    getAttendees();
  });

  async function sendForm() {
    const formData = {
      name: name,
      response: response,
      comment: comment,
    };

    try {
      const response = await fetch(BASE_URL + "collections/attendees/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Form submitted successfully");
      formSent = true;
      getAttendees();
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  }

  async function getAttendees() {
    const response = await fetch(
      BASE_URL + "collections/attendees/records?perPage=1000"
    );

    const data = await response.json();

    attendees = data.items;

    console.log(attendees);

    if (!response.ok) {
      throw new Error("failed to get attendees");
    }
  }

  let currentIndex = 0;
  let interval;

  function next() {
    currentIndex = (currentIndex + 1) % attendees.length;
  }

  function previous() {
    currentIndex = (currentIndex - 1 + attendees.length) % attendees.length;
  }

  onMount(() => {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % attendees.length;
    }, 2000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<Banner />

<div class="wrapper">
  <Program />
  <div class="form__container">
    <div class="form-stuff">
      <h3>Register</h3>
      <form on:submit|preventDefault={sendForm}>
        <label>
          Name:
          <input type="text" bind:value={name} />
        </label>

        <label>
          Response:
          <select bind:value={response}>
            <option value="Kommer">Kommer</option>
            <option value="Kanskje">Kanskje</option>
            <option value="Kan ikke">Kan ikke</option>
          </select>
        </label>

        <label>
          Comment:
          <textarea bind:value={comment}></textarea>
        </label>

        <span style="display: flex; padding-top: 10px">
          <button type="submit">Submit</button>
          {#if formSent}
            <h3 style="margin: 0 0 0 15px">Påmeldt! :D</h3>
          {/if}
        </span>
      </form>
    </div>
  </div>

  <div class="carousel">
    <div
      class="carousel__track-container"
      style="transform: translateX(-{(currentIndex * 100) / 3}%);"
    >
      <div class="carousel__track">
        {#each attendees as a (a.id)}
          <div class="carousel__card">
            <strong>{a.name} </strong>
            {a.response === "Kommer" ? "✔️" : "❌"}
            <p>{a.comment}</p>
          </div>
        {/each}
      </div>
    </div>
    <!-- <button class="carousel__button carousel__button--left" on:click={previous}
      >‹</button
    >
    <button class="carousel__button carousel__button--right" on:click={next}
      >›</button
    > -->
  </div>
</div>

<style>
  .carousel {
    position: relative;
    width: 100%;
    max-width: 900px; /* Adjust width to accommodate three cards */
    margin: auto;
    overflow: hidden;
  }

  .carousel__track-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carousel__track {
    display: flex;
    width: 100%;
  }

  .carousel__card {
    min-width: calc(100% / 3); /* Display 3 cards at a time */
    box-sizing: border-box;
    padding: 1rem;
    list-style-type: none;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background: white;
    margin-right: 1rem;
  }

  .carousel__button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #b9e6d8;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .carousel__button--left {
    left: 0;
  }

  .carousel__button--right {
    right: 0;
  }
  .wrapper {
    background: linear-gradient(to bottom, #b9e6d8, #e7bb89);
    height: 200vh;
    padding: 0 0 100px 0;
  }

  label {
    margin: 10px 0;
  }

  .form-stuff {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid black; */
    padding: 0 50px 50px 50px;
    border-radius: 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    /* background-color: rgb(192, 239, 224); */
  }

  .attendees__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    list-style: none;
  }

  .form__container {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  label {
    display: block;
  }
</style>
