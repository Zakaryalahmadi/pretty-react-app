import React from "react";
import styled from "styled-components";
// import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        {/* <Image src="{App}" /> */}
      </Left>
      <Right>
        <Title>
          <b>Un bon</b> design
          <br />
          <b>Un bon</b> business
        </Title>
        <SubTitle>Nous savons qu'un bon design signifie de bonnes affaires.</SubTitle>
        <Desc>
          Nous aidons nos clients à réussir en créant des identités de marque, des
           expériences et imprimez des documents qui communiquent clairement, réalisent
           objectifs de marketing et un look fantastique
        </Desc>
        <Desc>
          Nous nous soucions de votre entreprise et vous garantissons d'atteindre vos objectifs marketing.
        </Desc>
        <Button>Plus..</Button>
      </Right>
      <AnimatedShapes/>
    </Container>
  );
};

export default Feature;
