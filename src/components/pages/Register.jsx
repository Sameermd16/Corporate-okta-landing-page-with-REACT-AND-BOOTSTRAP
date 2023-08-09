import { useState, useEffect, useRef } from 'react'
// import * as fcIcons from 'react-icons/fc'
import { FcInfo, FcCheckmark } from 'react-icons/fc'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/; 
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


export default function Register() {
    const userRef = useRef()
    const errRef = useRef()

    //username
    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    //password
    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    //confirm password
    const [matchPwd, setMatchPwd] = useState(false)
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false) 

    //message => eror or success
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    // first time when the component loads -> directly focus on the user field
    useEffect(() => {
        userRef.current.focus()
    }, [])

    //whenever user field changes we need to check whether its valid
    useEffect(() => {
        const result = USER_REGEX.test(user) //testing whether user is valid or not => .test() returns boolean
        setValidName(result)
    }, [user])

    //when password field changes, checking whether its valid
    useEffect(() => {
            const result = PWD_REGEX.test(pwd) //returns boolean true or false
            setValidPwd(result)
            const match = pwd === matchPwd  //returns boolean -> need to check password matches the confirm password
            setValidMatch(match)
    }, [pwd, matchPwd])

    //user saw the error msg => now user changes the fields to rectify -> we need to remove error message
    //look out for all 3 state changes
    useEffect(() => {
        //empty the error state 
        setErrMsg('')
    }, [pwd, matchPwd, user])
  
    return (
        <section>
            {/* aria-live=”polite" — This setting tells the screen reader to provide updates when the user is idle. aria-live=”assertive" — This setting tells the screen reader that the information is critically important or time sensitive. */}
            <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'> {errMsg} </p> 
            <h1>Register</h1>
            <form>
                <label htmlFor='username'>Username: 
                    <span className={validName ? 'valid' : 'hide'}>
                        <FcCheckmark />
                    </span>
                </label>
                <input
                    type='text'
                    required
                    ref={userRef}
                    autoComplete='off'
                    id='username'
                    name='username'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby='uidnote'
                />
                <p id='uidnote' className={userFocus && user && !validName ? 'instructions' : 'offscreen'}>
                    <FcInfo /> 
                    4 to 24 characters. <br />
                    Letters, numbers, underscores, hyphens allowed. <br />
                </p>
            </form>
        </section>
    )
}