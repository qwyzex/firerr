# FirErr

FirErr is a package for catching Firebase Errors that often pop in development. Firebase can only send one response at a time, so catching it _one-by-one_ is not that bad, I think.

## Usage

You can use it by defining a state, or variables that store the Firebase Error Message :

```
import { useState } from "react";

const [formError, setFormError] = useState("");
```

Then do some Firebase Stuff :

```
async function login(e) {
    e.preventDefault()
    await createUserWithEmailAndPassword(
        auth, formEmail, formPassword
    ).then(() => {
        // finish
    }).catch((error) => {
        const code = error.code;
        firerr(code, formError)
        // with 'formError' is the variables that we specified earlier
    })
}
```
