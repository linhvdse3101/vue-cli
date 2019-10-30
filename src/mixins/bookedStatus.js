export default {
  filters: {
    bookedStatus(datetime) {
      const bookedDate = new Date(datetime)
      const now = new Date()
      if (bookedDate.getTime() < now.getTime()) {
        return 'Chưa đến hẹn'
      } else {
        return 'Hoàn thành'
      }
    },
    bookedColorStatus(datetime) {
      const bookedDate = new Date(datetime)
      const now = new Date()
      if (bookedDate.getTime() < now.getTime()) {
        return 'orange--text'
      } else {
        return 'teal--text'
      }
    }
  }
}
