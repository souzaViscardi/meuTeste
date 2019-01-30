<template>
  <div id="novo-cliente">
    <msg @onClose="hideMsg" v-show="showMsg" :title="title" :body="body" :css="css" />
    <header>
      <h1 class="title">Client</h1>
    </header>
    <div>
        <div class="formulario">
          <my-input class="padd" @input="onChange" label="Id"/>
          <div class="error" v-if="!$v.id.required">Field is required</div>
          <div class="error" v-if="!$v.id.numeric">Data must be a number</div>
          <mylabel v-if="clients['st_nome_sac']" :fillValue="clients['st_nome_sac']" label="Name" />
          <p class="error" v-if="!clients['st_nome_sac']">Id do cliente está invalido</p>
          <txtArea class="padd" @input="onChange" label="Comments"/>
          <div class="error" v-if="!$v.comments.required">Field is required</div>
          <div class="error" v-if="!$v.comments.minLength">comments must have at least {{$v.comments.$params.minLength.min}} letters.</div>
          <div class="error" v-if="!$v.comments.maxLength">comments must have less than {{$v.comments.$params.maxLength.max}} letters.</div>
          <div class="button-container">
            <router-link to="/" class="button is-danger is-outlined"> Cancel </router-link>
            <button class="button is-link" @click="onSend"> Add Comment </button>
          </div>
          <loading v-show="isLoading" />
        </div>
    </div>
  </div>
</template>

<script>
import myInput from '../form-elements/input.vue'
import txtArea from '../form-elements/txtArea.vue'
import mylabel from '../form-elements/label.vue'
import msg from '../notification.vue'
import loading from '../loader.vue'
import clientsService from '@/services/clients.js'
import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'hello',
  components: { myInput, msg, loading, txtArea, mylabel },
  data () {
    return {
      values: {
      },
      isLoading: false,
      value: '',
      clients: [],
      active: false,
      id: '',
      comments: '',
      css: '',
      body: '',
      title: '',
      showMsg: false
    }
  },
  validations: {
    id: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(150),
      numeric
    },
    comments: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(500)
    }
  },
  mounted () {
  },
  methods: {
    async onSend () {
      if (!this.$v.$invalid) {
        console.log(this.values)
        this.isLoading = true
        const res = await clientsService.create(this.values)
        this.isLoading = false
        if (res.status >= 200 && res.status <= 399) {
          this.showMsg = true
          this.title = 'Success'
          this.body = 'Comment has been created with success'
          this.css = 'is-primary'
        } else if (!res || res.status >= 400) {
          this.showMsg = true
          this.title = 'Danger'
          this.body = 'Could not added a client because an error with conection'
          this.css = 'is-danger'
        }
        setInterval(() => {
          this.showMsg = false
        }, 3000)
        this.getClients()
      } else {
        this.$v.comments.$touch()
        this.$v.id.$touch()
        this.showMsg = true
        this.title = 'Danger'
        this.body = 'Could not added a comment parameter is invalid'
        this.css = 'is-danger'
      }
    },
    onChange (value, label) {
      this.values[label.toLowerCase()] = value
      if (label === 'Id') {
        this.id = this.values.id
        this.getClients()
        this.$v.id.$touch()
      }
      if (label === 'Comments') {
        this.comments = this.values.comments
        this.$v.comments.$touch()
      }
    },
    async getClients () {
      const response = await clientsService.get(this.id)
      this.clients = response[0] ? response[0] : 'Id Invalido'
      this.values.user = this.clients['st_nome_sac']
      console.log(this.clients)
    },
    hideMsg () {
      this.showMsg = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
li {
  display: inline-block;
  margin: 0 10px;
}
#novo-cliente {
  .formulario{
    margin-top: .5rem;
    display: flex;
    flex-direction: column;
    width: 50%;
    .padd{
      padding-top: 1rem;
    }
    .button-container {
      margin-top: .5rem;
      display: flex;
      align-self: flex-end;
      width: 40%;
      justify-content: flex-end;
    }
     .button {
       display: flex;
       margin-left: .5rem;
      }
      .error {
        margin-left: 6rem;
        color: #ff3860;
      }

  }
}

</style>
