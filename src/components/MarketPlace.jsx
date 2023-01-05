import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

import styled from "styled-components";
import marketplace1 from "../assets/marketplace1.png";
import marketplace2 from "../assets/marketplace2.png";
import marketplace3 from "../assets/marketplace3.png";
import marketplace4 from "../assets/marketplace4.png";
import marketplace5 from "../assets/marketplace5.png";
import marketplace6 from "../assets/marketplace6.png";
import marketplace7 from "../assets/marketplace7.png";
import marketplace8 from "../assets/marketplace8.png";
import Button from "./Button";

const marketPlaceData = [
    {
        image: marketplace1,
        name: "Aiboi-meta",
    },
    {
        image: marketplace2,
        name: "Pedram-mohamm...",
    },
    {
        image: marketplace3,
        name: "Eduardo-pena",
    },
    {
        image: marketplace4,
        name: "Daeho-cha",
    },
    {
        image: marketplace5,
        name: "Justine-florentino",
    },
    {
        image: marketplace6,
        name: "Hoang-l-p-solan",
    },
    {
        image: marketplace7,
        name: "Joshua-jay",
    },
    {
        image: marketplace8,
        name: "Joshua-jay",
    },
];
const marketPlaceType = [
    "All",
    "Art",
    "Generic",
    "Common",
    "Trading",
    "Rare",
];

const MarketPlace = () => {
    return (
        <Section>
            <div className="title">
                <h2>NFT Marketplace</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam maxime accusamus eligendi illo asperiores qui soluta.</p>
            </div>
            <div className="marketPlaceTypes">
                {
                    marketPlaceType.map((text, index) => {
                        return <Button text={text} blue={index === 0} key={index+'dfa'} />
                    })
                }
            </div>

            <div className="marketPlaces">
                {
                    marketPlaceData.map(({ image, name },idx) => {
                        return (
                            <div className="marketPlace" key={idx+'sd'}>
                                <div className="image">
                                    <img src={image} alt="marketplace" />
                                </div>
                                <div className="name">
                                    <h4>{name}</h4>
                                    <BsThreeDots />
                                </div>
                                <h5 className="username">
                                    @himanshuhota01
                                </h5>
                                <div className="priceContainer">
                                    <h5 className="price">
                                        5.5ETH
                                        <FaEthereum />
                                    </h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin: 0rem 6px;
    margin-bottom: 5px;
    .title{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        justify-content: center;

        h2{
            font-size: 3rem;
        }

        p{
            color:#7b7e86;
        }

    }
        .marketPlaceTypes{
            display: flex;
            justify-content: center;
            gap: 2rem;
            button:not(.blue){
                color: black;
                border-color :#7b7e76 ;
            }
        }

        .marketPlaces{
            display: grid;
            grid-template-columns: repeat(4,1fr);
            gap: 2rem;
            
            .marketPlace{
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 27px 0px;
                padding: 0.5rem;
                border-radius: 1rem;
                width:max-content;
                cursor: pointer;
                transition: .5s ease-in-out ;
                &:hover{
                     box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
                }

                .image{
                    margin-bottom: 1rem;
                }
                .name{
                    display: flex;
                    color: #222222;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0rem 1rem;

                }
                .username{
                    color:#555555;
                    font-size: .8rem;
                    padding: 0rem 1rem;
                    margin-bottom: 0.5rem;
                }
                .priceContainer{
                    padding: 0rem 1rem;
                    color:#02204e;
                    .price{
                    display: flex;
                    justify-content: space-between;
                    }
                }

            }

        }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .marketPlaceTypes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    .marketPlaces {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default MarketPlace;