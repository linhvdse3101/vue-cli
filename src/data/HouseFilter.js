const prices = {
  'Dưới 1 tỷ': 1,
  '1 tỷ - 3 tỷ': 2,
  '3 tỷ - 6 tỷ': 3,
  '6 tỷ - 10 tỷ': 4,
  'Trên 10 tỷ': 5
}

const priceValue = {
  1: { min: 0, max: 1000000000 },
  2: { min: 1000000000, max: 3000000000 },
  3: { min: 3000000000, max: 6000000000 },
  4: { min: 6000000000, max: 10000000000 },
  5: { min: 10000000000, max: 100000000000 }
}

const acreages = {
  'Dưới 20m\u00B2': 1,
  '20m\u00B2 - 40m\u00B2': 2,
  '40m\u00B2 - 60m\u00B2': 3,
  '60m\u00B2 - 80m\u00B2': 4,
  '80m\u00B2 - 100m\u00B2': 5,
  'Từ 100m\u00B2': 6
}

const acreageValue = {
  1: { min: 0, max: 20 },
  2: { min: 20, max: 40 },
  3: { min: 40, max: 60 },
  4: { min: 60, max: 80 },
  5: { min: 80, max: 100 },
  6: { min: 100, max: 10000 }
}

const Filter = {
  getPrices: Object.keys(prices).map(key => {
    return { text: key, value: prices[key] }
  }),
  getPrice: name => prices[String(name)],
  getPriceValue: price => priceValue[String(price)],
  getAcreages: Object.keys(acreages).map(key => {
    return { text: key, value: acreages[key] }
  }),
  getAcreage: name => acreages[String(name)],
  getAcreageValue: acreage => acreageValue[String(acreage)]
}

export default Filter
