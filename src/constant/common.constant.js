const constant = {
    URL: {
        BASE_URL:"https://student-validator-v1.herokuapp.com",
        // BASE_URL:"http://localhost:3011",
        GET_USER_DETAILS:"/getUserData",
        SAVE_USER_DETAILS:"/saveUserData",
        UPDATE_USER_DETAILS:"/updateUserData/{aadhar}",
        VERIFY_USER:"/verify",
        SIGN_UP:"/signUp",
        LOGIN: "/login",
        UPDTAE_VERIFICATION_STATUS: "/updateVerificationStatus",
        GET_ALL_USER_DATA: "/allUserData"
    }
}

export {constant};