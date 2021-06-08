import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &:hover .itemNav {
    background-color: #32A287!important;
    color: white!important;
  }

  &:hover circle {
    fill: #32A287
  }

  &:hover path {
    fill: white
  }
`