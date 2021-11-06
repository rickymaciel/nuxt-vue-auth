import { decode } from 'jsonwebtoken'

export function DecodeToken(token: string) {
    return decode(ParsedToken(token))
}

export function ParsedToken(token: string): string {
    return token.replace('Bearer ', '')
}

export function ValidateToken(token: string): string {
    if (IsTokenExpired(token)) {
      // TODO Clear cookie and state
        return ''
    }

    return token
}

export const IsTokenExpired = (token: string): boolean => {
    try {
        const decoded = DecodeToken(token);

        console.log('IsTokenExpired', {token, decoded});

        if (!decoded) return true

        const { exp } = decoded as { exp: number }

        console.log('IsTokenExpired', {exp});

        if (!exp) return true

        const expirationDatetimeInSeconds = exp * 1000

        console.log('IsTokenExpired', {exp, expirationDatetimeInSeconds});

        return Date.now() >= expirationDatetimeInSeconds
    } catch (error) {
        console.error('JwtService:IsTokenExpired', { error: error })
        return true
    }
}
