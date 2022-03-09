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
export default function firerr(code: string, setState: any): void;
/**
 *
 * @param code Error Code e.g ...catch(err => firerrString(err.code))
 * @returns String of message
 */
export declare const firerrString: (code: string) => string;
