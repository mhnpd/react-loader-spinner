import styled from 'styled-components'

// eslint-disable-next-line tree-shaking/no-side-effects-in-initialization
export const SvgWrapper = styled.div<{ $visible: boolean }>`
  display: ${props => (props.$visible ? 'flex' : 'none')};
`
