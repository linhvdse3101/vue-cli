export default {
  filters: {
    formatCurrency(money) {
      var regex = /\B(?=(\d{3})+(?!\d))/g
      return money.toString().replace(regex, '.') + ' VNĐ'
    }
  }
}
