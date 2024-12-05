# Kinoprosmotr 
<br>

## Ссылка на GitHub Pages:
https://gusevaang.github.io/kinoprosmotr/#/
<br>
<br>

## Описание:
Kinoprosmotr - фронтенд приложение для поиска информации о фильмах и сериалах (аналог Кинопоиска).На главной странице пользователи могут увидеть последние выпущенные фильмы в карусели, а также находить карточки фильмов и сериалов, которые можно сортировать по типам и жанрам. При нажатии на карточку фильма, пользователи переходят на страницу с подробной информацией о фильме, включая название, страну, год производства, описание, жанры, рейтинг, актерский состав и съемочную группу, интересные факты, похожие фильмы и рецензии. На странице поиска можно найти фильм по совпадению ключевых слов, есть отдельная страница с подборками фильмов по жанрам, годам и странам производства. Реализована функция добавления понравившейся картины в избранное. 
<br>
<br>
<br>
<br>

## Технологии:
* HTML
* SCSS, CSS modules
* JavaScript (ES6)
* React
* MobX
* Axios
<br>
<br>
<br>
<br>

## Установка:
1. Клонирование репозитория: 
```
git clone https://github.com/GusevaAng/kinoprosmotr.git 
```
2. Переход в директорию проекта:
```
cd kinoprosmotr
```
3. Установка зависимостей:
```
npm install
```
4. Запуск проекта:
```
npm run dev
```
<br>
<br>
<br>
<br>

## Структура проекта:
* public/ — Статические файлы
* src/ — Исходный код приложения
    * api/ - API запросы 
    * assets/ — Статические файлы
    * components/ - Компоненты ключевых блоков
    * constants/ - Константы
    * data/ - Мок-данные
    * fonts/ - Шрифты
    * pages/ - Страницы приложения
    * store/ - MobX хранилища
    * styles/ - Переиспользуемые SCSS стили
    * ui/ - Компоненты пользовательского интерфейса
* index.html - Файл входа для приложения
<br>
<br>
<br>
<br>

## Функционал приложения:
* Сортировка и фильтрация контента по типам, жанрам, странам, годам и странам производства
* Переход на страницы с подробной информацией о фильмах и сериалах
* Поиск фильмов и сериалов по ключевым словам
* Подборки фильмов и сериалов по жанрам и годам
* Добавление фильмов и сериалов в список понравившихся картин
<br>
<br>
<br>
<br>

## API 
Документация для неофициального API кинопоиска (kinopoisk.dev): https://api.kinopoisk.dev/documentation