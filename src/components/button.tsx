import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const disabledColor = '#8A8887'

export interface ButtonProps {
  color: string
  external?: boolean
  disabled?: boolean
  label?: string
  link?: string
}

const DisabledButton = styled.div`
  background-color: var(--bkg);
  color: ${disabledColor} !important;

  border-color: ${disabledColor};
  border-width: 1px;
  border-style: solid;
  border-radius: 25px;

  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 18px;
  text-align: center;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 2px 25px 0;

  user-select: none;
  transition: 0.1s ease-in;
`

const StyledButton = styled(Link)<{ color: string }>`
  background-color: ${(props) => props.color};
  color: var(--white) !important;

  border-color: ${(props) => props.color};
  border-width: 1px;
  border-style: solid;
  border-radius: 25px;

  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 18px;
  text-align: center;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 2px 25px 0;

  user-select: none;

  transition: 0.1s ease-in;

  &:hover {
    background-color: var(--bkg);
    color: ${(props) => props.color} !important;
  }
`

const StyledAnchor = styled.a<{ color: string }>`
  background-color: ${(props) => props.color};
  color: var(--white) !important;

  border-color: ${(props) => props.color};
  border-width: 1px;
  border-style: solid;
  border-radius: 25px;

  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 18px;
  text-align: center;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 2px 25px 0;

  user-select: none;

  transition: 0.1s ease-in;

  &:hover {
    background-color: var(--bkg);
    color: ${(props) => props.color} !important;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  margin-top: -2px;
  margin-right: -5px;
`

const Button = ({ color, label, link = '/', external = false, disabled }: ButtonProps) => {
  if (disabled) {
    return <DisabledButton>{label?.toUpperCase()}</DisabledButton>
  } else if (external) {
    return (
      <StyledAnchor
        target='_blank'
        rel='noopener noreferrer external'
        href={link}
        color={disabled ? disabledColor : color}
      >
        {label?.toUpperCase()}
        <StyledIcon icon={faExternalLinkAlt} size='1x' />
      </StyledAnchor>
    )
  }
  return (
    <StyledButton to={link} color={color}>
      {label?.toUpperCase()}
    </StyledButton>
  )
}

export default Button
