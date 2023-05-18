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
<div class="container">
    <slot></slot>
</div>
  
<svelte:head>
<title>Имя Фамилия</title>
</svelte:head>

<div class='container'>
    <div class='info'>
        <div class='animate-background'>
            <div class='container info-container'>
                <div class='info-text'>
                    <h1>
                        <p class='animate-text-1'>Lorem ipsum dolor sit,</p>
                        <p class='text-2'>Lorem ipsum dolor sit amet.</p>
                    </h1>
                </div>
                <h2 class='subtitle'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto aut, cupiditate dolores
                    ducimus expedita labore nemo odio quibusdam quidem sapiente soluta.
                </h2>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <div style='color:black' class='scroll-button animate-scroll' tabindex='0'>
                    <a href='/about'>Click Here</a>
                    <div class='arrow'>→</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class='background-div'></div>

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
  },
  {
    title: 'temp',
    href: '/temp',
    isShow: false,
  },
];
</script>

<style>
    body {
      background-position: left top;
      font-family: 'Inter', sans-serif;
      margin: 0;
      background-repeat: no-repeat;
    }
    * {
      box-sizing: border-box;
    }
    a {
      text-decoration: none;
      color: black;
    }
    nav {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 80px 0 80px;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  nav .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: -1em 0;
    flex: 1 0 auto;
  }
  .nav-links .link {
    position: relative;
    margin: 1em;
    font-size: 0.85rem;
    letter-spacing: 1px;
    color: black;
  }

  .nav-logo {
    position: relative;
    line-height: 1;
    font-size: 1.1rem;
    color: black;
  }
</style>
