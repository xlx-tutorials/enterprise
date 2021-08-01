import { css } from '@emotion/react'
import Image from 'components/Image'
import { Label, Labels } from 'components/Label'
import { row } from 'utils/cssExtends'
import { themeCSS } from 'utils/themeCSS'

const listItemCSS = themeCSS(
  (theme) => css`
    ${row}
    padding: 40px;
    border-bottom: ${theme.borders.base};
    cursor: pointer;

    &:last-of-type {
      border-bottom: none;
    }

    .left {
      margin-right: 40px;
    }

    .title {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .labels {
      margin-bottom: 16px;
    }

    .info {
      margin-bottom: 12px;
      color: ${theme.textColor.muted};
      font-size: ${theme.fontSize.headline};

      span {
        margin-right: 24px;
      }

      strong {
        color: ${theme.textColor.primary};
        font-weight: normal;
      }

      em {
        font-style: normal;
        color: ${theme.textColor.gray};
      }
    }
  `
)

function ListItem({ data, as: As = 'div', ...props }) {
  return (
    <As className='ListItem' css={listItemCSS} {...props}>
      <div className='left'>
        <Image src='https://picsum.photos/seed/2/300/300' size={110} />
      </div>
      <div className='right'>
        <div className='title'>深圳市科技创新XX服务有限公司</div>
        <Labels className='labels'>
          <Label>企业标签</Label>
          <Label>企业标签</Label>
          <Label>企业标签</Label>
          <Label>企业标签</Label>
          <Label>企业标签</Label>
          <Label>企业标签</Label>
        </Labels>
        <div className='info'>
          <span>
            法定代表人: <strong>王一三</strong>
          </span>
          <span>
            法定代表人: <em>王一三</em>
          </span>
          <span>
            法定代表人: <em>王一三</em>
          </span>
        </div>
        <div className='info'>
          <span>
            法定代表人: <strong>王一三</strong>
          </span>
          <span>
            法定代表人: <strong>王一三</strong>
          </span>
          <span>
            法定代表人: <strong>王一三</strong>
          </span>
        </div>
        <div className='info'>
          <span>
            法定代表人: <strong>王一三</strong>
          </span>
          <span>
            法定代表人: <strong>王一三</strong>
          </span>
          <span>
            法定代表人: <strong>王一三</strong>
          </span>
        </div>
      </div>
    </As>
  )
}

export default ListItem
