import 'server-only';
import { cookies } from 'next/headers';

export default async function CreateSession(id : string) {
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const session = id;

    cookies().set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expires,
        sameSite: 'lax',
        path: '/'
    });
}
