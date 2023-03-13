'use client';
import { useRouter } from "next/navigation";
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import PATHS from './PAGE_PATHS';
import userTokenCacheService from '@/services/cache/user-token.service-cache';
import Token from "@/models/token.interface";
export function checkAuthorizationPageByRole(handler: NextApiHandler, pageRole: string): NextApiHandler {

    return (req: NextApiRequest, res: NextApiResponse) => {
        // Perform some logic to check if the user is authorized to access the page
        const router = useRouter();
        const token: Token = userTokenCacheService.getToken() as Token;
        if (!token) {
            router.push(PATHS.AUTH.LOGIN);
            return null
        }

        if (token.role !== pageRole) {
            router.push(PATHS.UNAUTHORIZED);
            return null;
        }
        return handler(req, res);
    }
}

export default checkAuthorizationPageByRole;