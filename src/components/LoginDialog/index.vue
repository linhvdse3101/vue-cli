<template>
  <v-dialog v-model="$store.state.app.loginDialog" width="768" persistent>
    <div class="container" :class="rightPanel ? 'right-panel-active' : ''">
      <div class="form-container sign-up-container">
        <div class="form">
          <h1>Sign-up</h1>
          <div class="social-container">
            <v-icon size="28" @click="handleClickLogin" class="social">mdi-google-plus</v-icon>
          </div>
          <span>or create with our account</span>
          <input
            v-model="emailRegister"
            type="email"
            placeholder="Email"
            required
            @blur="$v.emailRegister.$touch()"
          />
          <div v-if="emailRegisterErrors" class="input-error">{{ emailRegisterErrors }}</div>

          <input
            v-model="nameRegister"
            type="text"
            placeholder="Your full name"
            required
            @blur="$v.nameRegister.$touch()"
          />
          <div v-if="nameRegisterErrors" class="input-error">{{ nameRegisterErrors }}</div>

          <input
            v-model="passwordRegister"
            type="password"
            placeholder="Password"
            required
            @blur="$v.passwordRegister.$touch()"
          />
          <div v-if="passwordRegisterErrors" class="input-error">{{ passwordRegisterErrors }}</div>

          <input
            v-model="passwordCfRegister"
            type="password"
            placeholder="Confirm password"
            required
            @blur="$v.passwordCfRegister.$touch()"
          />
          <div v-if="passwordCfRegisterErrors" class="input-error">{{ passwordCfRegisterErrors }}</div>

          <button style="margin-top: 15px;" @click="registerRequest">Register</button>
        </div>
      </div>
      <div class="form-container sign-in-container">
        <div class="form">
          <h1>Sign-in</h1>
          <div class="social-container">
            <v-icon size="28" @click="handleClickLogin" class="social">mdi-google-plus</v-icon>
          </div>
          <span>or login with our account</span>
          <input
            v-model="emailLogin"
            type="text"
            placeholder="Email"
            style="margin-top: 15px;"
            required
            @blur="$v.emailLogin.$touch()"
          />

          <div v-if="emailLoginErrors" class="input-error">{{ emailLoginErrors }}</div>
          <input
            v-model="passwordLogin"
            type="password"
            placeholder="Password"
            style="margin-top: 15px;"
          />
          <div v-if="passwordLoginErrors" class="input-error">{{ passwordLoginErrors }}</div>
          <button style="margin-top: 15px;" @click="loginRequest">Login</button>
        </div>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome back !</h1>
            <p>Log to system with your details and keep continue connect with us</p>
            <button class="ghost" @click="rightPanel = false">Sign-in</button>
            <button
              class="ghost"
              style="margin-top: 15px; width: 149px"
              @click="toggleLoginDialog(false)"
            >Close</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello sir !</h1>
            <p>
              Enter your personal details and sign-up to be a member to start
              with us
            </p>
            <button class="ghost" @click="rightPanel = true">Sign-up</button>
            <button
              class="ghost"
              style="margin-top: 15px; width: 149px"
              @click="toggleLoginDialog(false)"
            >Close</button>
          </div>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
