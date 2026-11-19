21 CI/CD проекта - линтинг, тесты и деплой 17.11.2026

Описание/Пошаговая инструкция выполнения домашнего задания:

1. создать новый репозиторий инициализированный пустым коммитом
   git init
   git add README.md
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/greyambler/setup-demo-2026.git
   git push -u origin main

2. открыть MR с изменениями из ДЗ
   git checkout -b setup-repo
   npm init -y
   npm create vite@latest
   Project name:
   .
   ◇ Current directory is not empty. Please choose how to proceed:
   Ignore files and continue
   ◇ Select a framework:
   Vanilla
   ◇ Select a variant:
   JavaScript
   ◇ Install with npm and start now?
   Yes
   ◇ Scaffolding project in E:\Obuchenie\WorkOtus\Work\setup-demo-2026...

3. настроить сборку HTML страницы с подключением css + js

4. настроить линтеры и прекоммит-хуки
   npm i eslint prettier -D
   npx eslint --init
   "format": "npx prettier --write .",
   "lint": "npx prettier --check . && npx eslint .",
   "lint:fix": "npx prettier --write . && npx eslint ./src --fix"

   npm i -D husky lint-staged
   npx husky init
   pre-commit => npx lint-staged
   pre-push => npm run test

   "lint-staged": {
   "_.{js,jsx}": "npx eslint --fix",
   "_.{js,jsx,json,html,yml,css,scss,md}": "npx prettier --check"
   }

5. настроить пайплайн для запуска тестов и линтера
   npm install -D vitest

   # npx vitest init browser

   package.json => "test": "npx vitest --dom"

6. настроить пайплайн для деплоя собранной страницы на github pages
   git push -u

https://github.com/vvscode/otus--jsbasic/blob/master/lessons/lesson13/task.md

Критерии оценки:
Домашнее задание «Принято» при наборе 3 и более баллов, иначе «На доработку».

MR содержит только релевантные изменения, настроена сборка HTML + JS, настроен пайплайн линтеров, настроен пайплайн депло, приложение задеплоено и ссылка на него есть в PR — 3 балла.
К сборке корректно подключается CSS — +1 балл.
В пайплайне настроен запуск тестов и есть минимум 1 тест — +1 балл.
Максимальный балл — 5.

Компетенции:
Настройка окружения JS

- Знать про автоматический контроль качества кода: что такое и как настроить линтер
- Знать базу работы с CI/CD: что это и зачем используется
- Настраивать деплой приложения на GithubPages
