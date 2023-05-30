<main class="container">
    <main class="main">
        <h3><b>Контактная информация</b></h3>
        <br>
        <div class="col_w310 float_l">

            <h4 class="title">Пожалуйста, заполните контактную форму</h4>

            <div id="contact_form">

                <form method="post" action="">

                    <label for="author"><br>Ваше имя:</label>
                    <input type="text" name="name" pattern="[А-Яа-яЁё]{4}" title="Имя должно быть на русском. Пример: Степа, Петя, Вася, Оля" class="required input_field" />

                    <label for="email"><br>Ваш Email:</label>
                    <input type="text" name="email" pattern="([A-z0-9_.-]{1})@([A-z0-9_.-]{1}).([A-z]{2,8})" title="Пример: bloggood@mail.ru" class="validate-email required input_field" required />

                    <label for="text"><br>Ваш вопрос:</label>
                    <textarea name="quest" rows="0" cols="0" class="required"></textarea>
                    <div class="cleaner h10"></div>

                    <input type="submit" class="submit_btn" name="submit" value="Отправить" />
                    <input type="reset" class="submit_btn" name="reset" value="Очистить" />

                </form>
            </div>
            <div class="cleaner h10"></div>
            <div class="cleaner h10"></div>
        </div>

        <div>
            <br>
            <h4 class="title">Контакты:</h4>
            Tel: +799999999<br>
            Email: <a href="shedvlada@gmail.com">shedvlada@gmail.com</a>
        </div>
        
    </main>

</main>

<style>
*,
*:after,
*:before {
box-sizing: border-box;
padding: 0;
margin: 0;
transition: .5s ease-in-out;
}

main {
min-height:600px;
}

a {
text-decoration: none;
outline: none;
}


#contact_form {
padding: 0;
width: 370px
}

#contact_form form {
margin: 0px;
padding: 0px;
}

#contact_form form .input_field {
width: 290px;
padding: 5px;
color: #666;
border: 1px solid #ccc;
background: #fff;
}

#contact_form form label {
display: block;
width: 130px;
margin-right: 10px;
margin-bottom: 3px;
font-size: 14px;
}

#contact_form form textarea {
width: 288px;
height: 150px;
padding: 5px;
color: #666;
border: 1px solid #ccc;
background: #fff;
font-family: 'Montserrat', sans-serif;
}

#contact_form form .submit_btn {
font-family: 'Montserrat', sans-serif;
background: #de6ae2b0;
color: #fff;
cursor: pointer;
border: 0px;
padding: 7px 4px;
margin-right: 10px;
width: 90px;
}

.container {
margin: 0 auto;
width: 100%;
max-width: 960px;
padding: 0 15px;

}


.main {
margin-left: 23%;
max-width: 850px;
width: 70%;
color: #111;
font-weight: 100px;
font-family: 'Noto Sans', sans-serif;
letter-spacing: 1px;
line-height: 40px;
font-size: 14px;
line-height: 1;
}

@keyframes scroll {
0% {
    transform: translate(0, 0);
}

100% {
    transform: translate(-100%, 0);
}
}

</style>
