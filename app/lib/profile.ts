import { sql } from '@vercel/postgres'
import { UserBriefData, UserData } from './types';

export default async function FetchProfile(userID : string, detailed : boolean) {
    if (detailed) {
        const user = await sql<{ id : string, username : string, profilepicture : string | null, job : string | null, tags : string | null, description : string | null}>`SELECT id, username, profilepicture, job, tags, description FROM users WHERE id=${userID}`;

        if (user.rowCount != 1) {
            return null;
        }

        const userData = {
            id: user.rows[0].id,
            username: user.rows[0].username,
            profilepicture: user.rows[0].profilepicture,
            job: user.rows[0].job,
            tags: (user.rows[0].tags) ? user.rows[0].tags.split(`;`) : [],
            description: user.rows[0].description
        } as UserData;

        return userData;
    }
    
    const user = await sql<UserBriefData>`SELECT id, username, profilepicture FROM users WHERE id=${userID}`;

    if (user.rowCount != 1) {
        return null;
    }
    
    return user.rows[0];
}

export async function UpdateProfile(userID : string, username : string | null, password : string | null, profilepicture : string | null, job : string | null, tags : string[] | null, description : string | null) {
    if (username != null) {
        let hasSameUsername = false;
        const sameUsername = await sql<{ id : string, username : string }>`SELECT id, username FROM users WHERE username = ${username};`;
        
        if (sameUsername.rowCount !== null) {
            if (sameUsername.rowCount > 0) {
                for (let user of sameUsername.rows) {
                    if (user.id !== userID) {
                        hasSameUsername = true;
                        break;
                    }
                }
            }
        }

        if (!hasSameUsername) {
            await sql`UPDATE users SET username = ${username} WHERE id = ${userID}`;
        }
    }
    
    if (profilepicture != null) {
        await sql`UPDATE users SET profilepicture = ${profilepicture} WHERE id = ${userID}`;
    }

    if (job != null) {
        await sql`UPDATE users SET job = ${job} WHERE id = ${userID}`;
    }

    if (tags != null) {
        const stringifiedTags = tags.join(';');
        await sql`UPDATE users SET tags = ${stringifiedTags} WHERE id = ${userID}`;
    }

    if (description != null) {
        await sql`UPDATE users SET description = ${description} WHERE id = ${userID}`;
    }
    
    return true;
}
