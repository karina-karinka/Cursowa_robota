<?php
// Перевіряємо, чи отримано дані з POST-запиту
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримуємо дані форми
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $service = $_POST['service'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $message = $_POST['message'];

    // Формуємо рядок для збереження у файлі
    $data = "Ім'я: $name\nТелефон: $phone\nEmail: $email\nПослуга: $service\nДата: $date\nЧас: $time\nДодаткова інформація: $message\n\n";

    // Відкриваємо файл для запису
    $file = fopen("appointments.txt", "a");

    // Записуємо дані у файл
    fwrite($file, $data);

    // Закриваємо файл
    fclose($file);

    // Повертаємо повідомлення про успішну операцію
    echo "Дякуємо за запис! Ваша інформація успішно збережена.";
} else {
    // Якщо дані не були отримані через POST-запит, повертаємо помилку
    http_response_code(405);
    echo "Метод запиту не підтримується.";
}

