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

function showDeveloperInfo(lastName, firstName, position = "Веб-розробник") {
    alert(
        `📌 Інформація про розробника сторінки:\n` +
        `Прізвище: ${lastName}\n` +
        `Ім'я: ${firstName}\n` +
        `Посада: ${position}`
    );
}

function compareStrings() {
    const str1 = prompt("Введіть перший рядок:");
    const str2 = prompt("Введіть другий рядок:");
    if (str1 === null || str2 === null) {
        alert("❌ Введення скасовано.");
        return; 
    }
    if (str1.length > str2.length) {
        alert(`✅ Довший рядок:\n"${str1}"\n\nЙого довжина: ${str1.length} символів`);
    } else if (str2.length > str1.length) {
        alert(`✅ Довший рядок:\n"${str2}"\n\nЙого довжина: ${str2.length} символів`);
    } else {
        alert(`📌 Рядки однакової довжини.\n\n"${str1}"\n"${str2}"\n\nДовжина: ${str1.length} символів`);
    }
}


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

function removeNotice() {
    const notice = document.getElementById("notice-banner");
    if (notice) {
        notice.style.transition = "opacity 0.4s";
        notice.style.opacity = "0";
        setTimeout(() => notice.remove(), 400);
    }
}

function addDynamicContent() {
    const container = document.querySelector(".dynamic-section");
    if (!container) return;

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

    newCard.append(title, desc, badge);

    const icon = document.createElement("div");
    icon.style.cssText = "font-size:2em; margin-bottom:8px;";
    icon.textContent = "⭐";
    newCard.prepend(icon);

    container.append(newCard); 

    const hint = document.createElement("p");
    hint.style.cssText = "color:#888; font-size:0.85em; text-align:center; margin-top:-10px;";
    hint.textContent = "* Книга тижня оновлюється щопонеділка";
    newCard.after(hint);

    const addBtn = document.getElementById("add-content-btn");
    if (addBtn) {
        const doneMsg = document.createElement("p");
        doneMsg.style.cssText = "color:#27ae60; font-weight:bold; text-align:center;";
        doneMsg.textContent = "✅ Контент додано успішно!";
        addBtn.replaceWith(doneMsg);
    }
}

function demonstrateDOMProperties() {
    const heading = document.getElementById("main-heading");
    if (heading) {
        heading.innerHTML = "Бібліотека <span style='color:#3498db'> — ваш портал у світ книг</span>";
        console.log("textContent заголовка:", heading.textContent);
        console.log("outerHTML заголовка:", heading.outerHTML);
    }
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
        const firstElement = card.firstElementChild;
        if (firstElement) {
            const textNode = firstElement.firstChild;
            if (textNode && textNode.nodeType === Node.TEXT_NODE) {
                console.log(`Текстовий вузол картки ${i}:`, textNode.data);
            }
        }
    });
}


// Обробник події миші
function highlightCard(event) {
    event.currentTarget.style.borderColor = "#3498db";
    event.currentTarget.style.borderWidth = "3px";
    event.currentTarget.style.borderStyle = "solid";
}

/**
 * Перший додатковий обробник mouseover через addEventListener
 */
function addCardShadow(event) {
    event.currentTarget.style.boxShadow = "0 8px 25px rgba(52,152,219,0.4)";
}

/**
 * Другий додатковий обробник mouseover через addEventListener
 */
function logCardHover(event) {
    console.log("Користувач навів мишу на картку:", event.currentTarget.id);
}

/**
 * Об'єкт-обробник події (патерн handleEvent)
 */
const cardHandler = {
    handleEvent(event) {
        console.log("cardHandler.handleEvent — currentTarget:", event.currentTarget);
        event.currentTarget.style.boxShadow = "";
        event.currentTarget.style.borderColor = "";
        event.currentTarget.removeEventListener("mouseout", cardHandler);
        console.log("Обробник mouseout (cardHandler) видалено після першого спрацювання");
    }
};

