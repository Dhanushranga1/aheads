import { HTMLAttributes } from "react";
import {cva } from "class-variance-authority"//an easy way to apply classes to our button


const classes = cva("rounded-full font-medium-open-sans", {
    variants: {
        variant: {
            primary: "bg-gradient-to-r from-orange-500 to-blue-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-orange-600 transition duration-300 shadow-lg transform hover:scale-105",
            secondary: "text-black hover:text-white bg-gray-200 hover:bg-blue-500 px-4 py-2 rounded-full transition duration-300"
        }
    }
});
export default function Button(props: {variant : "primary"| "secondary"}  & HTMLAttributes<HTMLButtonElement>){
    const {variant, className, ...otherProps} = props;
    return <button className={classes({ variant, className, })}{...otherProps}></button>
}