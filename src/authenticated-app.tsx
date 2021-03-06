import styled from "@emotion/styled";
import { Row } from "components/lib";
import { useAuth } from "context/auth-context";
import React from "react";
import { ProjectListScreen } from "screens/project-list";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectScreen } from "screens/project";
import { resetRoute } from "utils/http";
export const AuthenticatedApp = () => {
  return (
    <Container>
      <PageHeader></PageHeader>
      <Main>
        {/* <ProjectListScreen></ProjectListScreen> */}
        <Router>
          <Routes>
            <Route path={"/projects"} element={<ProjectListScreen />} />
            <Route
              path={"/projects/:projectId/*"}
              element={<ProjectScreen />}
            />
            <Navigate to={"/projects"}></Navigate>
          </Routes>
        </Router>
      </Main>
    </Container>
  );
};

const PageHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <Button type={"link"} onClick={resetRoute}>
          <SoftwareLogo width="18rem" color="rgb(38,132,255)"></SoftwareLogo>
        </Button>

        <h3>项目</h3>
        <h3>用户</h3>
      </HeaderLeft>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key={"logout"}>
              <Button type="link" onClick={logout}>
                登出
              </Button>
            </Menu.Item>
          </Menu>
        }
      >
        <Button type="link" onClick={(e) => e.preventDefault()}>
          Hi,{user?.name}
        </Button>
      </Dropdown>
    </Header>
  );
};

// rows每行的高度 columns 每列宽度
const Container = styled.div`
  /* display:grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 20rem 1fr 20rem; */
  height: 100vh;
`;
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const Main = styled.main`
  grid-area: main;
`;
