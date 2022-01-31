"use strict";

// non-react
export default function firerr(code: string, setState: any) {
    switch (code) {
        case "auth/missing-email":
            setState("please insert an email address");
            break;
        case "auth/weak-password":
            setState("Password Must Be At Least 6 Characters");
            break;
        case "auth/email-already-in-use":
            setState("Email Is Already In Use, Please Try Different Email");
            break;
        case "auth/invalid-email":
            setState("Please Insert A Valid Email Address");
            break;
        case "auth/account-exists-with-different-credential":
            setState("Account is already exist with different credentials");
            break;
        case "auth/credential-already-in-use":
            setState("Credentials Is Already In use");
            break;
        case "auth/operation-not-supported-in-this-environment":
            setState("The Operation is not allowed/supported in this environment");
            break;
        case "auth/timeout":
            setState("Request timeout, try again later");
            break;
        case "auth/argument-error":
            setState("an unknown error occured");
            break;
        case "auth/invalid-persistence-type":
            setState("an unknown error occured");
            break;
        case "auth/unsupported-persistence-type":
            setState("an unknown error occured");
            break;
        case "auth/invalid-credential":
            setState("Invalid credentials");
            break;
        case "auth/wrong-password":
            setState("Wrong password");
            break;
        case "auth/invalid-verification-code":
            setState("Invalid verification code");
            break;
        case "auth/invalid-verification-id":
            setState("invalid verification id");
            break;
        case "auth/custom-token-mismatch":
            setState("custom token is mismatched");
            break;
        case "auth/invalid-custom-token":
            setState("invalid custom token");
            break;
        case "auth/captcha-check-failed":
            setState("captcha failed");
            break;
        case "auth/invalid-phone-number":
            setState("invalid phone number");
            break;
        case "auth/missing-phone-number":
            setState("please enter a phone number");
            break;
        case "auth/quota-exceeded":
            setState("authentication qota exceeded");
            break;
        case "auth/cancelled-popup-request":
            setState("cancelled popup authentication");
            break;
        case "auth/popup-blocked":
            setState("popup is blocked");
            break;
        case "auth/popup-closed-by-user":
            setState("popup window is closed by the user");
            break;
        case "auth/invalid-user-token":
            setState("invalid user token");
            break;
        case "auth/user-token-expired":
            setState("user token is expired");
            break;
        case "auth/null-user":
            setState("User is null");
            break;
        case "auth/invalid-api-key":
            setState("invalid api key");
            break;
        case "auth/network-request-failed":
            setState("can't connect to the server");
            break;
        case "auth/requires-recent-login":
            setState("Auth require recent login");
            break;
        case "auth/too-many-requests":
            setState("Too many request to the server right now, please try again later");
            break;
        case "auth/id-token-expired":
            setState("id token is expired");
            break;
        case "auth/invalid-creation-time":
            setState("invalid creation time, try again later");
            break;
        case "auth/invalid-display-name":
            setState("invalid username");
            break;
        case "auth/invalid-email-verified":
            setState("email is not yet verified");
            break;
        case "auth/invalid-id-token":
            setState("id token invalid");
            break;
        case "auth/invalid-password":
            setState("invalid password");
            break;
        case "auth/invalid-password-hash":
            setState("invalid password hash");
            break;
        case "auth/invalid-photo-url":
            setState("invalid user's profile picture");
            break;
        case "auth/invalid-provider-id":
            setState("invalid provider id");
            break;
        case "auth/invalid-session-cookie-duration":
            setState("session cookie duration is invalid");
            break;
        case "auth/invalid-uid":
            setState("invalid user id");
            break;
        case "auth/maximum-user-count-exceeded":
            setState("maximum user count is exceeded");
            break;
        case "auth/missing-uid":
            setState("missing user id");
            break;
        case "auth/session-cookie-revoked":
            setState("session cookie is revoked");
            break;
        case "auth/uid-alread-exists":
            setState("user id is already exist");
            break;
        case "auth/email-already-exists":
            setState("email is already exist, please try another address");
            break;
        case "auth/phone-number-already-exists":
            setState("phone number is already exist");
            break;
        case "auth/project-not-found":
            setState("firebase project not found");
            break;
        case "auth/insufficient-permission":
            setState("insufficient permisson, you are not allowed to do this");
            break;
        case "auth/internal-error":
            setState("an unknown error occured on the client");
            break;
        default:
            setState("");
            break;
    }
}

