import React from "react";
import styled from "styled-components";
const { SDS } = require("aws-sds");

const Login = () => {
  function messageClick() {
    (async () => {
      console.log("clicked!");
      let sds = new SDS("tmb-pokedex-app", "us-east-1");

      let users = sds.collection("trainer-infos");

      let mort = users.doc();
      //list out all the docs in the current collection. Default is up to
      //100 docs
      let onlyMort = await users.list();
      console.log("onlyMort", onlyMort);
      //without the ability to add data what are we even doing here...
      let mortDeets = await mort.set({ name: "mort", job: "mortician" });
      //and if there's an update...
      mortDeets = await mort.update({ likes: ["burgers"] });
      console.log("mortDeets", mortDeets);
    })();
  }

  return (
    <LoginContainer>
      LoginContainer
      <Button onClick={messageClick}>Click me!</Button>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div``;

const Button = styled.button``;
