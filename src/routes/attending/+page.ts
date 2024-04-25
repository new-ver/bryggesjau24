import type { PageLoad } from "./$types";
export const load = (async () => {
    let attendees: any[] = [];

    async function fetchAttendees() {
        try {
            const response = await fetch(
                "http://localhost:8090/api/collections/attendees/records"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch attendees");
            }

            const data = await response.json();

            return data.items;
        } catch (error) {
            console.error("Error fetching attendees:", error.message);
        }
    }

    attendees = await fetchAttendees();

    return {
        attendees: attendees,
    };
}) satisfies PageLoad;
