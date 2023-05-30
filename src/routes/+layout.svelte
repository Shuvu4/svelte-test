<div class="background-up">
<nav>
  <div class="nav-container">
    <a href="/" class="nav-logo" title="Back to Homepage">Владислава Шведова</a>
    <div class="nav-links">
      {#each nav as link}
      {#if link.isShow}
    <a href={link.href} class="link">{link.title}</a>
        {/if}
      {/each}
    </div>
  </div>
</nav>
</div>

<div class="container">
    <slot></slot>
  </div>

<style>
  .background-up{
    border: 1px solid #ddd;
    box-shadow: 0 0 10px #eee;
    background: #cd91cf6b;
    width: 100%;
  }
  .container {
    max-width: 1400px;
    margin: 50px auto;
  }
</style>
  
<script>
  const nav = [
  {
    title: 'Обо мне',
    href: '/about',
    isShow: true,
  },
  {
    title: 'Блог',
    href: '/blog',
    isShow: true,
  },
  {
    title: 'Портфолио',
    href: '/project',
    isShow: true,
  },
  {
    title: 'Контакты',
    href: '/contact',
    isShow: true,
  }
];
   
</script>
