"use client"
import React, { useRef, useState } from 'react'
import classes from "./imagePicker.module.css"
import Image from 'next/image';
const imagePicker = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState();
    const imageRef = useRef();
    const HandleClick = () => {
        imageRef.current.click();
    }
    const HandleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        const fileRider = new FileReader();
        fileRider.onload = () => {
            setPickedImage(fileRider.result)
            console.log(pickedImage)
        }
        fileRider.readAsDataURL(file)
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>aucune image sélectionnée pour l'instant.</p>}
                    {pickedImage && <Image src={pickedImage} fill />}
                </div>
                <input onChange={HandleImageChange} ref={imageRef} className={classes.input} type="file" name={name} id={name} accept="image/png, image/jpeg" />
                <button className={classes.button} onClick={HandleClick} type="button">choisir une image</button>
            </div>
        </div>
    )
}

export default imagePicker;