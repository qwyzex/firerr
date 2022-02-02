# FirErr

FirErr is a package for catching Firebase Errors that often occurs. Firebase can only send one response at a time, so catching it _one-by-one_ is not that bad, I think.

## 🤔 Usage

You can use it by defining a state, or variables that store the Firebase Error Message :

```
import { useState } from "react";

const [formError, setFormError] = useState("");
```

Then do some 🔥 Firebase Stuff :

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
    })
}
```

> 🥶 Idk who install this package tho... 
> This is my very first NPM Package.
> I am very sorry if there's a problem! I'm only 14 yo, 15 next September 🤧
>
> \- qwyzex, 2022
