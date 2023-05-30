<div class="container">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img class="photo" src="/img/photo.jpg" alt="photo" width="200"/>
    <div class="info">
        <h1>Пару слов о себе</h1>
        <h2>
            Меня зовут Шведова Владислава, мне семнадцать лет и я начинающий разработчик сайтов!
            Занятие веб-разработкой кажется мне интересным и увлекательным, в дальнейшем я бы хотела связать свою жизнь с этой деятельностью.
        </h2>
        <h1>Мои увлечения</h1>
        <h2>
            Я занимаюсь программированием, играю в большой теннис. Также люблю играть в компьютерные игры.
            Обожаю читать и слушать музыку.
        </h2>
        <h1>Обучение</h1>
        <h2>
            Перехожу в 11 класс. Учусь в МБОУ СОШ №3 города Ноябрьск на технологическом направлении.
            В будущем мечтаю поступить на специальность, связанную с информатикой или математикой.
        </h2>
    </div>
</div>

<style>
    .photo{
        position: sticky;
        margin-bottom: -250px;
        margin-left: 550px;
        float: right;
        border-radius: 4px;
    }
    
    .container{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        align-items: start;
        max-width: 900px;
        margin-left: 100px;
    }
    .info h1 {
        font-size: large;
        position: relative;
        margin: 0;
        text-align: left;
        line-height: 130%;
        font-weight: 800;
        margin-bottom: -2px;
    }
    .info h2 {
        max-width: 60ch;
        font-weight: 200;
        margin-top: 0.50rem;
        line-height: 130%;
        font-size: medium;
    }
    .info { 
        max-width: 900px;
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        align-items: start;
    }
</style>