// initMouseEvents()
function initMouseEvents() {
    const libraryCard = document.getElementById("library-main-card");
    if (!libraryCard) return; // якщо елемент не існує — виходимо

    // через властивість об'єкта (onmouseover)
    libraryCard.onmouseover = highlightCard;

    // через addEventListener, перший обробник
    libraryCard.addEventListener("mouseover", addCardShadow);

    // через addEventListener, другий обробник на ту саму подію
    libraryCard.addEventListener("mouseover", logCardHover);

    // об'єкт-обробник з handleEvent (завдання 1г)
    libraryCard.addEventListener("mouseout", cardHandler);

    // Скидання стилів при виході курсору
    libraryCard.onmouseout = function () {
        libraryCard.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
        libraryCard.style.borderColor = "";
        libraryCard.style.borderWidth = "";
        libraryCard.style.borderStyle = "";
    };
    libraryCard.removeEventListener("mouseout", cardHandler); // скидаємо попереднє
    libraryCard.addEventListener("mouseout", cardHandler);    // додаємо знову

    setTimeout(() => {
        libraryCard.removeEventListener("mouseover", addCardShadow);
        console.log("addCardShadow видалено з картки через 10 секунд (removeEventListener)");
    }, 10000);
}



// ЗАВДАННЯ 2: ДЕЛЕГУВАННЯ ПОДІЙ

/**
 * ЗАВДАННЯ 2а — Підсвічування жанрів у списку
*/
function initGenreListHighlight() {
    const list = document.getElementById("genre-list");
    if (!list) return;

    list.onclick = function (event) {
        // Якщо клацнули не на <li> — ігноруємо
        if (event.target.tagName !== "LI") return;
        // Знімаємо виділення з усіх пунктів
        list.querySelectorAll("li").forEach(li => li.classList.remove("genre-active"));
        // Додаємо виділення до клацнутого пункту
        event.target.classList.add("genre-active");
        // Виводимо значення data-genre кліцнутого елемента
        console.log("Обраний жанр (event.target):", event.target.dataset.genre);
    };
}

/**
 * ЗАВДАННЯ 2б — Меню швидких дій 
 */
function initQuickMenu() {
    const quickMenu = document.getElementById("quick-menu");
    if (!quickMenu) return;

    quickMenu.addEventListener("click", function (event) {
        const btn = event.target.closest("[data-action]");
        if (!btn) return; 

        const action = btn.dataset.action; 

        if (action === "showBooks") {
            location.href = "books.html"; 
        } else if (action === "showAuthors") {
            location.href = "authors.html";
        } else if (action === "showContacts") {
            location.href = "contacts.html";
        } else if (action === "showDialog") {
            dialogWithUser(); 
        }
    });
}

/**
 * ЗАВДАННЯ 2в — Патерн «Поведінка» (Behavior)
 */
function initBehaviors() {
    document.addEventListener("click", function (event) {
        // closest шукає найближчий елемент з data-behavior, включно з самим event.target
        const el = event.target.closest("[data-behavior]");
        if (!el) return;

        const behavior = el.dataset.behavior; // читаємо тип поведінки

        if (behavior === "highlight") {
            // toggle — перемикає клас: є → видалити, немає → додати
            el.classList.toggle("behavior-highlight");
        }

        if (behavior === "expand") {
            // data-target="id" — id елемента, який треба показати/сховати
            const target = document.getElementById(el.dataset.target);
            if (target) {
                target.style.display = target.style.display === "none" ? "block" : "none";
            }
        }

        if (behavior === "toggle-map") {
            const map = document.getElementById("library-map");
            if (map) {
                map.style.display = map.style.display === "none" ? "block" : "none";
            }
        }

        if (behavior === "tooltip") {
            const msg = el.dataset.tooltipText || "Підказка";
            let tooltip = document.getElementById("behavior-tooltip");
            if (!tooltip) {
                tooltip = document.createElement("div");
                tooltip.id = "behavior-tooltip";
                tooltip.style.cssText = `
                    position:fixed; bottom:70px; right:20px;
                    background:#1f3348; color:white;
                    padding:10px 16px; border-radius:8px;
                    font-size:0.9em; z-index:9999;
                    animation: fadeIn 0.3s ease;
                    max-width:260px;
                `;
                document.body.append(tooltip);
            }
            tooltip.textContent = msg;
            clearTimeout(tooltip._timer); 
            tooltip._timer = setTimeout(() => tooltip.remove(), 3000);
        }

        if (behavior === "confirm-nav") {
            event.preventDefault(); 
            const href = el.dataset.href;
            const confirmMsg = el.dataset.confirmMsg || "Перейти?";
            if (confirm(confirmMsg)) location.href = href;
        }

        if (behavior === "copy-text") {
            const text = el.dataset.copyValue || el.textContent;
            navigator.clipboard.writeText(text).then(() => {
                const orig = el.textContent;
                el.textContent = "✅ Скопійовано!";
                setTimeout(() => (el.textContent = orig), 2000);
            });
        }
    });
}



