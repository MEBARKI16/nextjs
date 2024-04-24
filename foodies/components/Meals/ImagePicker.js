"use client"
import React, { useRef } from 'react'
import classes from "./imagePicker.module.css"
const imagePicker = ({ label, name }) => {
    const imageRef = useRef();
    const HandleClick = () => {
        imageRef.current.click();
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <input ref={imageRef} className={classes.input} type="file" name={name} id={name} accept="image/png, image/jpeg" />
                <button className={classes.button} onClick={HandleClick} type="button">choisir une image</button>
            </div>
        </div>
    )
}

export default imagePicker;