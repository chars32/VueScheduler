import Vue from 'vue'

export const state = {
  counter: []
}

export const mutations = {
  increment (state) {
    Vue.http.get('meetups.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        const resultArray = [];
        for (let key in data) {
          data[key].id = key
          resultArray.push(data[key])
        }
        state.counter = resultArray;
      })
  }
}