// ІНІЦІАЛІЗАЦІЯ ДЛЯ СТОРІНКИ: index.html (Головна)

function initIndexPage() {
    // Перевіряємо, чи ми на головній сторінці за наявністю унікального елемента
    if (!document.getElementById("library-main-card")) return;

    setTimeout(function () {
        alert("👋 Ласкаво просимо до нашої бібліотеки!\nТут ви знайдете найкращі книги для душі й розвитку");
    }, 300);

    // Демонстрація DOM-властивостей
    demonstrateDOMProperties();

    // Завдання 1: обробники миші на картку
    initMouseEvents();

    // Завдання 2а: підсвічування жанрів
    initGenreListHighlight();

    // Завдання 2б: меню швидких дій
    initQuickMenu();

}


// ІНІЦІАЛІЗАЦІЯ ДЛЯ СТОРІНКИ: books.html (Книги)

function initBooksPage() {
    if (!document.getElementById("popular-list")) return;

    // ЗАВДАННЯ 2а — Підсвічування книг у списку <ol>
    const popularList = document.getElementById("popular-list");
    let selectedBook = null; 

    popularList.onclick = function (event) {
        if (event.target.tagName !== "LI") return;
        if (selectedBook) {
            selectedBook.style.background = "";
            selectedBook.style.color = "";
            selectedBook.style.borderRadius = "";
            selectedBook.style.padding = "";
            selectedBook.style.fontWeight = "";
        }
        // Підсвічуємо новий елемент
        event.target.style.background = "#3498db";
        event.target.style.color = "white";
        event.target.style.borderRadius = "6px";
        event.target.style.padding = "4px 8px";
        event.target.style.fontWeight = "bold";
        selectedBook = event.target; // запам'ятовуємо обраний елемент
        console.log("Обрана книга (event.target):", event.target.textContent.trim());
    };

    // ЗАВДАННЯ 2б — Меню фільтрації за жанром
    // Один обробник на весь div#genre-filter-menu
    const filterMenu = document.getElementById("genre-filter-menu");
    if (!filterMenu) return;

    filterMenu.addEventListener("click", function (event) {
        const btn = event.target.closest("button[data-action]");
        if (!btn) return;
        filterMenu.querySelectorAll("button").forEach(b => b.classList.remove("active-filter"));
        btn.classList.add("active-filter");

        const action = btn.dataset.action;

        const genreMap = {
            filterRomance: "romance",
            filterDetective: "detective",
            filterFantasy: "fantasy"
        };

        // Клітинки рядка з жанрами (останній рядок таблиці)
        const cells = document.querySelectorAll("#genre-row td");
        cells.forEach(cell => {
            const col = cell.cellIndex + 1;
            // Вибираємо всі клітинки цього стовпця (і th і td)
            const colCells = document.querySelectorAll(
                `#books-table td:nth-child(${col}), #books-table th:nth-child(${col})`
            );
            if (action === "filterAll") {
                colCells.forEach(c => c.style.opacity = "1");
            } else {
                // Відповідні жанру — повна непрозорість, інші — 20%
                const opacity = cell.dataset.genre === genreMap[action] ? "1" : "0.2";
                colCells.forEach(c => c.style.opacity = opacity);
            }
        });
        console.log("Фільтр (event.target):", event.target.textContent.trim(), "| action:", action);
    });
}


// ІНІЦІАЛІЗАЦІЯ ДЛЯ СТОРІНКИ: authors.html (Автори)

