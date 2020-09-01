import styled from 'styled-components'

export const Container = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    background: ${props => props.color || '#fff'};
    border: 1px solid #ccc;
`