export default {
  validations: {
    emailLogin: { required, email },
    passwordLogin: { required },
    emailRegister: { required, email },
    passwordRegister: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(50)
    },
    passwordCfRegister: { required },
    nameRegister: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(50)
    },
    login: ['emailLogin', 'passwordLogin'],
    register: [
      'emailRegister',
      'nameRegister',
      'passwordRegister',
      'passwordCfRegister'
    ]
  },
  data() {
    return {
      emailLogin: '',
      passwordLogin: '',
      emailRegister: '',
      nameRegister: '',
      passwordRegister: '',
      passwordCfRegister: '',
      rightPanel: false,

      //
      isInit: false,
      isSignIn: false
    }
  },
  computed: {
    ...mapGetters({ loggedUser: 'loggedUser' }),
    emailLoginErrors() {
      if (!this.$v.emailLogin.$dirty) return ''
      if (!this.$v.emailLogin.required) return 'Please input email'
      if (!this.$v.emailLogin.email) return 'Email is wrong forrmated'
      return ''
    },
    passwordLoginErrors() {
      if (!this.$v.passwordLogin.$dirty) return ''
      if (!this.$v.passwordLogin.required) return 'Please input password'
      return ''
    },
    emailRegisterErrors() {
      if (!this.$v.emailRegister.$dirty) return ''
      if (!this.$v.emailRegister.required) return 'Please input email'
      if (!this.$v.emailRegister.email) return 'Email is wrong forrmated'
      return ''
    },
    nameRegisterErrors() {
      if (!this.$v.nameRegister.$dirty) return ''
      if (!this.$v.nameRegister.required) return 'Please input your full name'
      if (!this.$v.nameRegister.minLength)
        return 'Your full name is at least 5 chars'
      if (!this.$v.nameRegister.maxLength)
        return 'Your full name is at most 50 chars'
      return ''
    },
    passwordRegisterErrors() {
      if (!this.$v.passwordRegister.$dirty) return ''
      if (!this.$v.passwordRegister.minLength)
        return 'Password is at least 6 chars'
      if (!this.$v.passwordRegister.maxLength)
        return 'Password is at most 50 characters'
      if (!this.$v.passwordRegister.required) return 'Please input password'
      return ''
    },
    passwordCfRegisterErrors() {
      if (!this.$v.passwordCfRegister.$dirty) return ''
      if (!this.$v.passwordCfRegister.required)
        return 'Please input confirm password'
      if (this.passwordCfRegister != this.passwordRegister)
        return 'Conirm password is not match'
      return ''
    }
  },
  methods: {
    ...mapActions({
      toggleLoginDialog: 'app/toggleLoginDialog',
      login: 'user/login',
      logout: 'user/logout',
      register: 'user/register'
    }),
    async loginRequest() {
      this.$v.login.$touch()
      if (!this.$v.login.$invalid) {
        const result = await this.login({
          username: this.usernameLogin,
          password: this.passwordLogin
        })

        if (!result) {
          this.$swal(
            'Lỗi',
            'Sai tên đăng nhập hoặc mật khẩu, vui lòng thử lại',
            'error'
          ).then(() => this.toggleLoginDialog(true))
        } else {
          this.clearForm()
          this.toggleLoginDialog(false)
          Notification.requestPermission()
            .then(() => this.$messaging.getToken())
            .then(token => {
              this.registerFirebaseToken({
                username: this.loggedUser.username,
                webToken: token
              })
            })
            .catch(err => {
              console.log(err)
              this.$notification.new(
                'Vui lòng cấp quyền truy cập thông báo để nhận được thông tin mới nhất nhanh chóng'
              )
            })
        }
      }
    },
    async registerRequest() {
      this.$v.register.$touch()
      if (!this.$v.register.$invalid) {
        const result = await this.register({
          username: this.usernameRegister,
          password: this.passwordRegister,
          fullname: this.nameRegister,
          phone: this.phoneRegister,
          email: this.emailRegister
        })

        if (result) {
          const logged = await this.login({
            username: this.usernameRegister,
            password: this.passwordRegister
          })

          if (logged) {
            this.clearForm()
            this.toggleLoginDialog(false)
            Notification.requestPermission()
            this.$swal('Thành Công', 'Tạo tài khoản thành công', 'success')
            return
          }
        }

        this.$swal(
          'Lỗi',
          'Sai tên đăng nhập hoặc mật khẩu, vui lòng thử lại',
          'error'
        ).then(() => this.toggleLoginDialog(true))
      }
    },
    clearForm() {
      this.emailLogin = ''
      this.passwordLogin = ''
      this.usernameRegister = ''
      this.passwordRegister = ''
      this.passwordCfRegister = ''
      this.nameRegister = ''
      this.emailRegister = ''
      this.$v.login.$reset()
      this.$v.register.$reset()
    },

    handleClickLogin() {
        window.location.href="http://localhost:5000/oauth2/authorize/google?redirect_uri=http://localhost:8080/oauth2/redirect";    
    },
    
    handleClickSignOut() {
      this.$gAuth
        .signOut()
        .then(() => {
          //on success do something
          this.isSignIn = this.$gAuth.isAuthorized
        })
        .catch(error => {
          console.log('ERROR at handleClickSignOut', error)
        })
    }
  },

  created() {
    let that = this
    let checkGauthLoad = setInterval(function() {
      that.isInit = that.$gAuth.isInit
      that.isSignIn = that.$gAuth.isAuthorized
      if (that.isInit) clearInterval(checkGauthLoad)
    }, 1000)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #304156;
  background-color: #304156;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

div.form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 8px 15px;
  margin: 8px 0;
  width: 100%;
  font-size: 14px;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 500px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #304156;
  background: -webkit-linear-gradient(to right, #304156, #304156);
  background: linear-gradient(to right, #304156, #304156);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.social-container {
  margin: 10px 0;
}

.social-container i {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.input-error {
  color: red;
  background-color: white;
  font-size: 12px;
}
</style>