const authorData = {
    wilde: {
        name: "Оскар Уайльд",
        years: "1854–1900",
        country: "Ірландія",
        genre: "Роман, п'єса, казка, поезія",
        fact: "Відомий своїм дотепним стилем і філософськими романами"
    },
    austen: {
        name: "Джейн Остін",
        years: "1775–1817",
        country: "Англія",
        genre: "Роман, соціальна сатира",
        fact: "Її романи досліджують теми шлюбу, моралі та становища жінок"
    },
    christie: {
        name: "Агата Крісті",
        years: "1890–1976",
        country: "Англія",
        genre: "Детектив",
        fact: "Найбільш видаваний автор детективів в історії літератури"
    },
    rowling: {
        name: "Джоан Роулінг",
        years: "1965 — дотепер",
        country: "Великобританія",
        genre: "Фентезі, драма",
        fact: "Серія про Гаррі Поттера перекладена більш ніж 80 мовами світу"
    }
};

function initAuthorsPage() {
    if (!document.getElementById("authors-table")) return;

    // ЗАВДАННЯ 2а — Делегування кліків по таблиці авторів
    // Обробник на <table>, event.target.closest(".author-row") — шукає рядок
    const authorsTable = document.getElementById("authors-table");
    let selectedRow = null;

    authorsTable.onclick = function (event) {
        // closest(".author-row") — знаходить найближчий рядок таблиці з цим класом
        const row = event.target.closest(".author-row");
        if (!row) return;
        if (selectedRow) selectedRow.classList.remove("selected");
        row.classList.add("selected");
        selectedRow = row;

        // Отримуємо дані автора з об'єкта authorData за ключем data-author
        const data = authorData[row.dataset.author];
        const infoBox = document.getElementById("author-info-box");
        infoBox.style.display = "block";

        infoBox.innerHTML = `
            <h3 style="margin:0 0 8px; color:#1f3348;">📌 ${data.name}</h3>
            <p><b>Роки життя:</b> ${data.years}</p>
            <p><b>Країна:</b> ${data.country}</p>
            <p><b>Жанр:</b> ${data.genre}</p>
            <p><b>Цікавий факт:</b> ${data.fact}</p>
        `;
        console.log("Клік по таблиці (event.target):", event.target.tagName, "| Автор:", row.dataset.author);
    };
}

function changeDomDemo() {
    const heading = document.getElementById("dom-demo-heading");
    if (heading) {
        heading.innerHTML = "Оскар Уайльд <span style='color:#3498db; font-weight:normal;'>— ірландський письменник</span>";
        console.log("textContent:", heading.textContent);
        console.log("outerHTML:", heading.outerHTML);
        const rows = document.querySelectorAll("table tr");
        console.log("Рядків у таблиці авторів:", rows.length);
        rows.forEach((row, i) => {
            const firstCell = row.querySelector("td"); 
            if (firstCell) {
                const node = firstCell.firstChild;
                if (node && node.nodeType === Node.TEXT_NODE) {
                    console.log(`Рядок ${i}, data:`, node.data);
                }
            }
        });
    }
    const extra = document.getElementById("author-extra");
    if (extra) {
        extra.style.display = "block";
        extra.style.animation = "fadeIn 0.4s ease";
    }
    alert("✅ DOM-властивості продемонстровано!\nПеревірте консоль (F12) для деталей.");
}


// ІНІЦІАЛІЗАЦІЯ ДЛЯ СТОРІНКИ: contacts.html (Контакти)

