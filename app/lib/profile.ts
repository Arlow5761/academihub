import { sql } from '@vercel/postgres'

export default async function FetchProfile(userID : string, detailed : boolean) {
    if (detailed) {
        const user = await sql<{ username : string, profilePictureSrc : string, job : string, tags : string, description : string }>`SELECT Username, ProfilePictureSrc, Job, Tags, Description FROM Users WHERE ID='${userID}'`;

        if (user.rowCount != 1) {
            return { success: false };
        }

        return { success: true, username: user.rows[0].username, profilePictureSrc: user.rows[0].profilePictureSrc, job: user.rows[0].job, tags: user.rows[0].tags, description: user.rows[0].description };
    }
    
    const user = await sql<{ username : string, profilePictureSrc : string }>`SELECT Username, ProfilePictureSrc FROM Users WHERE ID='${userID}'`;

    if (user.rowCount != 1) {
        return { success: false };
    }
    
    return { success: true, username: user.rows[0].username, profilePictureSrc: user.rows[0].profilePictureSrc };
}
