# cron-schedule editor

простой редактор строки CRON на React 

макет строки: mn h d mh dw
значения: 
+ mn - минуты (0-59)
+ h - часы (0-23)
+ d - день (1-31)
+ mh - месяц (1-12)
+ dw - день недели (MON, TUE, WED, THU, FRI, SAT, SUN)

Пример:
+ 00 10 * * * - задача будет запускаться каждый день в 10:00
+ 00 10 8 * * - задача будет запускаться каждый месяц 8го числа в 10:00
+ 5 * * * * - задача будет запускать каждый час в 5 минут (например 10:05, 11:05, 12:05)
+ 0 6 * * MON - задача будет запускаться каждый понедельник в 6:00
+ 0 6 * 7 * - задача будет запускаться каждый день в июле в 6:00

в редакторе можно сгенерировать cron-строку с помощью полей формы и ввести значение самостоятельно. для этого необходимо нажать на кнопку "Enter". 

для настройки режима нужно выбрать период для расписания - Weekly/Daily/Monthly/Custom

кнопка "Clear" очищает строку и обновляет поля формы.

если значение введено неверно (не соответствует маске ввода cron-строки), то текст будет выделен красным цветом и кнопка "Save to file" будет недоступна.


