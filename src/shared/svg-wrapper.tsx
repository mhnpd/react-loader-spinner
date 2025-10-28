import styled from 'styled-components'

export const SvgWrapper = styled.div<{ $visible: boolean }>`
  display: ${props => (props.$visible ? 'flex' : 'none')};
`
