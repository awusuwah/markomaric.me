<template>
  <div>
    <div class="w-2/5 px-6 py-8 mx-auto">
      <main class="w-full px-10 py-16 mt-64 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <header class="mb-8">
          <h1 class="mb-2 text-4xl font-bold text-center dark:text-white">Login</h1>
        </header>

        <section class="mt-8">
          <div class="w-4/5 mx-auto">
            <div class="mb-5">
              <label for="email" class="font-semibold text-black dark:text-white" :class="{ 'text-red-500': !isEmailValid }"
                >Email Address</label
              >
              <input
                type="email"
                id="email"
                placeholder="marques@brownlee.com"
                class="w-full mt-1 bg-gray-200 border-2 border-gray-200 rounded-lg dark:border-white dark:bg-white"
                :class="{ 'border-red-500 placeholder-red-300': !isEmailValid }"
                v-model="email"
                @keydown="isEmailValid = true"
              />
            </div>

            <div class="mb-5">
              <label for="password" class="font-semibold text-black dark:text-white" :class="{ 'text-red-500': !isPasswordValid }"
                >Password</label
              >
              <input
                type="password"
                id="password"
                placeholder="••••••••••••"
                class="w-full mt-1 bg-gray-200 border-2 border-gray-200 rounded-lg dark:border-white dark:bg-white"
                :class="{ 'border-red-500 placeholder-red-300': !isPasswordValid }"
                v-model="password"
                @keydown="isPasswordValid = true"
              />
            </div>

            <button
              class="px-4 py-2 font-bold text-white transition-all bg-red-500 rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="isFormInvalid"
              @click="loginUser"
            >
              Login
            </button>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      isEmailValid: true,
      isPasswordValid: true,
    }
  },
  computed: {
    isFormInvalid() {
      return this.email === '' || this.password === ''
    },
  },
  methods: {
    loginUser() {
      console.log('Signing the user in...')

      if (this.email === '') {
        this.isEmailValid = false
      }

      if (this.password === '') {
        this.isPasswordValid = false
      }

      // Check if any of the values are invalid
      if (this.isEmailValid && this.isPasswordValid) {
        console.info('valid inputs')
      } else {
        console.info('invalid inputs')
      }
    },
  },
}
</script>
