<template>
  <section>
    <nav-bar></nav-bar>
    <div class="row">
      <sidebar></sidebar>
      <div class="content small-9 columns">
        <header>
          <h4>Cadastre um novo relato de clonagem</h4>
        </header>
        <form>
          <p>
            <input type="text" placeholder="Emissor do cartão">
          </p>

          <p>
            <input type="text" placeholder="Empresa onde foi realizada a compra">
          </p>

          <p>
            <textarea placeholder="Descreva o relato" rows="10"></textarea>
          </p>

          <p class="text-right">
            <button type="submit" class="button">Cadastrar</button>
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
