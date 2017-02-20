<template>
  <!--<section class="container">-->
    <!--<img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />-->
    <!--<h1 class="title">-->
      <!--Universal Vue.js Application Framework-->
    <!--</h1>-->
    <!--<nuxt-link class="button" to="/about">-->
      <!--About page-->
    <!--</nuxt-link>-->
  <!--</section>-->
  <section class="container">

    <nav id="top-bar--user" class="small-12">
      <div class="row align-middle">
        <figure class="columns text-center medium-text-left">
          <a href="#" title="">
            <img src="../assets/img/logo.png" width="200">
          </a>
        </figure>

        <form class="columns shrink" id="login-form" @submit.prevent="logar">
          <label class="float-left">
            <input type="text" v-model="login" placeholder="E-mail" required>
          </label>
          <label class="column float-left">
            <input type="password" v-model="senha" placeholder="Senha" required>
          </label>
          <label class="float-left">
            <button type="submit" class="button">Entrar</button>
          </label>
        </form>

        <p class="text-right small-12 columns">
          <small><a>Esqueci minha senha</a></small>
        </p>
      </div>
    </nav>

    <figure id="home-banner" class="small-12 full-height">
      <div class="mask small-12 abs top-left full-height"></div>

      <div class="row rel z99 full-height align-middle">
        <div class="small-12 medium-6 columns">
          <h3 class="text-center">
            Fui clonado!
          </h3>
          <h3 class="text-center">
            <small>E agora?</small>
          </h3>
        </div>

        <div class="small-12 medium-4 medium-offset-2 columns">
          <form @submit.prevent="cadastrar">

            <header>
              <h4>Faça seu cadastro.</h4>
              <hr>
            </header>
            <p>
              <input type="text" v-model="usuario.nome" placeholder="Nome completo" required>
            </p>

            <p>
              <input type="email" v-model="usuario.email" placeholder="E-mail" required>
            </p>

            <p>
              <input type="text" v-model="usuario.cpf" placeholder="CPF" required>
            </p>

            <p>
              <input type="text" placeholder="Data de nascimento" v-model="usuario.nascimento" required>
            </p>

            <p>
              <select class="small-5 columns" v-model="usuario.estado" @change="getCities">
                <option>Estado</option>
                <option v-for="uf in estados" :value="uf.nome">{{uf.nome}}</option>
              </select>

              <select class="small-6 small-offset-1 columns" v-model="usuario.cidade" :disabled="cidades.length <= 0">
                <option>Cidade</option>
                <option v-for="cidade in cidades" :value="cidade">{{cidade}}</option>
              </select>
            </p>

            <p>
              <input type="password" v-model="usuario.senha" placeholder="Senha">
            </p>

            <p>
              <input type="password" v-model="usuario.confirmaSenha" placeholder="Senha">
            </p>

            <p class="text-right">
              <button class="button radius">Cadastrar</button>
            </p>

          </form>
        </div>
      </div>
    </figure>

  </section>

</template>

<script>
  import axios from 'axios'
  export default {

    // cabeçalho ssr
    head: {
      titleTemplate: 'HACKATON',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ]
    },

    data () {
      return {
        login: '',
        senha: '',
        cidades: [],
        estados: [],

        // novo usuário
        usuario: {
          nome: '',
          email: '',
          cpf: '',
          nascimento: '',
          estado: '',
          cidade: '',
          senha: '',
          confirmaSenha: ''
        }
      }
    },

    methods: {
      // retornar cidades do estado selecionado
      getCities () {
        for (var i = 0; i < this.estados.length; i++) {
          if (this.usuario.estado === this.estados[i].nome) {
            this.cidades = this.estados[i].cidades
          }
        }
      },

      // cadastrar um novo usuario
      cadastrar () {
        console.log(this.usuario)
        // axios.post('http://192.168.25.223:8080/system/usuario/create', this.usuario)
        //   .then((res) => {
        //     console.log(res)
        //   })
      },

      // logar usuário, gravar token
      logar () {
        const user = {
          username: this.login,
          password: this.senha,
          client_id: 2,
          client_secret: 'xg3uwmkvjIZbxqLbUe1nO4tOB3wLH5TRP07Pbk4n',
          grant_type: 'password'
        }

        axios.post('http://127.0.0.1:8000/oauth/token', user)
          .then((res) => {
            this.$store.commit('isAuthenticated', true)
            this.$store.commit('setToken', res.data.access_token)
            this.$router.push('/user')
          })
          .catch((error) => {
            alert(error)
          })
      }
    },

    mounted () {
      console.log(this.$store.state.authenticated)
      if (this.$store.state.token) {
        this.$router.push('/user')
      }
      // Json estados/cidades
      axios.get('https://gist.githubusercontent.com/letanure/3012978/raw/36fc21d9e2fc45c078e0e0e07cce3c81965db8f9/estados-cidades.json')
        .then((res) => {
          this.estados = res.data.estados
        })
        .catch((error) => {
          console.log(error)
        })
    }

  }
</script>

<style>
  #login-form p {
    margin: 0;
    padding-top: 10px;
  }
</style>
