// ==UserScript==
// @name         rutracker in english
// @namespace    http://tampermonkey.net/
// @version      1.8
// @description  Some english translations for rutracker's UI
// @author       n
// @match        https://rutracker.org/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    /* Array of replacements: [original text, replacement text] */
    const replacements = {
    /* Torrent descriptions */
        "Формат записи": "Recording Format",
        "Источник записи": "Recording Source",
        "Наличие водяных знаков": "Presence of watermarks",
        "Год издания": "Year of publication",
        "переиздания диска": "reissue of the disc",
        "Год editions": "Year editions",
        "переeditions диска": "re-editions of the disc",
        "Наличие сканов в содержимом раздачи": "Availability of scans in the distribution content",
        "Наличие сканов": "Availability of scans",
        "Только обложка альбома": "Only album cover",
        "Тип рипа": "Type of rip",
        "Количество каналов": "Number of channels",
        "Лог проверки качества": "Quality check log",
        "Последние поблагодарившие": "Last thanked",
        "В разделе": "In the section",
        "Опции показа": "Options",
        "Версия для печати": "Print version",
        "картинки званий": "pictures called",
        "картинки в сообщениях": "pictures in messages",
        "Добавить в": "Add to",
        "спойлер открытым": "spoiler open",
        "Об альбоме": "About the album",
        "Сравнить с др. раздачей": "Compare with other distribution",
        "Увел./умен. окно": "Increase/decrease window",
        "месяц назад": "month ago",
        "Год выпуска": "Year of issue",
        "Страна-производитель": "Country of origin",
        "скрытый текст": "hidden text",
        "Спектр,АЧХ,УЗ": "Spectrum, frequency response, ultrasound",
        "Программа-оцифровщик": "Digitizer program",
        "Предварительный усилитель": "Pre-amp",
        "Головка звукоснимателя": "Pickup head",
        "Устройство воспроизведения": "Playback device",
        "Код класса состояния винила": "Vinyl condition",
        "Декликер": "Declicker",
        "автором": "by the author",
        "фильтр шума по образцу": "noise filter by sample",
        "Как качать": "How to download",
        "Покраснели раздачи": "Are the distributions red",
        "Сетевое питание": "Network power supply",
        "Спектр, АЧХ, Уровень": "Spectrum, Frequency Response, Level",
        "разделение на треки": "Split into tracks",
        "Вакуумная виниломойка": "Vacuum vinyl washer",
        "редактором не чищу и не обрабатываю": "I don't use an editor to clean or process it",
        "Содержание индексной карты": "Cuesheet",
        "Уровень записи": "Recording level",
        "Доп. информация": "Additional information",
        /* Phrases */
        "Знаменитости и кумиры": "Celebrities and idols",
        "Музыкальная литература и Теория": "Music Literature and Theory",
        "Поиск по раздачам": "Search by distribution",
        "Перейти к разделу": "Go to section",
        "по разделу": "by section",
        "Упорядочить по": "Sort by",
        "Показывать только": "Show only",
        "Торренты за": "Torrents for",
        "Автор раздачи": "Author of the distribution",
        "Мои раздачи": "My distributions",
        "Название содержит": "Title contains",
        "В подразделах": "In subsections",
        "Всех разделах": "All sections",
        "B Google": "On Google",
        "Простой поиск": "Simple search",
        "Ссылка на выбранные разделы": "Link to selected sections",
        "Помощь по поиску": "Search help",
        "Поп-музыка": "Pop music",
        "Электронная музыка": "Electronic music",
        "Рок-музыка": "Rock music",
        "Джаз и Блюз": "Jazz & Blues",
        "Духовные песнопения": "Spiritual chants",
        "Музыка разных жанров": "Music of different genres",
        "и многоканальная музыка": "and multi-channel",
        "Классика и классика в современной обработке": "Classical",
        "Классика в современной обработке": "Modern Classical",
        "Результатов поиска": "Search results",
        "Пополнить баланс Steam": "Top up your Steam balance",
        "многоканальная музыка": "multi-channel",
        "Конверсии SACD": "SACD Conversions",
        "Unofficial compilations and remasterings": "Unofficial remasters",
        "Манга (на иностранных языках)": "Manga (in foreign languages)",
        "Пошаговые стратегии": "Step-by-Step Strategies",
        "Только открытые раздачи": "Open giveaways only",
        "Скрыть содержимое": "Hide content",
        "Новые с посл": "New from last",
        "за все время": "for all time",
        "Все имеющиеся": "All available",
        "Оркестровая музыка": "Orchestral music",
        "Восточноазиатский": "East Asian rock",
        "Латиноамериканская": "Latin American",
        "Полные собрания сочинений": "Complete works",
        "Новинки": "New releases",
        "сериалы в стадии показа": "TV series currently airing",
        "сериалы в стадии показ": "TV series currently airing",
        "Естествознание": "Natural history",
        "на языках народов": "in the languages of ",
        "Советская эстрада": "Soviet stage",
        "Популярная музыка России": "Popular music of Russia",
        "стран бывшего": "former countries",
        "Аранжировки музыки из игр": "Arrangements of music from games",
        "Авторская песня": "Author's song",
        "Военная песня, марши": "War songs, marches",
        "Аранжировки музыки": "Music arrangements",
        "Фольклорная, Народная, Эстрадная музыка Кавказа и Закавказья": "Folklore, Folk, Pop music of the Caucasus & Transcaucasia",
        "Австралии, Тихого и Индийского океанов": "Australia, the Pacific & the Indian Ocean",
        "Северной и Южной Америки": "North & South America",
        "Африки и Ближнего Востока": "Africa & Middle East",
        "Сибири, Средней и Восточной Азии": "Siberia, Central & East Asia",
        "Африки и Ближнего Востока": "Africa & Middle East",
        "Еврейский фольклор": "Jewish folklore",
        "Восточноевропейский": "Eastern European",
        "Западноевропейский": "Western European",
        "Этническая музыка": "Ethnic music of",
        "многодисковые": "multi-disc",
        "песен для детей": "songs for children",
        "Восточноазиатская": "East Asian",
        "Условия использования": "Terms of use",
        "Реклама на сайте": "Advertising on the site",
        "Для правообладателей": "For copyright holders",
        "Для прессы": "For the press",
        "Для провайдеров": "For providers",
        "Торрентопедия": "Torrentopedia",
        "Кому задать вопрос": "Who to ask the question to",
        "Авторские раздачи": "Author's distributions",
        "Случайная раздача": "Random distribution",
        'Новости "Хранителей" и "Антикваров"': 'News of "Keepers" and "Antiques"',
        "Мультсериалы": "Cartoon series",
        "Азиатские фильмы": "Asian films",
        "Азиатские сериалы": "Asian TV series",
        "Концерт для инструмента с оркестром": "Concerto for instrument and orchestra",
        "для бальных танцев": "for ballroom dancing",
        "зарубежным фильмам": "foreign films",
        "Зарубежное кино": "Foreign films",
        "отечественным фильмам": "domestic films",
        "Хоровая музыка": "Choral music",
        "Стратегии в реальном времени": "Real-time strategy",
        "на иностранных языках": "in foreign languages",
        "Мои сообщения": "My Messages",
        "Название темы": "Topic name",
        "Количество скачиваний": "Number of downloads",
        "Количество сидов": "Number of seeds",
        "Количество личей": "Number of downloaders",
        "Лейбл-паки": "Label packs",
        "Тех. помощь": "Tech help",
        "все темы": "All topics",
        "Будущие закачки": "Future downloads",
        "Скачать .torrent": "Download .torrent",
        "Скачать по magnet-ссылке": "Download via magnet link",
        "в google": "on Google",
        "в duckduckgo": "on DuckDuckGo",
        "в wiki": "on Wiki",
        "по info_hash": "by info hash",
        "форматы, оцифровки": "formats, digitization",
        "Классика мирового кинематографа": "Classics of world cinema",
        "Сериалы США и Канады": "TV series of the USA and Canada",
        "Короткий метр": "Short film",
        "Зарубежные сериалы": "Foreign TV Series",
        "Арт-хаус и авторское кино": "Art-house and art-house cinema",
        "Зарубежная литература": "Foreign literature",
        "XX и XXI век": "XX and XXI centuries",
        "Telegram-канал": "Telegram Channel",
        "Музыка других жанров, Разножанровые сборные концерты": "Music of other genres, Multi-genre concerts",
        'Квесты в стиле "Поиск предметов"': "Hidden Object Quests",
        "Фильмы до 1990 года": "Movies before 1990",
        "Оцифровки с аналоговых носителей": "Digitization from analog media",
        "Фольклор, народная и этническая": "Folklore, folk and ethnic",
        "других жанров": "other genres",
        "Шансон, авторские, военные песни и марши": "Chanson, original, military songs & marches",
        "конверсии цифровых форматов": "digital format conversions",
        "Электронная музыка": "Electronic music",
        "Музыкальное SD видео": "Music Videos (SD)",
        "Музыкальное DVD видео": "Music Videos (DVD)",
        "Неофициальные DVD видео": "Unofficial DVD Videos",
        "музыкальное видео": "music video",
        "Музыкальное HD видео": "Music Videos (HD)",
        "Игры для Windows": "Games for Windows",
        "Работа со звуком": "Working with sound",
        "Игра на гитаре": "Playing the guitar",
        "Комиксы других издательств": "Comics from other publishers",
        "Неофициальные саундтреки к фильмам и сериалам": "Unofficial soundtracks for movies & TV series",
        "Библиотеки сэмплов": "Sample Libraries",
        "Музыкальные журналы": "Music Magazines",
        "Любительские видеоклипы": "Amateur Video Clips",
        "Официальные апскейлы": "Official Upscales",
        "Старые игры": "Old Games",
        "Приключения и квесты": "Adventures and Quests",
        "Сборники зарубежного рока": "Collections of foreign rock",
        "Сборники зарубежного рок": "Collections of foreign rock",
        "Зарубежная рок-музыка": "Foreign rock music",
        "Документальные фильмы о музыке и музыкантах": "Documentaries about music and musicians",
        "Иностранные мультфильмы": "Foreign cartoons",
    /* Single words */
        "Аркады": "Arcade Games",
        "Русификаторы": "Russifiers",
        "релизов": "releases",
        "Фильмы": "Movies",
        "Дискография": "Discography",
        "Джаз": "Jazz",
        "Инструментальная": "Instrumental",
        "Отечественная": "Domestic",
        "мюзиклы": "musical",
        "оцифровки": "digitalization",
        "Кулинария": "Cooking",
        "книги": "books",
        "Оперетта": "Operetta",
        "Грайндхаус": "Grindhouse",
        "раздачи": "distributions",
        "Администрация": "Administration",
        "Модераторы": "Moderators",
        "Неофициальные": "Unofficial",
        "ремастеринги": "remasterings",
        "ретро": "retro",
        "Менестрели": "Minstrels",
        "ролевики": "role players",
        "Индии": "India",
        "посещения": "visits",
        "Конкурсы": "Competitions",
        "Саундтреки": "Soundtracks",
        "Коллекция ": "Collection",
        "сборники": "collections",
        "Сборники": "Collections",
        "Апмиксы-Upmixes": "Upmixes",
        "Аудиокниги": "Audiobooks",
        "аудиокниги": "audiobooks",
        "поп-музыка": "pop music",
        "музыка": "music",
        "Музыка": "Music",
        "Отечественный": "Domestic",
        "Итальянская": "Italian",
        "шансон": "chanson",
        "Аудио": "Audio",
        "Опера": "Opera",
        "блюз": "blues",
        "джаз": "jazz",
        "Конверсии": "Conversions",
        "След.": "Next",
        "Пред.": "Prev",
        "Страница": "Page",
        "Правила": "Rules",
        "Группы": "Groups",
        "Главная": "Home",
        "Страницы": "Pages",
        "Профиль": "Profile",
        "Трекер": "Tracker",
        "Поиск": "Search",
        "Ссылки": "Links",
        "Категории": "Categories",
        "По форуму": "Forum",
        "Тема": "Subject",
        "Автор": "Author",
        "Размер": "Size",
        "Добавлен": "Added",
        "Форум": "Forum",
        "Зарубежный": "Foreign",
        "Зарубежные": "Foreign",
        "Зарубежная": "Foreign",
        "зарубежного": "foreign",
        "Видео": "Video",
        "Биографии": "Biographies",
        "Личности": "Personalities",
        "кумиры": "idols",
        "романсы": "romances",
        "наука": "science",
        "техника": "technology",
        "История": "History",
        "Вокальная": "Vocal",
        "Манга": "Manga",
        "Док": "Doc",
        "Внежанровая": "Non-genre",
        "документалистика": "documentary",
        "Онгоинги": "Ongoings",
        "Горячие": "Hot",
        "мультфильмам": "cartoons",
        "аниме": "anime",
        "Аниме": "Anime",
        "Мюзикл": "Musical",
        "Зарегистрирован": "Registered",
        "Фламенко": "Flamenco",
        "по возрастанию": "ascending",
        "по убыванию": "descending",
        "сериалам": "TV series",
        "Минусовки": "Backing tracks",
        "компиляции": "compilation",
        "фолк": "folk",
        "Камерная": "Chamber",
        "Хоровая": "Choir",
        "Сольная": "Solo",
        "издания": "editions",
        "ofдания": "editions",
        "инструментальная": "instrumental",
        "Рэп": "Rap",
        "Хип-Хоп": "Hip-Hop",
        "играм": "games",
        "игр": "games",
        "Тип:": "Type:",
        "Статус:": "Status:",
        "Скачан:": "Downloaded:",
        "Треклист": "Tracklist",
        "Контейнер": "Container",
        "Жанр": "Genre",
        "Издатель": "Publisher",
        "Продолжительность": "Duration",
        "Разрядность": "Bit depth",
        "Формат": "Format",
        "Источник": "Source",
        "релизер": "releaser",
        "лейбл": "label",
        "обычная": "ordinary",
        "проверено": "verified",
        "Избранное": "Featured",
        "Статистика": "Statistics",
        "скачан": "downloaded",
        "добавить": "add",
        "флаги": "flags",
        "аватары": "avatar",
        "смайлики": "emoticons",
        "подписи": "signatures",
        "назад": "back",
        "Прилеплены": "Pinned",
        "Темы": "Topics",
        "Издание": "Edition",
        "Код": "Code",
        "есть": "There is",
        "Состав": "Composition",
        "сборнике": "collection",
        "дня": "days",
        "Сиды": "Seeds",
        "Личи": "Leeches",
        "Свернуть": "Collapse",
        "Развернуть": "Expand",
        "Спектр": "Spectrum",
        "АЧХ": "Frequency response",
        "Самодельный": "Homemade",
        "Линейный БП": "Linear PSU",
        "Переключить": "Switch",
        "Стаж:": "Experience:",
        "Сообщений:": "Messages:",
        "альбомов": "albums",
        "Носитель": "Carrier",
        "Лейбл": "Label",
        "кодек": "codec",
        "никто": "none",
        "Обработка": "Processing",
        "Фонокабель": "Phono cable",
        "Межблочник": "Interblock",
        "Фонокорректор": "Phono pre-amp",
        "оцифровщик": "Digitizer",
        "Программа": "Program",
        "Техданные": "Technical data",
        "АЦП": "ADC",
        " лет": " years",
        " года": " years",
        ", ред.": ", edited",
        " месяцев": " months",
        "Имя": "Name",
        "ЛС": "PM",
        " раза": " times",
        " раз": " time",
        ": Нет": ": No",
        " и ": " and ",
        " к ": " for ",
        " из ": " of ",
    /* Abbreviated Months */
        "Янв": "Jan",
        "Фев": "Feb",
        "Мар": "Mar",
        "Апр": "Apr",
        "Май": "May",
        "Июн": "Jun",
        "Июл": "Jul",
        "Авг": "Aug",
        "Сен": "Sep",
        "Окт": "Oct",
        "Ноя": "Nov",
        "Дек": "Dec"
    };

    // Define input IDs and corresponding custom text
    const inputConfig = {
        "search-submit": "Search",
        "tr-submit-btn": "Search",
        "thx-btn": 'Say "Thank You"',
        "tor-filelist-btn": "List of files",
        'div#topic-options input[type="button"]': 'Apply',
    };

    // Config for inputs to change placeholder text
    const placeholderConfig = {
        "fs-qs-input": "filter by section name"
    };

    // Config for replacing <legend> text
    const legendConfig = {
        "Не показывать": "Do not show",
        "Показывать": "Show"
    };

    // Config for hiding elements (CSS selectors)
    const hideElementsConfig = [
        "div#main-nav > ul.ext-links", /* top right text ad */
        "div#bn-top-right", /* top right banner ad */
        "div#sidebar1_wrap > div.bn-idx", /* left sidebar ad */
        "div#idx-sidebar2 > div.bn-idx", /* right sidebar ad */
        "div#logo td.tCenter", /* top center td, contains top banner ad below - seems to be only ads here */
        "iframe#bn-top-block", /* top banner ad */
        "div#page_footer > div.ext-links", /* bottom banner ad */
        "div.dl-btn-text-ad", /* text add under download button */
        "div#nav-panel" /* just kind of pointless, buttons for page up and down on the left side of screen */
    ];

    // Array of blocked image URLs
    const blockedImageSources = [
        "https://robinbob.in/images/promo_blue.png"
    ];

    // Function to replace text within the page
    function replaceText(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.nodeValue;
            // Iterate through the keys of the monthTranslations object
            Object.keys(replacements).forEach(search => {
                const replace = replacements[search];
                text = text.replace(new RegExp(search, 'g'), replace);
            });
            node.nodeValue = text;
        } else {
            node.childNodes.forEach(replaceText);
        }
    }

    function modifyInputAppearance(inputId, customText) {
        const input = document.getElementById(inputId);
        if (input) {
            // Ensure the parent element is positioned relatively
            const parent = input.parentNode;
            parent.style.position = "relative";

            // Hide the original input text
            input.style.color = "transparent";
            input.style.caretColor = "black"; // Keep text cursor visible
            input.style.textShadow = "none";

            // Create an overlay for custom text
            const overlay = document.createElement("div");
            overlay.textContent = customText;
            overlay.style.position = "absolute";
            overlay.style.left = `${input.offsetLeft}px`;
            overlay.style.top = `${input.offsetTop}px`;
            overlay.style.width = `${input.offsetWidth}px`;
            overlay.style.height = `${input.offsetHeight}px`;
            overlay.style.lineHeight = `${input.offsetHeight}px`;
            overlay.style.textAlign = "center";
            overlay.style.color = "black";
            overlay.style.pointerEvents = "none";

            // Attach overlay to parent
            parent.appendChild(overlay);
        }
    }

    // Function to replace placeholder text
    function replacePlaceholderText(inputId, placeholderText) {
        const input = document.getElementById(inputId);
        if (input && input.placeholder !== undefined) {
            input.placeholder = placeholderText;
        }
    }

    // Function to hide elements
    function hideElements(selectors) {
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.style.setProperty("display", "none", "important");
            });
        });
    }

    // Function to change legend text
    function replaceLegendText(config) {
        const legends = document.querySelectorAll("legend");
        legends.forEach(legend => {
            const originalText = legend.textContent.trim();
            if (config[originalText]) {
                legend.textContent = config[originalText];
            }
        });
    }

    function applyCustomText(config) {
        Object.entries(config).forEach(([selector, text]) => {
            const input = document.querySelector(selector);
            if (input) {
                input.value = text; // Change the button text
            }
        });
    }

    // Function to block images by source
    function blockImages(imageSources) {
        const images = document.querySelectorAll("img");
        images.forEach(img => {
            if (imageSources.includes(img.src)) {
                img.style.setProperty("display", "none", "important");
            }
        });
    }

    // Apply element hiding immediately
    hideElements(hideElementsConfig);
    blockImages(blockedImageSources);

    // Run the replacement on the page
    document.body.childNodes.forEach(replaceText);

    window.addEventListener("load", () => {
        // Apply custom text overlays
        Object.entries(inputConfig).forEach(([inputId, customText]) => {
            modifyInputAppearance(inputId, customText);
        });
        // Replace placeholder text
        Object.entries(placeholderConfig).forEach(([inputId, placeholderText]) => {
            replacePlaceholderText(inputId, placeholderText);
        });

        // Replace <legend> text
        replaceLegendText(legendConfig);

        applyCustomText(inputConfig);

    });

})();