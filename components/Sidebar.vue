<template>
  <aside id="sidebar" class="small-3 columns">
    <nav class="sidemenu">
      <header>
        <span class="button disabled">Olá, {{ $store.state.current_user.name }}</span>
      </header>

      <ul class="menu vertical">
        <li>
          <h4>Configurações</h4>
        </li>
        <li>
          <nuxt-link to="/user">Alterar e-mail</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/user">Alterar senha</nuxt-link>
        </li>

        <li>
          <h4>Meus relatos</h4>
        </li>
        <li>
          <nuxt-link to="/user">Pendentes (0)</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/user">Respondidos (1)</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/user">Avaliados (2)</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/user">Desativados (0)</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/user"></nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>
