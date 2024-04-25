<script>
    let name = "";
    let response = "Kommer"; // Default value
    let comment = "";

    async function handleSubmit() {
        const formData = {
            name: name,
            response: response,
            comment: comment,
        };

        try {
            const response = await fetch(
                "http://localhost:8090/api/collections/attendees/records",
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
        } catch (error) {
            console.error("Error submitting form:", error.message);
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
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

<style>
    label {
        display: block;
        margin-bottom: 10px;
    }
</style>
