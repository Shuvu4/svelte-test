<script>
    import { routes } from './routes.js';
</script>

<svelte:head>
    <title>Портфолио</title>
</svelte:head>


<div class='container'>
	<h1>Мои проекты</h1>
	<div class='apps'>
		{#each routes as page}
			<div class='app'>
				<h2>{page.title}</h2>
				<p>{page.body}</p>
				<p class='readmore'>
					<a class='link' href={`/project/apps/${page.id}`}>
						Читать далее
					</a>
				</p>
			</div>
		{/each}
	</div>
</div>

<div class='background-div'></div>

<style>
    .container {
    margin: 50px auto;
    max-width: 800px;
    padding: 0 20px;
    max-height: 10px;
    }

  .link {
   color: #ad23afaf;
  }
  .container {
    margin: 50px auto;
    max-width: 800px;
    padding: 0 20px;
}
  
.apps {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

}
.app {
    border: 1px solid #ddd;
    padding: 10px;
    box-shadow: 0 0 10px #eee;
}

 </style>



