import React from 'react'
import { ButtonComp } from './ButtonComp'

export const AboutComp = () => {
    return (
        <div>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis earum accusamus suscipit provident. Enim ut deleniti harum. Vitae assumenda deserunt libero ea eligendi praesentium perferendis rem deleniti autem magnam?</p>
            <ButtonComp btnContent="About Btn" clr="green"/>
        </div>
    )
}
