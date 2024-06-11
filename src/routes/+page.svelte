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

    <div class="attendees__container">
        <h1>Attending</h1>
        <div style="display: flex; flex-direction:column">
            {#each attendees as a}
                <li>
                    <strong>
                        {a.name} -
                    </strong>
                    {a.response}
                    <i>
                        - {a.comment}
                    </i>
                </li>
            {/each}
        </div>
    </div>
</div>

<style>
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
