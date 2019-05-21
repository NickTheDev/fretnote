<template>
  <div id="app">
    <div class="contents">
      <div class="headers is-text-center">
        <a class="h1">fretnote</a>
        <p class="h2">Calculate guitar fret lengths.</p>
      </div>
      <div class="data">
        <VField
          v-model="baseLength"
          class="length"
          title="Enter middle C base length..."/>
        <div class="keys columns is-centered is-text-center">
          <div class="column">Chord</div>
          <div class="column">Frequency</div>
          <div class="column">Length</div>
          <div class="column">Wavelength</div>
          <div class="column">Speed</div>
        </div>
        <div v-for="(value, name) in chords">
          <div class="values columns is-centered is-text-center">
            <div class="column">
              <a class="chord">{{ name }}</a>
            </div>
            <div class="column">
              {{ value }} <a class="units">hz</a>
            </div>
            <div class="column">
              {{ cap(value === chords.C ? baseLength : length(value)) }} <a class="units">m</a>
            </div>
            <div class="column">
              {{ cap(value === chords.C ? baseWave : wave(value)) }} <a class="units">m</a>
            </div>
            <div class="column">
              {{ cap(baseSpeed) }} <a class="units">m/s</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      baseLength: 0,
      chords: {
        C: 262,
        D: 294,
        E: 329.6,
        F: 349,
        G: 392,
        A: 440,
        B: 494,
      },
    };
  },
  computed: {
    baseWave() {
      return this.baseLength * 2;
    },

    baseSpeed() {
      return this.chords.C * this.baseWave;
    },
  },
  methods: {
    cap: decimal => isNaN(decimal) ? 0 : Math.round(decimal * 100) / 100,

    wave(frequency) {
      return this.baseSpeed / frequency;
    },

    length(frequency) {
      return this.wave(frequency) / 2;
    },
  },
};
</script>

<style lang="sass">
  @import 'assets/style/variables'
  @import '~bulma/bulma.sass'
  @import url('https://fonts.googleapis.com/css?family=Poppins:500,700&display=swap')

  html, body, #app
    margin: 0
    padding: 0
    height: 100%
    font-size: 100%
    overflow: hidden
    background: url('assets/img/background.png') no-repeat center center fixed
    background-size: cover
    font-family: $body

  .contents
    height: 90%
    width: 80%
    margin: 8% 10% 0 10%

  .data
    margin: 2% auto 0
    padding-bottom: 3rem
    border-radius: .8rem
    display: block
    background: $white
    width: 46rem
    box-shadow: -1px 4px 59px 0 rgba(0, 0, 0, .1)

  .keys
    padding-top: 1rem

  .data .columns .column
    padding: .6rem 0 0 0 !important
    margin: 0 auto

  .data .keys .column
    font-size: 1.1rem
    font-weight: bold
    color: $black

  .data .values .column
    font-size: 1.1rem
    font-weight: 500
    color: $blue

  .units
    font-size: .8rem
    font-weight: bold
    color: $black

  .length
    padding-top: 1.7rem !important
    margin: 0 auto
    width: 15rem

  .chord
    font: bold 1.3rem $body
    color: $blue

  .h1
    font: bold 7rem $body
    color: $black
    line-height: .2

  .h2
    font: bold 1.5rem $body
    color: $black
    padding-top: .8rem

  .is-text-center
    text-align: center
</style>