export function firerrGen(code: string, state: any) {
    switch (code) {
        case "auth/missing-email":
            state.value = "please insert an email address";
            break;
        case "auth/weak-password":
            state.value = "Password Must Be At Least 6 Characters";
            break;
        case "auth/email-already-in-use":
            state.value = "Email Is Already In Use, Please Try Different Email";
            break;
        case "auth/invalid-email":
            state.value = "Please Insert A Valid Email Address";
            break;
        case "auth/account-exists-with-different-credential":
            state.value = "Account is already exist with different credentials";
            break;
        case "auth/credential-already-in-use":
            state.value = "Credentials Is Already In use";
            break;
        case "auth/operation-not-supported-in-this-environment":
            state.value = "The Operation is not allowed/supported in this environment";
            break;
        case "auth/timeout":
            state.value = "Request timeout, try again later";
            break;
        case "auth/argument-error":
            state.value = "an unknown error occured";
            break;
        case "auth/invalid-persistence-type":
            state.value = "an unknown error occured";
            break;
        case "auth/unsupported-persistence-type":
            state.value = "an unknown error occured";
            break;
        case "auth/invalid-credential":
            state.value = "Invalid credentials";
            break;
        case "auth/wrong-password":
            state.value = "Wrong password";
            break;
        case "auth/invalid-verification-code":
            state.value = "Invalid verification code";
            break;
        case "auth/invalid-verification-id":
            state.value = "invalid verification id";
            break;
        case "auth/custom-token-mismatch":
            state.value = "custom token is mismatched";
            break;
        case "auth/invalid-custom-token":
            state.value = "invalid custom token";
            break;
        case "auth/captcha-check-failed":
            state.value = "captcha failed";
            break;
        case "auth/invalid-phone-number":
            state.value = "invalid phone number";
            break;
        case "auth/missing-phone-number":
            state.value = "please enter a phone number";
            break;
        case "auth/quota-exceeded":
            state.value = "authentication qota exceeded";
            break;
        case "auth/cancelled-popup-request":
            state.value = "cancelled popup authentication";
            break;
        case "auth/popup-blocked":
            state.value = "popup is blocked";
            break;
        case "auth/popup-closed-by-user":
            state.value = "popup window is closed by the user";
            break;
        case "auth/invalid-user-token":
            state.value = "invalid user token";
            break;
        case "auth/user-token-expired":
            state.value = "user token is expired";
            break;
        case "auth/null-user":
            state.value = "User is null";
            break;
        case "auth/invalid-api-key":
            state.value = "invalid api key";
            break;
        case "auth/network-request-failed":
            state.value = "can't connect to the server";
            break;
        case "auth/requires-recent-login":
            state.value = "Auth require recent login";
            break;
        case "auth/too-many-requests":
            state.value =
                "Too many request to the server right now, please try again later";
            break;
        case "auth/id-token-expired":
            state.value = "id token is expired";
            break;
        case "auth/invalid-creation-time":
            state.value = "invalid creation time, try again later";
            break;
        case "auth/invalid-display-name":
            state.value = "invalid username";
            break;
        case "auth/invalid-email-verified":
            state.value = "email is not yet verified";
            break;
        case "auth/invalid-id-token":
            state.value = "id token invalid";
            break;
        case "auth/invalid-password":
            state.value = "invalid password";
            break;
        case "auth/invalid-password-hash":
            state.value = "invalid password hash";
            break;
        case "auth/invalid-photo-url":
            state.value = "invalid user's profile picture";
            break;
        case "auth/invalid-provider-id":
            state.value = "invalid provider id";
            break;
        case "auth/invalid-session-cookie-duration":
            state.value = "session cookie duration is invalid";
            break;
        case "auth/invalid-uid":
            state.value = "invalid user id";
            break;
        case "auth/maximum-user-count-exceeded":
            state.value = "maximum user count is exceeded";
            break;
        case "auth/missing-uid":
            state.value = "missing user id";
            break;
        case "auth/session-cookie-revoked":
            state.value = "session cookie is revoked";
            break;
        case "auth/uid-alread-exists":
            state.value = "user id is already exist";
            break;
        case "auth/email-already-exists":
            state.value = "email is already exist, please try another address";
            break;
        case "auth/phone-number-already-exists":
            state.value = "phone number is already exist";
            break;
        case "auth/project-not-found":
            state.value = "firebase project not found";
            break;
        case "auth/insufficient-permission":
            state.value = "insufficient permisson, you are not allowed to do this";
            break;
        case "auth/internal-error":
            state.value = "an unknown error occured on the client";
            break;
        default:
            state.value = "";
            break;
    }
}
