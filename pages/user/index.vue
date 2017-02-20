<template>
  <section class="container">
    <nav-bar></nav-bar>
    <div class="row">
      <sidebar></sidebar>
      <div class="small-9 columns content">
        <header>
          <h3 class="title float-left">Últimos relatos</h3>
          <select>
            <option>Todas</option>
            <option>Não respondidas</option>
            <option>Desativadas</option>
          </select>
        </header>

        <table>
          <thead>
          <tr>
            <th width="200">ID</th>
            <th>Empresa</th>
            <th width="150">Emissor</th>
            <th width="150">Ação</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>Bobs</td>
            <td>C&A</td>
            <td>
              <a>Editar</a> | <a>Excluir</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Subway</td>
            <td>C&A</td>
            <td>
              <a>Editar</a> | <a>Excluir</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Restaurante Mangai</td>
            <td>C&A</td>
            <td>
              <a>Editar</a> | <a>Excluir</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
  import NavBar from '../../components/NavBar.vue'
  import Sidebar from '../../components/Sidebar.vue'
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

    components: {
      NavBar,
      Sidebar
    },

    middleware: 'authenticated',

    mounted () {
      axios.defaults.baseURL = 'http://127.0.0.1:8000'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$store.state.token
      axios.defaults.headers.post['Content-Type'] = 'application/json'

      axios.get('api/users/create')
        .then((res) => {
          console.log(res)
          this.$store.commit('setCurrentUser', res.data.user)
          console.log(this.$store.state.current_user)
        })
    }
  }
</script>
