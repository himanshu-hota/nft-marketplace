import React from 'react';
import Navbar from "./Navbar";
import styled from 'styled-components';
import heroText from '.././assets/heroText.png';
import Button from "./Button";
import hero from '.././assets/hero.png';


const Home = () => {
  return (
    <Section>
      <Navbar />

      <div className="ellipse" />
      <div className="container">
        <div className="content">
          <h1>Explore Our
            <span>
              <img src={heroText} alt="Bull" />
            </span>
            Hero Text Digital NFT Market Place</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, corporis voluptas sed .</p>

          <div className="buttons">
            <Button text='Explore Now' blue />
            <Button text='Create NFT' />
          </div>
          <div className="data">
            <div className="dataTab">
              <h2>40k</h2>
              <h5>ArtWork</h5>
            </div>
            <div className="dataTab">
              <h2>12k</h2>
              <h5>Auction</h5>
            </div>

            <div className="dataTab">
              <h2>20k</h2>
              <h5>Artist</h5>
            </div>
          </div>

        </div>
        <div className="image">
          <img src={hero} alt="Hero" />
        </div>
      </div>


    </Section>
  )
}

export const Section = styled.div`
  margin: .5rem;
  background-color: #232835;
  border-radius: 1rem;
  padding: 0;
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;
  .ellipse{
    /* display: none; */
    height: 30rem;
    width: 30rem;
    background-color: #aa54c27d;
    opacity: 0.5;
    border-radius: 100%;
    filter: blur(2000px);
    position: absolute;
    bottom: -30%;
    left: -10%;
    z-index: 1;
  }
  .container{
    padding: 2rem;
    margin: 0rem 2px;
    display: flex;
    .content{
      z-index: 10;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 5px;
      padding-right: 2rem;
      h1{
        color:white;
        font-size: 5rem;
      }
      p{
        color:#a6a6a6;
      }
      .buttons{
        display: flex;
        gap: 2rem;
      }
      .data{
        display: flex;
        gap: 5rem;
        .dataTab{
          display: flex;
          flex-direction: column;
          gap: 1rem;
          h2{
            color:white;
            font-size: 2rem;
          }
          h5{
            text-align: center;
            color:#a6a6a6;
          }
          
        }
      }

    }
      .image{
        img{
          height:40rem ;
        }
  }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    border-radius: 0;
    .container {
      flex-direction: column;
      margin: 0;
      padding: 2rem;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      .content {
        padding-right: 0;
        h1 {
          font-size: 3rem;
          span {
            img {
              height: 2rem;
            }
          }
        }
        .buttons {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .data {
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }
      }
      .image {
        img {
          height: 15rem;
        }
      }
    }
  }
`;

export default Home;