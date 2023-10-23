import { Link } from "react-router-dom"
import "./GlobalStyle.scss"
import styled, { keyframes } from "styled-components"

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.3rem;
  &:hover {
    color: $primary-color;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  background: linear-gradient($primary-color, transparent);
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  ::after {
    content: "";
    width: 25px;
    height: 25px;
    background: white;
    position: absolute;
    border-radius: 50%;
  }
`
