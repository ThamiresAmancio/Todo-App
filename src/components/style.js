import styled from "styled-components"
import { FaPen } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RiSave3Line } from 'react-icons/ri'
import { AiFillCheckCircle } from 'react-icons/ai'

export const Titutlo = styled.div`
    width: 750px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    >h1{
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 40px;
        line-height: 1.8;
    }

`

export const Container = styled.div`
    width: 750px;
    height: auto;
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const Forms = styled.div`
    width: 550px;
    height: 60px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;

    >input{
        width: 500px;
        height: 45px;
        border: 2px solid #9c5bba;
        font-size: 1.2em;
    }

`

export const FormsEdit = styled.div`
    width: 550px;
    height: 60px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;

    >input{
        width: 270px;
    height: 45px;
    border: 2px solid #9c5bba;
    font-size: 1.2em;
    margin-left: 80px;
    margin-top: 15px;
    }

`
export const Tasks = styled.div`
    position: relative;
    min-width: 550px;
    width: auto;
    min-height: 70px;
    height: auto;
    background-color: #fff;
    margin-top: 20px;
    margin-bottom: 35px;

    >p{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        color: #9c5bba;
        font-size: 1.3em;
    }
`


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

export const IconCheck = styled(AiFillCheckCircle)`

    position: absolute;
    font-size: 30px;
    margin-top: 10px;

    border: none;
    color: #951cce;
    top: 18%;
    right: 90%;
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
