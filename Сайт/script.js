

$(document).ready(function(){
    // Обробник події для кнопки "Записатися"
    $("form").submit(function(event){
        // Зупиняємо стандартну дію форми (відправку даних на сервер)
        event.preventDefault();

        // Отримання даних з полів форми
        var name = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var service = $("#service").val();
        var date = $("#date").val();
        var time = $("#time").val();
        var message = $("#message").val();

        // Валідація даних (додайте свої власні перевірки, які потрібні)
        if(name === "" || phone === "" || email === "" || service === "" || date === "" || time === ""){
            alert("Будь ласка, заповніть всі обов'язкові поля.");
            return;
        }

        // Відправлення даних на сервер за допомогою Ajax
        $.ajax({
            url: "submit_appointment.php", // URL для обробки запиту на сервері
            type: "POST",
            data: {
                name: name,
                phone: phone,
                email: email,
                service: service,
                date: date,
                time: time,
                message: message
            },
            success: function(response){
                // Показати модальне вікно або відобразити алерт
                alert("Дякуємо за запис!");

                // Очищення полів форми після успішного відправлення
                $("#name").val("");
                $("#phone").val("");
                $("#email").val("");
                $("#service").val("");
                $("#date").val("");
                $("#time").val("");
                $("#message").val("");
            },
            error: function(xhr, status, error){
                // Обробка помилки під час відправлення запиту
                alert("Сталася помилка. Спробуйте ще раз.");
            }
        });
    });
});

