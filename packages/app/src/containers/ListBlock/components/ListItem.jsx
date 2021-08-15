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

function ListItem({ data = {}, as: As = 'div', ...props }) {
  return (
    <As className='ListItem' css={listItemCSS} {...props}>
      <div className='left'>
        <Image src='https://picsum.photos/seed/2/300/300' size={110} />
      </div>
      <div className='right'>
        <div className='title'>{data.companyName}</div>
        <Labels className='labels'>
          {data.tags?.map((item) => (
            <Label key={item}>{item}</Label>
          ))}
        </Labels>
        <div className='info'>
          <span>
            法定代表人: <strong>{data.info?.username}</strong>
          </span>
          <span>
            联系人: <em>{data.info?.contact}</em>
          </span>
          <span>
            电话: <em>{data.info?.phone}</em>
          </span>
        </div>
        <div className='info'>
          <span>
            上年产值: <strong>{data.info?.lastChanzhi}</strong>
          </span>
          <span>
            上年营收: <strong>{data.info?.lastYingshou}</strong>
          </span>
          <span>
            参保人数: <strong>{data.info?.canbao}</strong>
          </span>
        </div>
        <div className='info'>
          <span>
            区域: <strong>{data.area}</strong>
          </span>
          <span>
            园区/楼宇: <strong>{data.info?.yuanquLouyu}</strong>
          </span>
          <span>
            地址: <strong>{data.info?.address}</strong>
          </span>
        </div>
      </div>
    </As>
  )
}

export default ListItem
