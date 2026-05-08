// «Діалог з користувачем» 
function dialogWithUser() {
    let name = prompt("Вітаємо у бібліотеці! Як вас звати?", "Читач");
    if (name === null || name.trim() === "") {
        name = "Гість";
    }

    let confirmed = confirm(`Доброго дня, ${name}! Бажаєте переглянути каталог книг?`);

    let genres = ["Класична література", "Детективи", "Фантастика", "Романи"];
    let result = `Привіт, ${name}!\n\n`;

    if (confirmed) {
        result += "Ось доступні жанри у нашій бібліотеці:\n";
        for (let i = 0; i < genres.length; i++) {
            result += `${i + 1}. ${genres[i]}\n`;
        }
        result += "\nЗапрошуємо до читання!";
    } else {
        result += "Дякуємо за відвідування! Чекаємо вас знову.";
    }

    alert(result);
}

//Функція виводу інформації про розробника
function showDeveloperInfo(lastName, firstName, position = "Веб-розробник") {
    alert(
        `📌 Інформація про розробника сторінки:\n` +
        `Прізвище: ${lastName}\n` +
        `Ім'я: ${firstName}\n` +
        `Посада: ${position}`
    );
}

//Функція порівняння двох рядків
function compareStrings() {

    const str1 = prompt("Введіть перший рядок:");
    const str2 = prompt("Введіть другий рядок:");

    if (str1 === null || str2 === null) {
        alert("❌ Введення скасовано.");
        return;
    }

    if (str1.length > str2.length) {
        alert(
            `✅ Довший рядок:\n"${str1}"\n\n` +
            `Його довжина: ${str1.length} символів`
        );

    } else if (str2.length > str1.length) {
        alert(
            `✅ Довший рядок:\n"${str2}"\n\n` +
            `Його довжина: ${str2.length} символів`
        );

    } else {
        alert(
            `📌 Рядки однакової довжини.\n\n` +
            `"${str1}"\n"${str2}"\n\n` +
            `Довжина: ${str1.length} символів`
        );
    }
}

//Зміна фону сторінки на 30 секунд
function changeBgFor30Sec() {
    const originalBg = document.body.style.background;
    document.body.style.background = "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)";
    document.body.style.transition = "background 0.8s ease";

    let seconds = 30;
    const countdown = document.getElementById("bg-countdown");
    if (countdown) {
        countdown.style.display = "block";
        countdown.textContent = `🌙 Нічний режим активовано. Повернення через ${seconds} сек.`;
    }

    const timer = setInterval(() => {
        seconds--;
        if (countdown) {
            countdown.textContent = `🌙 Нічний режим активовано. Повернення через ${seconds} сек.`;
        }
        if (seconds <= 0) {
            clearInterval(timer);
            document.body.style.background = originalBg || "#dfe9f3";
            if (countdown) {
                countdown.style.display = "none";
            }
        }
    }, 1000);
}

//location
function goToBooks() {
    location.href = "books.html";
}

function goToAuthors() {
    location.href = "authors.html";
}

//getElementById, querySelectorAll + innerHTML, outerHTML, textContent, nodeValue/data 
function demonstrateDOMProperties() {

    // getElementById
    const heading = document.getElementById("main-heading");

    if (heading) {

        // innerHTML
        heading.innerHTML = "Бібліотека <span style='color:#3498db'> — ваш портал у світ книг</span>";

        // textContent
        console.log(
            "textContent заголовка:",
            heading.textContent
        );

        // outerHTML
        console.log(
            "outerHTML заголовка:",
            heading.outerHTML
        );
    }

    // querySelectorAll
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {

        const firstElement = card.firstElementChild;
        if (firstElement) {
            const textNode = firstElement.firstChild;
            // nodeValue / data
            if (
                textNode &&
                textNode.nodeType === Node.TEXT_NODE
            ) {
                console.log(
                    `Текстовий вузол картки ${i}:`,
                    textNode.data
                );
            }
        }
    });
}

function addPar (){
    const card = document.getElementById("intcard");

    const newP = document.createElement("p");
    newP.textContent = "Привіт"
    card.prepend(newP)
}

//document.write, createElement, createTextNode, append/prepend/after/replaceWith/remove
function addDynamicContent() {
    const container = document.querySelector(".dynamic-section");
    if (!container) return;

    // createElement + createTextNode + append
    const newCard = document.createElement("div");
    newCard.className = "card dynamic-card";
    newCard.style.cssText = "border-left: 4px solid #3498db; animation: fadeIn 0.5s ease;";

    const title = document.createElement("h3");
    title.style.color = "#1f3348";
    const titleText = document.createTextNode("📖 Книга тижня від бібліотеки");
    title.append(titleText);

    const desc = document.createElement("p");
    desc.textContent = "«451° за Фаренгейтом» — Рей Бредбері. Захопливий роман-антиутопія про суспільство, яке втратило цінність книг і критичного мислення";

    const badge = document.createElement("span");
    badge.className = "btn";
    badge.textContent = "🏆 Рекомендовано";
    badge.style.cssText = "background:#27ae60; cursor:default;";

    // append
    newCard.append(title, desc, badge);

    // prepend
    const icon = document.createElement("div");
    icon.style.cssText = "font-size:2em; margin-bottom:8px;";
    icon.textContent = "⭐";

    newCard.prepend(icon);

    // after
    const hint = document.createElement("p");
    hint.style.cssText = "color:#888; font-size:0.85em; text-align:center; margin-top:-10px;";
    hint.textContent = "* Книга тижня оновлюється щопонеділка";

    container.append(newCard);
    newCard.after(hint);

    // replaceWith: замінюємо кнопку «Додати» на повідомлення
    const addBtn = document.getElementById("add-content-btn");
    if (addBtn) {
        const doneMsg = document.createElement("p");
        doneMsg.style.cssText = "color:#27ae60; font-weight:bold; text-align:center;";
        doneMsg.textContent = "✅ Контент додано успішно!";
        addBtn.replaceWith(doneMsg);
    }
}

// Видалення вузла
function removeNotice() {
    const notice = document.getElementById("notice-banner");
    if (notice) {
        notice.style.transition = "opacity 0.4s";
        notice.style.opacity = "0";
        setTimeout(() => notice.remove(), 400);
    }
}
