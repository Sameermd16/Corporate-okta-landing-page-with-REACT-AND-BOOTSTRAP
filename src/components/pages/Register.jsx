import { useRef, useState, useEffect } from 'react'
// import * as fcIcons from 'react-icons/fc'
import { FcInfo, FcCheckmark } from 'react-icons/fc'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/; 
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;