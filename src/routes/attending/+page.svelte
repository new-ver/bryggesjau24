<script lang="ts">
    export let data;

    console.log(data);
</script>

<h1>Attendees</h1>

<ul>
    {#each data.attendees as attendee}
        <li>{attendee.name} - {attendee.response} - {attendee.comment}</li>
    {/each}
</ul>
