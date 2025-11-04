import { generate } from 'c3'

export function dountChart(bindto: String, columns) {
  generate({
    bindto,
    data: {
      columns,
      type: 'donut',
    },
    donut: {
      title: '套票地區比重',
      width: 24,
      label: {
        show: false,
      },
    },
    color: {
      pattern: ['#26BFC7', '#5151D3', '#E68619'],
    },
  })
}
