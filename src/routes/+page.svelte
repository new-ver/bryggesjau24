<script lang="ts">
    import Banner from "$lib/Banner.svelte";
    import Program from "$lib/Program.svelte";
    import { BASE_URL } from "$lib/constants";
    import { onMount } from "svelte";

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
            const response = await fetch(
                BASE_URL + "collections/attendees/records",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

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
</script>

<Banner />
<Program />

{#if formSent}
    <h3>Påmeldt! :D</h3>
{/if}
<div class="form__container">
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

        <button type="submit">Submit</button>
    </form>
</div>

<div class="attendees__container">
    <h1>Attendees</h1>
    {#each attendees as a}
        <li>{a.name} - {a.response}</li>
    {/each}
</div>

<style>
    .attendees__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;
    }

    .form__container {
        margin: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    label {
        display: block;
        margin-bottom: 10px;
    }
</style>
