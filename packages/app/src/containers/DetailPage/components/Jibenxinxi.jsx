import { css } from '@emotion/react'
import { SubBlock } from 'components/Block'
import { Table, TableItem, TableRow } from 'components/Table'
import { useTheme } from 'contexts/ThemeProvider'
import { useRef } from 'react'
import AnchorButton from './AnchorButton'

function Jibenxinxi() {
  const ref = useRef()
  const { theme } = useTheme()

  return (
    <div className='Jibenxinxi'>
      <SubBlock
        className='chips'
        css={css`
          padding: 20px 24px 12px;
          border-bottom: ${theme.borders.base};
          flex-direction: row;
          flex-wrap: wrap;
        `}>
        {[...Array(20)].map((item, i) => (
          <AnchorButton targetRef={ref} key={i.toString()}>
            content2
          </AnchorButton>
        ))}
      </SubBlock>

      <SubBlock className='info'>
        <div className='table'>
          <Table>
            <TableRow cols={6}>
              <TableItem>统一社会信用代码</TableItem>
              <TableItem>000000</TableItem>
              <TableItem>法定代表人</TableItem>
              <TableItem>...</TableItem>
              <TableItem>法人联系电话</TableItem>
              <TableItem>...</TableItem>
            </TableRow>
            <TableRow cols={6}>
              <TableItem>统一社会信用代码</TableItem>
              <TableItem colSpan={3}>000000000000000000</TableItem>
              <TableItem>法人联系电话</TableItem>
              <TableItem>...</TableItem>
            </TableRow>
            <TableRow cols={6}>
              <TableItem>统一社会信用代码</TableItem>
              <TableItem>000000</TableItem>
              <TableItem>法定代表人</TableItem>
              <TableItem>...</TableItem>
              <TableItem>法人联系电话</TableItem>
              <TableItem>...</TableItem>
            </TableRow>
          </Table>
        </div>
        <div className='highlightTips'>亮点提示</div>
        <div className='record'>获奖记录</div>
        <div className='riskTips'>风险提示</div>
        <div className='weifaweizhang'>违法违章</div>
      </SubBlock>
    </div>
  )
}

export default Jibenxinxi
