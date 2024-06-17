# mtg -test

Тестовое задание к на вакансию "Middle Frontend React JavaScript/разработчик (React на классах; js, программист) в офис".

## Техническое задание

### Описание задачи

Разработать Single Page Application (SPA) для отображения отзывов клиентов с использованием следующих компонентов:

1. **Header**:

   - Содержит изображение (картинка из открытых источников).
   - Выпадающий список для выбора языка (ru, en).
   - Компонент "Watch" отображает текущее время в формате "hh:mm:ss". Часы должны отображать реальное время.
2. **Main**:

   - Состоит из списка отзывов клиентов, данные загружаются из файла `data.json` (доступен по ссылке [data.json](https://disk.yandex.ru/d/1zUh9hte3u2emQ)).
   - Каждый отзыв содержит: имя клиента (в формате "Иванов И."), текст отзыва и дату.
   - На одной странице должно отображаться до 10 отзывов (максимальное количество). Если общее количество отзывов больше 10, должна быть реализована пагинация страниц. Формат пагинации: (min ... mid... max).

### Требования

- **Интерфейс**:

  - Изображение в блоке "Header" должно быть подходящего размера и взято из открытых источников (например, Unsplash).
  - Выпадающий список языков в "Header" должен позволять выбирать между русским (ru) и английским (en) языками.
  - Компонент "Watch" должен отображать текущее время и обновляться в реальном времени без перезагрузки страницы.
- **Отзывы**:

  - Данные отзывов должны быть загружены из файла `data.json`.
  - Каждый отзыв должен содержать полное имя клиента в формате "Фамилия И.".
  - Должна быть реализована пагинация для отзывов, если их количество превышает 10. Пагинация должна отображаться в формате (min ... mid... max), где "min" и "max" - ссылки на первую и последнюю страницу, а "mid" - ссылки на промежуточные страницы.
  - При клике на номер страницы или на ссылки "min", "max", "mid" должны отображаться соответствующие отзывы.


## Сборка проекта

### Установка зависимостей

Установите необходимые зависимости, выполнив команду:

```bash
npm install
```

### Переменные окружения

Если требуются переменные окружения (например, для API ключей или настроек базы данных), создайте файл `.env` на основе `.env.dist`, предоставленного в проекте, и заполните необходимыми значениями, такими как `PORT`.

#### Команды для сборки

- **Режим разработки с автоматическим открытием в браузере**:

```bash
npm start
```

Эта команда запустит проект в режиме разработки на порту, указанном в переменной окружения `PORT` (если не указано, будет использоваться порт по умолчанию `9000`) и автоматически откроет его в браузере.

### Сборка для production

Для сборки вашего проекта в `production` mode выполните следующую команду:

```bash
npm run build
```

После выполнения этой команды будет создан каталог `/dist` в корне вашего проекта. Этот каталог будет содержать собранные файлы и ресурсы, готовые для развертывания на сервере или другой платформе, предназначенной для `production` использования.

Для удаление всех дочерних файлов сборки с учетом каталога `./dist`.

```bash
npm run clean
```

Убедитесь, что все зависимости установлены корректно перед сборкой проекта.

## Для развития проекта и улучшения процесса разработки предлагаю следующие планы и рекомендации:

### 1. Добавление lint и prettier

Добавление инструментов статического анализа кода и форматирования:

- **ESLint** с плагином `@typescript-eslint/eslint-plugin` для проверки исходного кода на соответствие стандартам и правилам.
- **Prettier** для автоматического форматирования кода согласно установленным правилам.

### 2. Добавление common пакета

Использование common пакета для общих функций и утилит, который может включать:

- Общие компоненты интерфейса.
- Утилиты для работы с данными (например, функции для работы с датами, строками и т.д.).

### 3. Добавление CSS модулей

Использование CSS модулей для управления стилями компонентов:

- Интеграция `css-loader` и `style-loader` для загрузки и встраивания стилей.
- Организация стилей компонентов с помощью CSS модулей для изоляции их области применения.

### 4. Вынесение типов в отдельные группы каталогов

Структурирование типовых файлов:

- Создание отдельных каталогов для различных типов данных (например, `types`, `interfaces`).
- Группировка типов по их функциональному назначению для удобства доступа и поддержки.

### 5. Добавление Alias для быстрого доступа к каталогам

Настройка Alias для упрощения импортов:

- Настройка вебпака или TypeScript для использования Alias в импортах.
- Создание Alias для часто используемых каталогов или модулей (например, `@components`, `@utils`, `@types`).

### 6. Индексация файлов по группам на которые ссылается Alias

Структурирование файловой системы:

- Создание индексных файлов (`index.ts` или `index.tsx`) в каталогах для автоматического импорта всех экспортируемых модулей.
- Использование индексных файлов для удобного доступа к функциям и компонентам.

### 7. Добавление Storybook

Интеграция Storybook для разработки компонентов:

- Использование Storybook для демонстрации и тестирования компонентов в изоляции.
- Создание сторибуков для каждого компонента с различными состояниями и примерами использования.

### 8. Добавление Dockerfile для сборок на deploy

Использование Docker для упрощения развертывания и масштабирования проекта:

- Создание Dockerfile для сборки приложения в контейнер.
- Использование Docker Compose для локального развертывания и тестирования приложения в контейнеризированной среде.

### Технологии

Для реализации вышеперечисленных планов используются следующие технологии:

## Зависимости и технологии

```json
"dependencies": {
  "@reduxjs/toolkit": "^2.2.5",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-redux": "^9.1.2",
  "redux": "^5.0.1"
},
"devDependencies": {
  "@types/react": "^18.0.28",
  "@types/react-dom": "^18.0.11",
  "@types/react-redux": "^7.1.33",
  "@typescript-eslint/eslint-plugin": "^6.6.0",
  "@typescript-eslint/parser": "^6.6.0",
  "css-loader": "^6.8.1",
  "dotenv": "^16.4.5",
  "dotenv-webpack": "^8.1.0",
  "eslint": "^8.50.0",
  "eslint-plugin-react": "^7.33.0",
  "html-webpack-plugin": "^5.6.0",
  "style-loader": "^3.3.3",
  "ts-loader": "^9.5.1",
  "typescript": "^5.4.5",
  "webpack": "^5.92.0",
  "webpack-cli": "^5.1.4",
  "webpack-dev-server": "^5.0.4"
}
```
