import React from 'react';
import styled from 'styled-components'

const Button = ({ text, blue = false }) => {

    const btnClass = `${blue ? "blue" : ""}`;
    return (
        <Div>
            <button className={btnClass}>{text}</button>
        </Div>
    )
}

const Div = styled.div`
    button{
        border-radius: 4rem;
        padding: 0.8rem 2rem;
        border: none;
        color:#fff;
        font-size: 1.1rem;
        cursor: pointer;
        :not(.blue){
            background-color: transparent;
            border: 1px solid #fff;
        }
     
    }
   .blue{
            background-color: #2d69fd;
        }

`;

export default Button;