function initContactsPage() {
    if (!document.getElementById("contacts-list")) return;

    // ЗАВДАННЯ 2а — Копіювання контактів через делегування на <ul>
    const contactsList = document.getElementById("contacts-list");

    contactsList.onclick = function (event) {
        const item = event.target.closest(".contact-item");
        if (!item) return;
        // Знімаємо стан "скопійовано" з усіх елементів
        document.querySelectorAll(".contact-item").forEach(i => i.classList.remove("copied"));
        item.classList.add("copied");
        const textToCopy = item.dataset.copy; 
        navigator.clipboard.writeText(textToCopy).then(() => {
            const original = item.innerHTML;
            item.innerHTML += ' <span style="color:#27ae60; font-size:0.85em;">✓ скопійовано</span>';
            setTimeout(() => { item.innerHTML = original; }, 2000);
        });
        console.log("Клік на контакт (event.target):", event.target.tagName, "| Дані:", textToCopy);
    };

    // ЗАВДАННЯ 2б — Меню дій з картою
    const contactsMenu = document.getElementById("contacts-menu");
    if (!contactsMenu) return;

    contactsMenu.addEventListener("click", function (event) {
        const btn = event.target.closest("button[data-action]");
        if (!btn) return;
        const action = btn.dataset.action;
        // querySelector(".card iframe") — знаходить перший iframe всередині .card
        const mapCard = document.querySelector(".card iframe")?.closest(".card");

        if (action === "zoomIn") {
            if (mapCard) {
                mapCard.style.transform = "scale(1.03)";
                mapCard.style.transition = "transform 0.3s";
                mapCard.style.transformOrigin = "top center";
            }
        } else if (action === "zoomOut") {
            if (mapCard) mapCard.style.transform = "scale(1)";
        } else if (action === "showInfo") {
            alert("📍 Бібліотека знаходиться за адресою:\nм. Кропивницький, вул. Велика Перспективна 24\n\nГодини роботи:\nПн–Пт: 09:00–19:00\nСб: 10:00–16:00\nНд: вихідний");
        } else if (action === "goToIndex") {
            location.href = "index.html";
        }
        console.log("Меню карти (event.target):", event.target.textContent.trim(), "| action:", action);
    });

    // Функції оголошень
    initAnnouncements();
}

// Лічильник та тексти оголошень для сторінки контактів
let announcementCount = 0;
const announcementTexts = [
    "📅 Літературний вечір: 28 квітня о 18:00",
    "📚 Нові надходження: 45 книг у відділі фантастики",
    "🔇 Нагадуємо: тиша у читальному залі обов'язкова",
    "🎉 День бібліотеки: 27 травня — вхід вільний!"
];

function initAnnouncements() {
}

function sendFeedback() {
    let question = prompt("Введіть ваше питання або пропозицію для бібліотеки:");
    if (question === null || question.trim() === "") {
        alert("Запит скасовано. Чекаємо на ваше звернення!");
        return;
    }
    let confirmed = confirm(`Ваше питання:\n«${question}»\n\nНадіслати до бібліотеки?`);
    if (confirmed) {
        const section = document.getElementById("feedback-section");
        const successMsg = document.createElement("div");
        successMsg.style.cssText = "margin-top:15px; padding:12px; background:#eafaf1; border-left:4px solid #27ae60; border-radius:6px;";
        const p = document.createElement("p");
        p.style.color = "#1e8449";
        const icon = document.createTextNode("✅ ");
        const text = document.createTextNode(`Дякуємо! Питання «${question}» отримано. Відповімо на library@email.com`);
        p.append(icon, text);
        successMsg.append(p);
        const btn = document.getElementById("feedback-btn");
        if (btn) btn.after(successMsg);
        alert("✅ Ваш запит надіслано! Дякуємо за звернення");
    } else {
        alert("Надсилання скасовано");
    }
}

function addAnnouncement() {
    if (announcementCount >= announcementTexts.length) {
        alert("📭 Нових оголошень наразі немає. Завітайте пізніше!");
        return;
    }
    const container = document.getElementById("announcements-section");
    const noAnn = document.getElementById("no-announcements");
    if (noAnn) noAnn.remove();

    const item = document.createElement("div");
    item.style.cssText = "padding:10px; margin:8px 0; background:#eaf4fb; border-left:4px solid #3498db; border-radius:6px;";
    item.className = "announcement-item";
    const span = document.createElement("span");
    span.textContent = announcementTexts[announcementCount];
    announcementCount++;
    item.append(span);
    container.prepend(item);
}

function removeLastAnnouncement() {
    const container = document.getElementById("announcements-section");
    const items = container.querySelectorAll(".announcement-item");
    if (items.length === 0) {
        alert("Оголошень немає для видалення.");
        return;
    }
    items[0].remove(); 
    announcementCount--;
    if (container.querySelectorAll(".announcement-item").length === 0) {
        const ph = document.createElement("p");
        ph.id = "no-announcements";
        ph.style.cssText = "color:#888; font-style:italic;";
        ph.textContent = "Оголошень поки немає";
        container.append(ph);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    initBehaviors();
    initIndexPage();
    initBooksPage();
    initAuthorsPage();
    initContactsPage();
});