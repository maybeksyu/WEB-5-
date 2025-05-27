        $(document).ready(function() {
            // Функция для первой задачи
            function runTask1() {
                // Убираем предыдущее выделение
                $("#moto_models li").removeClass("highlight");
                
                // Находим элементы с jQuery
                const $motoItems = $("#moto_models li:contains('мотоцикл')");
                
                // Выводим результат
                const $result1 = $("#result1");
                $result1.html(`<p>Найдено элементов: ${$motoItems.length}</p>`);
                
                if ($motoItems.length) {
                    $result1.append("<ul>");
                    $motoItems.each(function() {
                        $(this).addClass("highlight");
                        $result1.append(`<li>${$(this).text()}</li>`);
                    });
                    $result1.append("</ul>");
                } else {
                    $result1.append("<p>Элементы не найдены</p>");
                }
            }
            
            // Функция для второй задачи
            function runTask2() {
                // Убираем предыдущее выделение
                $("#forfooter img").css("border", "1px solid #ddd");
                
                // Находим элементы с jQuery
                const $manufacturerImages = $('#forfooter img[title="Производители"]');
                
                // Выводим результат
                const $result2 = $("#result2");
                $result2.html(`<p>Найдено изображений: ${$manufacturerImages.length}</p>`);
                
                if ($manufacturerImages.length) {
                    $manufacturerImages.css("border", "3px solid red");
                    $manufacturerImages.each(function() {
                        $result2.append(
                            `<img src="${$(this).attr("src")}" title="${$(this).attr("title")}" style="max-width:100px; margin:5px;">`
                        );
                    });
                } else {
                    $result2.append("<p>Изображения не найдены</p>");
                }
            }
            
            // Функция для третьей задачи
            function runTask3() {
                // Убираем предыдущее выделение
                $("#moto_table td").removeClass("highlight");
                
                // Находим элементы с jQuery
                const $lastCells = $("#moto_table tr:even td:last-child");
                
                // Выводим результат
                const $result3 = $("#result3");
                $result3.html(`<p>Найдено ячеек: ${$lastCells.length}</p>`);
                
                if ($lastCells.length) {
                    $result3.append("<ul>");
                    $lastCells.each(function() {
                        $(this).addClass("highlight");
                        $result3.append(`<li>${$(this).text()}</li>`);
                    });
                    $result3.append("</ul>");
                } else {
                    $result3.append("<p>Ячейки не найдены</p>");
                }
            }
            
            // Запускаем все задачи при загрузке страницы
            runTask1();
            runTask2();
            runTask3();
        });