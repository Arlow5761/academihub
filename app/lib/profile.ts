import { sql } from '@vercel/postgres'
import { UserBriefData, UserData } from './types';

export default async function FetchProfile(userID : string, detailed : boolean) {
    if (detailed) {
        const user = await sql<UserData>`SELECT * FROM users WHERE id=${userID}`;

        if (user.rowCount != 1) {
            return null;
        }

        return user.rows[0];
    }
    
    const user = await sql<UserBriefData>`SELECT id, username, profilepicturesrc FROM users WHERE id=${userID}`;

    if (user.rowCount != 1) {
        return null;
    }
    
    return user.rows[0];
}
