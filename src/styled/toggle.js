import styled from 'styled-components';
import sun from '../images/sun.svg';
import moon from '../images/moon.svg';

export const Toggle = styled.div`
width: 48px;
height: 32px;
background-color: #575757;
border-radius: 30px;
display: flex;
align-items: center;
position: relative;
cursor: pointer;

&:before{
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  transition: left 100ms linear;
  background-color: ${(props) => (props.isDark ? 'white' : '#575757')};
  border-radius: 30px;
  border-color: ${(props) => (props.isDark ? '#DDDDDD' : '#707070')};
  border-width: 2px;
  left: ${(props) => (props.isDark ? '0' : '17px')};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

&:after{
  content: url(${(props) => (props.isDark ? sun : moon)});
  position: absolute;
  transition: left 100ms linear;
  left: ${(props) => (props.isDark ? '5px' : '25px')};
  top: 5px;
}`;