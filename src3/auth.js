class Auth{
    constructor(){
        this.authonticated = false;
    }

    login(cb){
        this.authonticated = true;
        cb();
    }

    logout(cb){
        this.authonticated = false;
        cb();
    }

    isAuthonticated(){
        return this.authonticated;
    }
}

export default new Auth();