# week_23

### Вопросы 💎

1. Какую ошибку я допустила в [этом](https://www.notion.so/23-CSS-React-d4b0b61bb697459aacb1681ba2764440?pvs=21) примере?  

    ошибки нет

2. Какие есть способы работы со стилями в React?

    инлайновые стили, таблицы стилей, CSS модули и препроцессоры


3. Как будет выглядеть карточка товара, если ей передать атрибут `addedToCart`===0?

    также, как и просто при передаче атрибута addedToCart

4. Какие ещё проверки нужно было бы сделать для атрибута `addedToCart`?

    проверку на undefined/null

5. Клиент попросил повесить тег «New» на товары из новой коллекции. Как это сделать, какой условный оператор выбрать?

    через &&. если товар содержит имя коллекции, которая будет считаться новой, тогда добавить картинку "new" на карточку

6. Какими тремя способами можно написать условный рендеринг? 

    if, тернарный оператор, &&

7. Представьте, что вы пишете компонент логина. Если пользователь авторизован, то мы показываем его имя, а если нет, то даём возможность ввода логина и пароля. Какой код для этого нужно написать, если за авторизацию пользователя отвечает флаг isAutorized?

    //////{isAutorized
    ? <ShowNameDiv isAutorized={isAutorized} />
    : <SignInForm />
    }//////

8. В чём преимущества использования препроцессоров? Какой ещё есть способ использовать переменные, кроме $ в препроцессорах?

    -разделение на небольшие файлы
    -переменные
    -математические операции
    -вложения
    -амперсанды
    -примеси

    главное преимущество - упрощение написания кода