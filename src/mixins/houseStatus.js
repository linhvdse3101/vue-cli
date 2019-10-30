export default {
  filters: {
    houseStatus(status) {
      const statusMap = {
        0: 'Chờ xử lý',
        1: 'Chờ xử lý',
        2: 'Chờ xử lý',
        3: 'Đang xác thực thông tin',
        4: 'Đang xác nhận hợp đồng',
        5: 'Tin đã đăng - Xác nhận mô hình',
        6: 'Tin đã đăng',
        7: 'Từ chối hợp đồng',
        8: 'Yêu cầu bị từ chối',
        9: 'Yêu cầu bị từ chối',
        10: 'Yêu cầu đã được xóa',
        11: 'Yêu cầu đã được xóa',
        12: 'Đã bán',
        13: 'Đã bán',
        14: 'Đã bán',
        15: 'Đã bán'
      }
      return statusMap[status]
    },
    houseColorStatus(status) {
      if (status >= 12) return 'teal--text'
      if (status > 6 && status < 12) return 'red--text'
      if (status < 5) return 'orange--text'
      if (status == 5 || status == 6) return 'teal--text'
      return ''
    }
  }
}
