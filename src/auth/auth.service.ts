import { Injectable } from "@nestjs/common"

@Injectable({})
export class AuthService {
    signin () {
        return 'You are signed in'
    }

    signup () {
        return 'You are signed up'
    }
}