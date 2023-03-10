import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import {
  uniBars,
  uniSearch,
  uniArrowLeft,
  uniSpinner,
  uniPaperclip,
} from 'vue-unicons/dist/icons'

Unicon.add([
  uniBars,
  uniSearch,
  uniArrowLeft,
  uniSpinner,
  uniPaperclip,
])

Vue.use(Unicon)