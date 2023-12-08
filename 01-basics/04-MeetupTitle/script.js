import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const App = defineComponent({
  name: 'App',
  data() {
    return {
      meetupId: undefined,
      meetupTitle: undefined
    };
  },

  watch: {
    "meetupId": {
      handler(newValue, oldValue) {
        fetchMeetupById(newValue).then((resp) => {
            this.meetupTitle = resp.title;
          })
      }
    }
  },

})

const app = createApp(App);
const vm = app.mount('#app')

window.vm = vm


