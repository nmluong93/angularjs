import { resolve, reject } from "q";


export class AuthService {

    private loggedIn = false;

    constructor() {

    }

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn)
                }, 800);
            }
        )

        return promise;
    }
    login() {
        this.loggedIn = true;
    }
    logout() {
        this.loggedIn = false;
    }
}