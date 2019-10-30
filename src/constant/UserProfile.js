const sex = {
  Nam: true,
  Nữ: false
}

const UserProfile = {
  getSex: Object.keys(sex).map(key => {
    return { text: key, value: sex[key] }
  })
}

export default UserProfile
