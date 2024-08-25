import 'server-only';
import { sql } from '@vercel/postgres';
import CreateSession from './createsession';

export default async function RegisterUser(username: string, password: string) {
    const usernameCount = await sql<{ count: number }>`SELECT COUNT(*) FROM users WHERE username='${username}';`;
    const passwordCount = await sql<{ count: number }>`SELECT COUNT(*) FROM users WHERE password='${password}';`;

    if (usernameCount.rows[0].count > 0 || passwordCount.rows[0].count > 0) {
        return { status: false };
    }

    await sql`INSERT INTO users (username, password) VALUES ('${username}', '${password}');`;
    CreateSession(username);
    return { status: true };
}
