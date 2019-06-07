<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      justify-center
      align-center
    >
      <div>
        <img
          class="error-logo"
          src="~/assets/images/error-logo.gif"
        />
        <h1 class="py-2">เกิดข้อผิดพลาด</h1>
        <span class="body-1">
          {{ message }}
        </span>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    message() {
      return this.error.message || 'มีบางอย่างไม่ถูกต้อง'
    }
  },
  head() {
    return {
      title: this.message
    }
  }
}
</script>

<style scoped>
.error-logo {
  display: block;
  width: 128px;
  height: auto;
  margin: auto;
}
</style>
