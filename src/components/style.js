import styled from "styled-components"
import { FaPen } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import {RiSave3Line} from 'react-icons/ri'


export const IconEdit = styled(FaPen)`

    position: absolute;
    font-size: 20px;
    margin-top: 10px;
    border: none;
    color: #951cce;
    top: 9%;
    right: 12%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
   
`

export const IconRemove = styled(FaRegTimesCircle)`

    position: absolute;
    font-size: 30px;
    margin-top: 10px;

    border: none;
    color: #951cce;
    top: 0%;
    right: 2%;
`
export const IconAdd = styled(IoMdAdd)`
    position: absolute;
    width: 50px;
    height: 45px;
    border-radius: 3px 3px 3px 3px;
    margin-top: 20px;
    margin-left: 15px;
    border: none;
    background-color: #9c5bba;
    color: white;
    top: 53%;
    cursor: pointer;
`
export const IconSave = styled(RiSave3Line)`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 3px 3px 3px 3px;
    margin-top: 20px;
    margin-left: 15px;
    border: none;
    background-color: #9c5bba;
    color: white;
    top: 10%;
    cursor: pointer;
`