import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from '@reach/router'
import { center } from 'utils/cssExtends'
import { Button } from './Button'

const ButtonLink = ({ ...props }) => <Button as={Link} {...props} />

const Tab = styled(ButtonLink)(
  ({ theme }) => css`
    padding: 18px 24px;
    color: ${theme.textColor.muted};
    font-size: ${theme.fontSize.title};
    border-right: ${theme.borders.base};

    &:last-of-type {
      border-right: none;
    }

    &[aria-current='page'] {
      color: ${theme.textColor.primary};
      font-weight: bold;
    }
  `
)

const Tabs = styled.div(
  ({ theme }) => css`
    ${center}
    justify-content: flex-start;
    border-bottom: ${theme.borders.base};
  `
)

export { Tab, Tabs }
