<template>
  <div class="">
    <nav id="nav-bar" class="small-12">
      <div class="row align-middle">
        <figure class="columns shrink">
          <nuxt-link to="/user">
            <img src="../assets/img/logo.png" width="200">
          </nuxt-link>
        </figure>

        <form class="columns">
          <input type="text" placeholder="Buscar estabelecimento">
        </form>

        <nav class="columns text-right shrink">
          <nuxt-link to="/user/minha_conta" class="button no-margin white"><i class="fa fa-user-circle" aria-hidden="true"></i> Minha conta</nuxt-link> <a href="#" @click="logout" class="button alert no-margin white"><i class="fa fa-reply" aria-hidden="true"></i> Sair</a>
        </nav>
      </div>
    </nav>

    <nav id="user-bar" class="small-12">
      <div class="row align-middle">
        <div class="columns">
          <ul class="menu">
            <li>
              <nuxt-link to="/user/ranking">Ranking</nuxt-link>
            </li>

            <li>
              <nuxt-link to="/user/danger">Danger Zone</nuxt-link>
            </li>

            <li>
              <nuxt-link to="/user/faq">Dúvidas frequentes</nuxt-link>
            </li>

            <li>
              <nuxt-link to="/user/institucional">Institucional</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="columns shrink">
          <nuxt-link to="/relatos/novo" class="button no-margin white">
            <strong><i class="fa fa-plus-circle" aria-hidden="true"></i> CADASTRAR NOVO RELATO</strong>
          </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    methods: {
      logout () {
        this.$store.commit('destroyToken')
        this.$router.push('/')
      }
    }
  }
</script>
