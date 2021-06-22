import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

export type AuthenticationData = {
    id: string;
}

export function generateToken(input: AuthenticationData): string {

    const token = jwt.sign(
    {
        id : input.id
    },
    process.env.JWT_KEY as string,
    {
        expiresIn
    }
    );
    return token;
}