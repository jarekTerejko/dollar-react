import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkScroll} from 'react-scroll'
import {Link as LinkRouter} from 'react-router-dom'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1.8rem;
`;


export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    grid-template-rows: repeat(5, 60px);


    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(5, 50px);
    }
`

export const SidebarMenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SidebarLink = styled(LinkScroll)`
    padding: 5px;
    font-size: 1.5rem;
    text-decoration: none;
    transition: .3s;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #01bf71;
    }
`

export const SideBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`



export const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #cd6133;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: .3s;
    text-decoration: none;

    &:hover{
        background: #fff;
        color: #010606;
    }
`
