/**
 * Declare a variable and Catch Firebase Error Response
 * @param code The error code response from Firebse (const code = error.code)
 * @param setState The state or variables (if you prefer) for storing the Error Value
 * @example
 * ````jsx
 * .catch((err) => {
 *     firerr(err.code, setError)
 * })
 * ````
 */
export default function firerr(code: string, setState: any) {
    switch (code) {
        case "auth/user-not-found":
            setState("User not found, please register/signup first!");
            break;
        case "auth/missing-email":
            setState("Please insert an email address");
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
        case "auth/invalid-persistence-type":
        case "auth/unsupported-persistence-type":
            setState("An unknown error occured");
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
            setState("Invalid verification ID");
            break;
        case "auth/custom-token-mismatch":
            setState("Custom token is mismatched");
            break;
        case "auth/invalid-custom-token":
            setState("Invalid custom token");
            break;
        case "auth/captcha-check-failed":
            setState("Captcha failed");
            break;
        case "auth/invalid-phone-number":
            setState("Invalid phone number");
            break;
        case "auth/missing-phone-number":
            setState("Please enter a phone number");
            break;
        case "auth/quota-exceeded":
            setState("Authentication qota exceeded");
            break;
        case "auth/cancelled-popup-request":
            setState("Cancelled popup authentication");
            break;
        case "auth/popup-blocked":
            setState("Popup is blocked");
            break;
        case "auth/popup-closed-by-user":
            setState("Popup window is closed by the user");
            break;
        case "auth/invalid-user-token":
            setState("Invalid user token");
            break;
        case "auth/user-token-expired":
            setState("User token is expired");
            break;
        case "auth/null-user":
            setState("User is null");
            break;
        case "auth/invalid-api-key":
            setState("Invalid api key");
            break;
        case "auth/network-request-failed":
            setState("Can't connect to the server");
            break;
        case "auth/requires-recent-login":
            setState("Auth require recent login");
            break;
        case "auth/too-many-requests":
            setState("Account is temporarily disabled due to too many request");
            break;
        case "auth/id-token-expired":
            setState("ID token is expired");
            break;
        case "auth/invalid-creation-time":
            setState("Invalid creation time, try again later");
            break;
        case "auth/invalid-display-name":
            setState("Invalid username");
            break;
        case "auth/invalid-email-verified":
            setState("Email is not yet verified");
            break;
        case "auth/invalid-id-token":
            setState("ID token invalid");
            break;
        case "auth/invalid-password":
            setState("Invalid password");
            break;
        case "auth/invalid-password-hash":
            setState("Invalid password hash");
            break;
        case "auth/invalid-photo-url":
            setState("Invalid user's profile picture");
            break;
        case "auth/invalid-provider-id":
            setState("Invalid provider id");
            break;
        case "auth/invalid-session-cookie-duration":
            setState("Session cookie duration is invalid");
            break;
        case "auth/invalid-uid":
            setState("Invalid user id");
            break;
        case "auth/maximum-user-count-exceeded":
            setState("Maximum user count is exceeded");
            break;
        case "auth/missing-uid":
            setState("Missing user AD");
            break;
        case "auth/session-cookie-revoked":
            setState("Session cookie is revoked");
            break;
        case "auth/uid-alread-exists":
            setState("User id is already exist");
            break;
        case "auth/email-already-exists":
            setState("Email is already exist, please try another email address");
            break;
        case "auth/phone-number-already-exists":
            setState("Phone number is already exist, please use another phone number");
            break;
        case "auth/project-not-found":
            setState("Firebase project not found");
            break;
        case "auth/insufficient-permission":
            setState("Insufficient permisson, you are not allowed to do this operation");
            break;
        case "auth/internal-error":
            setState("An error occured on the client");
            break;
        default:
            setState("");
            break;
    }
}

/**
 *
 * @param code Error Code e.g ...catch(err => firerrString(err.code))
 * @returns String of message
 */
