<template>
  <section>
    <nav-bar></nav-bar>
    <div class="row">
      <sidebar></sidebar>
      <div class="content small-9 columns">
        <header>
          <h4>Minha conta</h4>
        </header>
        <form>
          <p>
            <input type="text" placeholder="Nome" :value="$store.state.current_user.name">
          </p>

          <p>
            <input type="text" placeholder="E-mail" :value="$store.state.current_user.email">
          </p>

          <p>
            <input type="text" placeholder="CPF" :value="$store.state.current_user.cpf">
          </p>

          <p>
            <input type="text" placeholder="Cidade" :value="$store.state.current_user.cidade">
          </p>

          <p>
            <input type="text" placeholder="Estado" :value="$store.state.current_user.estado">
          </p>

          <p>
            <input type="text" placeholder="Data de nascimento" :value="$store.state.current_user.nascimento">
          </p>

          <p class="text-right">
            <button type="submit" class="button">Editar</button>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  import NavBar from '../../components/NavBar.vue'
  import Sidebar from '../../components/Sidebar.vue'

  export default {
    components: {
      NavBar,
      Sidebar
    }
  }
</script>
