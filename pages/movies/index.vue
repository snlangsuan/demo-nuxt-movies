<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <template v-for="movie in movies">
        <v-flex
          xs6
          :key="movie.id"
        >
          <v-card>
            <v-card-text class="pa-0 movie-card">
              <img :src="movie.thumbnail[0]" class="movie-thumbnail" />
              <div class="movie-info">
                <div class="subheading">{{ movie.title }}</div>
                <div class="body-1">{{ movie.release }}</div>
                <div class="caption pt-3 movie-overview">{{ movie.overview }}</div>
                <div class="movie-spacer"></div>
                <nuxt-link
                  :to="`/movies/${movie.id}`"
                  class="movie-readmore caption white--text"
                >
                  Read More
                </nuxt-link>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import { database } from '~/plugins/firebase.js'
export default {
  data() {
    return {
      movies: []
    }
  },
  mounted() {
    this.readMovies()
  },
  methods: {
    async readMovies() {
      const ref = database.ref('/movies')
      let snap
      try {
        snap = await ref.once('value')
        this.movies = snap.val()
      } catch (error) {
        console.error(error)
      }
    }
  },
  head() {
    return {
      title: 'Movies'
    }
  }
}
</script>

<style>
.movie-card {
  height: 300px;
  display: flex;
}
.movie-thumbnail {
  height: 300px;
}
.movie-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
}
.movie-spacer {
  flex: 1;
}
.movie-overview {
  height: 120px;
  overflow: hidden;
}
</style>