export const firerrString = (code: string) => {
    switch (code) {
        case "auth/admin-restricted-operation":
            return "This operation is restricted to administrators only.";
        case "auth/argument-error":
            return "An invalid argument was provided to the function.";
        case "auth/app-not-authorized":
            return "This app is not authorized to use Firebase Authentication.";
        case "auth/app-not-installed":
            return "This app is not installed on the device.";
        case "auth/captcha-check-failed":
            return "The recaptcha verification failed.";
        case "auth/code-expired":
            return "The code has expired. Please re-send the verification code to try again.";
        case "auth/cordova-not-ready":
            return "Cordova is not ready.";
        case "auth/cors-unsupported":
            return "This browser is not supported.";
        case "auth/credential-already-in-use":
            return "This credential is already associated with a different user account.";
        case "auth/custom-token-mismatch":
            return "The custom token corresponds to a different audience.";
        case "auth/requires-recent-login":
            return "This operation is sensitive and requires recent authentication. Log in again before retrying this request.";
        case "auth/dependent-sdk-initialized-before-auth":
            return "The dependent SDKs must be initialized before the Firebase Auth SDK itself.";
        case "auth/dynamic-link-not-activated":
            return "The dynamic link has not been activated.";
        case "auth/email-change-needs-verification":
            return "The email address is changed, but the change needs to be verified. Check the verification email sent to the original email address.";
        case "auth/email-already-in-use":
            return "The email address is already in use by another account.";
        case "auth/emulator-config-failed":
            return "The emulator is not configured correctly. See the Firebase documentation for instructions.";
        case "auth/expired-action-code":
            return (
                "The action code has expired. " +
                "Please resend the verification code to try again."
            );
        case "auth/cancelled-popup-request":
            return "The popup has been closed by the user.";
        case "auth/internal-error":
            return "An internal error has occurred.";
        case "auth/invalid-api-key":
            return "Your API key is invalid, please check you have copied it correctly.";
        case "auth/invalid-app-credential":
            return "The phone verification request contains an invalid application verification credential.";
        case "auth/invalid-app-id":
            return "The app identifier is not valid. Please check the documentation.";
        case "auth/invalid-user-token":
            return "The user's credential is no longer valid. The user must sign in again.";
        case "auth/invalid-auth-event":
            return "An internal error has occurred.";
        case "auth/invalid-cert-hash":
            return "The SHA-1 certificate hash provided is invalid. Please check the certificate SHA-1 fingerprint and SHA-256 fingerprint.";
        case "auth/invalid-verification-code":
            return "The verification code used to create the phone auth credential is invalid. Please resend the verification code smedially.";
        case "auth/invalid-continue-uri":
            return "The continue URL provided in the request is invalid.";
        case "auth/invalid-cordova-configuration":
            return "The Cordova config.xml is invalid. Please check the documentation.";
        case "auth/invalid-custom-token":
            return "The custom token format is invalid. Please check the documentation.";
        case "auth/invalid-dynamic-link-domain":
            return "The dynamic link domain is not configured or authorized.";
        case "auth/invalid-email":
            return "The email address is invalid.";
        case "auth/invalid-emulator-scheme":
            return "The emulator scheme is not valid. Please check the documentation.";
        case "auth/invalid-credential":
            return "The supplied auth credential is malformed or has expired.";
        case "auth/invalid-message-payload":
            return "The email template contains invalid characters.";
        case "auth/invalid-multi-factor-session":
            return "The multi-factor session is invalid.";
        case "auth/invalid-oauth-client-id":
            return "The OAuth client ID provided is invalid.";
        case "auth/invalid-oauth-provider":
            return "The OAuth provider is invalid.";
        case "auth/invalid-action-code":
            return "The action code is invalid. Please check the documentation.";
        case "auth/unauthorized-domain":
            return "The domain of the continue URL is not whitelisted. Please whitelist the domain in the Firebase console.";
        case "auth/wrong-password":
            return "The password is invalid or the user does not have a password.";
        case "auth/invalid-persistence-type":
            return "The specified persistence type is invalid. Please check the documentation.";
        case "auth/invalid-phone-number":
            return "The phone number has an invalid format. Please check the documentation.";
        case "auth/invalid-provider-id":
            return "The provider ID is invalid.";
        case "auth/invalid-recipient-email":
            return "The recipient email is invalid.";
        case "auth/invalid-sender":
            return "The email address is invalid.";
        case "auth/invalid-verification-id":
            return "The verification ID used to create the phone auth credential is invalid.";
        case "auth/invalid-tenant-id":
            return "The tenant ID is invalid.";
        case "auth/multi-factor-info-not-found":
            return "The multi-factor information for this user is not found.";
        case "auth/multi-factor-auth-required":
            return "This operation requires multi-factor authentication.";
        case "auth/missing-android-pkg-name":
            return "An Android Package Name must be provided.";
        case "auth/missing-app-credential":
            return "The phone verification request is missing an application verification credential.";
        case "auth/auth-domain-config-required":
            return "This operation is sensitive and requires the Auth Domain to be configured.";
        case "auth/missing-verification-code":
            return "The phone verification code is missing.";
        case "auth/missing-continue-uri":
            return "The continue URL is missing.";
        case "auth/missing-iframe-start":
            return "An internal error has occurred.";
        case "auth/missing-ios-bundle-id":
            return "An iOS Bundle ID must be provided.";
        case "auth/missing-or-invalid-nonce":
            return "The nonce is missing or invalid.";
        case "auth/missing-multi-factor-info":
            return "The multi-factor information is missing or invalid.";
        case "auth/missing-multi-factor-session":
            return "The multi-factor session is missing.";
        case "auth/missing-phone-number":
            return "The phone number is missing.";
        case "auth/missing-verification-id":
            return "The verification ID is missing.";
        case "auth/app-deleted":
            return "This instance of Firebase Auth has been deleted.";
        case "auth/account-exists-with-different-credential":
            return "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.";
        case "auth/network-request-failed":
            return "Can't connect to the server! Please check your internet connection.";
        case "auth/null-user":
            return "A null user object was passed as the argument.";
        case "auth/no-auth-event":
            return "An internal error has occurred.";
        case "auth/no-such-provider":
            return "The provider ID passed does not exist.";
        case "auth/operation-not-allowed":
            return "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.";
        case "auth/operation-not-supported-in-this-environment":
            return "This operation is not supported in the environment this application is running on.";
        case "auth/popup-blocked":
            return "The popup was blocked by the browser.";
        case "auth/popup-closed-by-user":
            return "The popup was closed by the user.";
        case "auth/provider-already-linked":
            return "The user already has an account with the given provider.";
        case "auth/quota-exceeded":
            return "The Databases service has encountered an error. Please try again later.";
        case "auth/redirect-cancelled-by-user":
            return "The redirect operation has been cancelled by the user.";
        case "auth/redirect-operation-pending":
            return "A redirect operation is already pending.";
        case "auth/rejected-credential":
            return "The request contains malformed or invalid authentication credentials.";
        case "auth/second-factor-already-in-use":
            return "The second factor is already enrolled for this user.";
        case "auth/maximum-second-factor-count-exceeded":
            return "The maximum number of second factors has been reached for this user.";
        case "auth/tenant-id-mismatch":
            return "The provided tenant ID does not match the authenticated user.";
        case "auth/timeout":
            return "The operation has timed out.";
        case "auth/user-token-expired":
            return "The user's credential is no longer valid. The user must sign in again.";
        case "auth/too-many-requests":
            return "We have blocked all requests from this device due to unusual activity. Try again later.";
        case "auth/unauthorized-continue-uri":
            return "The continue URL is not whitelisted. Please whitelist the URL in the Firebase console.";
        case "auth/unsupported-first-factor":
            return "The first factor is not supported for this user.";
        case "auth/unsupported-persistence-type":
            return "The specified persistence type is not supported.";
        case "auth/unsupported-tenant-operation":
            return "This operation is not supported in a multi-tenant context.";
        case "auth/unverified-email":
            return "The email address is unverified.";
        case "auth/user-cancelled":
            return "The user did not successfully complete the verification process.";
        case "auth/user-not-found":
            return "The user account does not exist.";
        case "auth/user-disabled":
            return "The user account has been disabled by an administrator.";
        case "auth/user-mismatch":
            return "The user account has changed since the last login.";
        case "auth/user-signed-out":
            return "The user is signed out.";
        case "auth/weak-password":
            return "Password must be at least 6 characters long.";
        case "auth/web-storage-unsupported":
            return "This browser is not supported or 3rd party cookies are not enabled.";
        case "auth/already-initialized":
            return "The Firebase Auth instance has already been initialized.";
        default:
            return "An unknown error occurred.";
    }
};
