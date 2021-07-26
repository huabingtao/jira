import { SearchPanel } from "./search-panel";
import { useState } from "react";
import { List } from "./list";
import { useDebounce, useDocumentTitle, useMount } from "utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
import { useUrlQueryParam } from "utils/url";
export const ProjectListScreen = () => {
  // 基本类型 组件状态可以放到依赖里，费组件状态对象，绝不可以放到依赖里
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  const debouncedParam = useDebounce(param, 300);

  const { isLoading, error, data: list } = useProjects(debouncedParam);

  const { data: users } = useUsers();
  useDocumentTitle("骑手列表", false);

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel
        users={users || []}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <List
        users={users || []}
        dataSource={list || []}
        loading={isLoading}
      ></List>
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = true;

const Container = styled.div`
  padding: 3.2rem;
`;
