/* import moment from 'moment'
 */
export default {
  /* days: (state) => {
    const now = moment().format('YYYY/MM/DD')
    const nowFormatted = moment(now, 'YYYY/MM/DD')
    const laterFormatted = moment(state.date, 'YYYY/MM/DD')
    const daysFormatted = laterFormatted.diff(nowFormatted, 'days')

    return daysFormatted
  },
 */
  dateAndTime: (state) => {
    return `${state.date} 17:40:00`
  }
}
