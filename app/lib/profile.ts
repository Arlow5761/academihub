import { sql } from '@vercel/postgres'

export default async function FetchProfile(userID : string, detailed : boolean) {
    if (detailed) {
        const user = await sql<{ username : string, profilePictureSrc : string, job : string, tags : string, description : string }>`SELECT username, profilepicturesrc, job, tags, description FROM users WHERE id='${userID}'`;

        if (user.rowCount != 1) {
            return null;
        }

        return user.rows[0];
    }
    
    const user = await sql<{ username : string, profilePictureSrc : string }>`SELECT username, profilepicturesrc FROM users WHERE id='${userID}'`;

    if (user.rowCount != 1) {
        return null;
    }
    
    return user.rows[0];
}
