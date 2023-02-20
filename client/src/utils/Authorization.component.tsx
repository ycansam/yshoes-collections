'use client';
import LOCAL_STORAGE_VARIABLES from './localstoragevariables';
import jwt from 'jsonwebtoken';
import { useRouter } from "next/navigation";
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export function checkAuthorizationPageByRole(handler: NextApiHandler, pageRole: string): NextApiHandler {

    return (req: NextApiRequest, res: NextApiResponse) => {
        // Perform some logic to check if the user is authorized to access the page
        const router = useRouter();
        const token: any = localStorage.getItem(LOCAL_STORAGE_VARIABLES.TOKEN)?.toString();

        if (!token) {
            router.push('/login');
            return null;
        }
        try {
            const secret: any = process.env.NEXT_PUBLIC_SECRET_JWT;

            const decoded: any = jwt.decode(token, secret);
            const role = decoded.role;

            if (role !== pageRole) {
                console.log(secret);
                router.push('/error');
                return null;
            }

            return handler(req, res);

        } catch (error) {
            console.error(error);
            router.push('/error');
            return null;
        }
    }
}

export default checkAuthorizationPageByRole;