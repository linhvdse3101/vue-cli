export default {
  filters: {
    notificationTitle(status) {
      if (status.toString().startsWith('U')) return 'Cập nhật tài khoản'
      if (status.toString().startsWith('B')) return 'Lịch xem nhà'
      if (status.toString().startsWith('C')) return 'Hợp đồng'
      if (status.toString().startsWith('M')) return 'Mô hình'
      if (status.toString().startsWith('H')) return 'Thông tin nhà'
      return ''
    },
    notificationLink(status) {
      return status
    }
  }
}
