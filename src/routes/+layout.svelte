<nav>
    <div class="nav-container">
      {#if link.isShow}
        <a href={link.href} class="link">{link.title}</a>
      {/if}    
      </div>
    </div>
</nav>

<div class="container">
    <slot></slot>
  </div>
  
<style>
    .container {
      max-width: 1400px;
      margin: 50px auto;
    }
</style>
  
<script>
    const nav = [
    {
      title: 'Обо мне',
      href: '/about'
      isShow: true
    },
    {
      title: 'Блог',
      href: '/blog'
      isShow: true
    },
    {
      title: 'Портфолио',
      href: '/project'
      isShow: true
    },
    {
      title: 'Контакты',
      href: '/contact'
      isShow: true
    },
    {
      title: 'temp',
      href: '/temp'
      isShow: false
    }
  ]
</script>
