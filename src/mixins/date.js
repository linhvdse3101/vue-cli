export default {
  filters: {
    formatDate(date) {
      if (date) {
        const d = new Date(date)
        return d.toLocaleDateString('vi-VN', { timeZone: 'UTC' })
      }
      return ''
    },
    formatDateTime(date) {
      if (date) {
        const d = new Date(date)
        return d.toLocaleString('vi-VN', { timeZone: 'UTC' })
      }
      return ''
    }
  }
}
