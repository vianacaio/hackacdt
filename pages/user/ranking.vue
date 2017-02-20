<template>
  <section>
    <nav-bar></nav-bar>
    <div class="row">
      <sidebar></sidebar>
      <div class="content small-9 columns">
        <h4>Ranking</h4>

        <div class="row small-up-2">
          <nav class="columns list-ranking">
            <header>
              <h5>Melhor tempo para solução:</h5>
            </header>

            <ul class="menu vertical">
              <li>
                <a>
                  <span>Bar do Amendoim <small>12/12/2016</small></span>
                </a>
              </li>

              <li>
                <a>
                  <span>Lojão da Informática <small>14/01/2017</small></span>
                </a>
              </li>
            </ul>
          </nav>

          <nav class="columns list-ranking">
            <header>
              <h5>Pior tempo para solução:</h5>
            </header>

            <ul class="menu vertical">
              <li>
                <a>
                  <span>Lojas Americanas</span>
                </a>
              </li>

              <li>
                <a>
                  <span>Casa da contrução</span>
                </a>
              </li>

              <li>
                <a>
                  <span>Hotel Pousada</span>
                </a>
              </li>

              <li>
                <a>
                  <span>Casa do Pintor</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
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
