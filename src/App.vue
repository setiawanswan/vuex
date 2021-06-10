<template>
  <div>
    {{ message + ' Saya lagi belajar VueX' }}
    <input type="text" v-model="newMessage">
    <button @click="update">Update</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data(){
    return{
      newMessage : ''
    }
  },

  computed: {
    ...mapState(['message'])
  },

  methods : {
    ...mapActions(['updateWithNewMessage']),
    update(){
      this.updateWithNewMessage( this.newMessage)
    }
  }

}
</script>