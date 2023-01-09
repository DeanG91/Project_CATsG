# Project_CATsG

[Live Github Page](https://deang91.github.io/Project_CATsG/)

Требования:

Для получения 1 балла:

- Отобразить на странице информацию обо всех котиках, которые есть в Базе данных.

Для получения 2 баллов:

- На сайте должна быть реализована возможности добавить нового кота.
- При нажатии на карточку с котом (на главной странице) отображается информация в модальном окне об этом коте.

---

Ссылки для fetch-запросов

{db} - ваше уникальное имя. Советуем использовать nickname из github (строчные латинские буквы).

{id} - порядковый номер кота в базе данных (число).

---

Описание API

GET - получить информацию обо всех котах

https://cats.petiteweb.dev/api/single/{db}/show/

GET - получить информацию об одном котике по id
https://cats.petiteweb.dev/api/single/{db}/show/{id}

POST - добавить нового кота (id, name - обязательно!)
https://cats.petiteweb.dev/api/single/{db}/add/
Тело запроса может включать следующие поля:
id (обязательное поле) — число
age — число
name (обязательное поле) — строка
rate — число от 1 до 10
description — строка
favorite — логическое значение true или false
image — строка. Ссылка на картинку

PUT - изменить информацию о коте (запрещено менять id и name)
https://cats.petiteweb.dev/api/single/{db}/update/{id}

Тело запроса может включить все поля из предыдущего пункта, кроме id и name

DELETE - удалить кота
https://cats.petiteweb.dev/api/single/{db}/delete/{id}
