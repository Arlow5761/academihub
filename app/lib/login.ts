import 'server-only';
import { sql } from '@vercel/postgres';
import CreateSession from './createsession';

export default async function LoginUser(username : string, password : string) {
    const dbuserdata = await sql<{ username : string, password : string }>`SELECT Username, Password FROM Users WHERE Username='${username}' AND Password='${password}';`;

    if (dbuserdata.rowCount == null) {
        return { status: false };
    }

    if (dbuserdata.rows[0].username == username && dbuserdata.rows[0].password == password) {
        CreateSession(username);
        return { status: true };
    }
}
