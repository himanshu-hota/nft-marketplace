import React from 'react';
import styled from "styled-components";
import subscribe from "../assets/subscribe.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Subsribe = () => {
  return (
    <Section>
        <div className="content">
            <h2>Subscribe to get update for new Offers</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam natus odit nisi repellendus. Laboriosam, adipisci amet itaque temporibus explicabo earum quia ratione modi tempore.</p>

            <div className="input-container">
                <input type="email" name="email" id="email" placeholder='Enter your email' />
                <BsFillArrowRightCircleFill />
            </div>
        </div>
          <div className="image">
              <img src={subscribe} alt="subsribe" />
          </div>
    </Section>
  )
}

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin: 0rem 9rem;
    margin-bottom: 5rem;
    .content{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 3rem;
        h2{
            font-size: 4rem;
        }
        p{
            color:#7b7e86;
            line-height: 2rem;
        }
        .input-container{
            padding: .5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: max-content;
            gap: 1rem;
            border: 1px solid #c4c4c4;
            border-radius: 3rem;
            input{  
                border: none;
                &:focus{
                    outline: none;
                }
                padding-left: 2rem;
                padding-right: 5rem;
                font-size: 1.3rem;
            }
            svg{
                color:#2d36fd;
                font-size: 3rem;
            }
        }
    }
      @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 0 2rem;
    gap: 2rem;
    margin-bottom: 2rem;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 80vw;
      }
    }
    .content {
      gap: 1rem;
      h2 {
        font-size: 2rem;
      }
      p {
        line-height: 1.4rem;
      }
      .input-container {
        display: none;
        width: max-content;
        input {
          width: 50%;
        }
      }
    }
  }
`;

export default Subsribe;