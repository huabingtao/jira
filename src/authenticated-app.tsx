import styled from "@emotion/styled";
import { useAuth } from "context/auth-context";
import React from "react";
import { ProjectListScreen } from "screens/project-list";
export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header>
        <button onClick={logout}>登出</button>
      </Header>
      <Main>
        <ProjectListScreen></ProjectListScreen>
      </Main>
    </Container>
  );
};

// const PageHeader = styled.header`
//   height: 6rem;

// `
// const Main = styled.main`
//   height: calc(100vh-6rem);
// `
// rows每行的高度 columns 每列宽度
const Container = styled.div`
  /* display:grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 20rem 1fr 20rem; */
  height: 100vh;
`;
const Header = styled.header`
  grid-area: header;
`;
const Main = styled.main`
  grid-area: main;
`;
