// ==UserScript==
// @name         RuTracker in English
// @namespace    https://github.com/torrq/
// @version      1.20
// @description  English translations for RuTracker
// @author       Nathan
// @match        *://rutracker.org/*
// @match        *://rutracker.nl/*
// @match        *://rutracker.net/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @updateURL    https://github.com/torrq/rut-english/raw/main/rutracker-in-english.userscript.js
// @downloadURL  https://github.com/torrq/rut-english/raw/main/rutracker-in-english.userscript.js
// @supportURL   https://github.com/torrq/rut-english/issues
// ==/UserScript==

(function () {
    'use strict';

    /* Array of replacements: [original text, replacement text] */
    const replacementPhrases = { // Phrases
        "Сборники отечественного шансона": "Collections of Russian chanson",
        "Восточноазиатский рок": "East Asian Rock",
        "Инструкции по оцифровкам, Hi-Res и многоканальному аудио": "Instructions for digitization, Hi-Res & multichannel audio",
        "Джазовая и Блюзовая музыка": "Jazz & Blues Music",
        "Общение на джазовые темы": "Conversations on jazz",
        "Общение на блюзовые темы": "Conversations on blues",
        "Ответы в начатых темах": "Replies to started topics",
        "Начатые темы": "Started topics",
        'Набор в группу «Хранители» - Помогите сохранить редкие раздачи': 'Recruitment to the group "Guardians" - Help save rare distributions',
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
        "Быстрый ответ": "Quick Reply",
        "Кино, театр, ТВ, мультипликация, цирк": "Cinema, theatre, TV, animation, circus",
        "Журналы и газеты": "Magazines & newspapers",
        "Для детей, родителей и учителей": "For children, parents & teachers",
        "физическая культура, боевые искусства": "physical education, martial arts",
        "Книги и журналы": "Books & magazines",
        "Музыкальный конкурс": "Music competition",
        "мероприятия и конкурсы": "events & competitions",
        "В этой папке нет сообщений": "There are no messages in this folder",
        "Знаменитости и кумиры": "Celebrities & idols",
        "Музыкальная литература и Теория": "Music Literature & Theory",
        "Поиск по раздачам": "Search by distribution",
        "Перейти к разделу": "Go to section",
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
        "Unofficial compilations & remasterings": "Unofficial remasters",
        "Манга (на иностранных языках)": "Manga (in foreign languages)",
        "Пошаговые стратегии": "Step-by-Step Strategies",
        "Только открытые раздачи": "Open giveaways only",
        "Скрыть содержимое": "Hide content",
        "Новые с посл": "New from last",
        "за все время": "for all time",
        "Все имеющиеся": "All available",
        "Оркестровая музыка": "Orchestral music",
        "Восточноазиатский": "East Asian rock",
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
        'Новости "Хранителей" и "Антикваров"': 'News of "Keepers" & "Antiques"',
        "Мультсериалы": "Cartoon series",
        "Азиатские фильмы": "Asian films",
        "Азиатские сериалы": "Asian TV series",
        "Концерт для инструмента с оркестром": "Concerto for instrument & orchestra",
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
        "Будущие закачки": "Future downloads",
        "Скачать .torrent": "Download .torrent",
        "Скачать по magnet-ссылке": "Download via magnet link",
        "в google": "on Google",
        "в duckduckgo": "on DuckDuckGo",
        "в wiki": "on Wiki",
        "по info_hash": "by info hash",
        "форматы, оцифровки": "formats, digitization",
        "Классика мирового кинематографа": "Classics of world cinema",
        "Сериалы США и Канады": "TV series of the USA & Canada",
        "Короткий метр": "Short film",
        "Зарубежные сериалы": "Foreign TV Series",
        "Арт-хаус и авторское кино": "Art-house & art-house cinema",
        "Зарубежная литература": "Foreign literature",
        "XX и XXI век": "XX & XXI centuries",
        "Telegram-канал": "Telegram Channel",
        "Музыка других жанров, Разножанровые сборные концерты": "Music of other genres, Multi-genre concerts",
        'Квесты в стиле "Поиск предметов"': "Hidden Object Quests",
        "Фильмы до 1990 года": "Movies before 1990",
        "Оцифровки с аналоговых носителей": "Digitization from analog media",
        "Фольклор, народная и этническая": "Folklore, folk & ethnic",
        "других жанров": "other genres",
        "Шансон, авторские, военные песни и марши": "Chanson, original, military songs & marches",
        "конверсии цифровых форматов": "digital format conversions",
        "Электронная музыка": "Electronic music",
        "Музыкальное SD видео": "Music Videos (SD)",
        "Музыкальное DVD видео": "Music Videos (DVD)",
        "Неофициальные DVD видео": "Unofficial DVD Videos",
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
        "Приключения и квесты": "Adventures & Quests",
        "Сборники зарубежного рока": "Collections of foreign rock",
        "Сборники зарубежного рок": "Collections of foreign rock",
        "Зарубежная рок-музыка": "Foreign rock music",
        "Документальные фильмы о музыке и музыкантах": "Documentaries about music & musicians",
        "Иностранные мультфильмы": "Foreign cartoons",
        "Доска почета": "Honor roll",
        "Новости трекера": "Tracker news",
        "покупка дисков и т. п.": "transfers, purchase of CDs, etc.",
        "ОБХОД БЛОКИРОВОК": "BYPASSING BLOCKS",
        "Популярная музыка": "Popular music",
        "Поп музыка": "Pop music",
        "Классическая музыка": "Classical music",
        "Ноты и Либретто": "Sheet Music & Libretto",
        "Музыкальное видео": "Music video",
        "Документалистика и юмор": "Documentary & humor",
        "Вопросы по форуму и трекеру": "Questions about the forum & tracker",
        "Товары, услуги, игры и развлечения": "Products, services, games & entertainment",
        "Обучение иностранным языкам": "Teaching foreign languages",
        "Обучающее видео": "Educational video",
        "Авто и мото": "Auto & Moto",
        "Игры для": "Games for",
        "Прочее для": "Other for",
        "Видео для консолей": "Video for consoles",
        "Игровое видео": "Game video",
        "Программы и Дизайн": "Programs & Design",
        "Обсуждения, встречи, общение": "Discussions, meetings, communication",
        "Браузерные и клиентские онлайн-игры": "Browser & client online games",
        "Браузер для геймеров": "Browser for gamers",
        "Как пополнить баланс": "How to top up your balance",
        "в России": "in Russia",
        "Магазины и образование": "Shops & Education",
        "Карта форумов": "Forum Map",
        "Последние раздачи": "Latest Releases",
        "Последние темы": "Latest Topics",
        "Как тут качать": "How to download here",
        "Основные понятия": "Basic concepts",
        "Общие вопросы": "General questions",
        "Что такое": "What is",
        "Как пользоваться Поиском": "How to use Search",
        "Как создать раздачу": "How to create a distribution",
        "Как залить картинку": "How to upload a picture",
        "Угнали аккаунт / забанили": "Account hijacked / banned",
        "Как почистить кеш и куки": "How to clear cache and cookies",
        "Как перезалить торрент-файл": "How to re-upload a torrent file",
        "Хочу лычку": "I want a stripe",
        "BitTorrent клиенты": "BitTorrent clients",
        "Несовместимые с трекером": "Incompatible with tracker",
        "Клиенты под": "Clients under",
        "Как настроить клиент на максимальную скорость": "How to set up the client for maximum speed",
        "Наше кино": "Our cinema",
        "Системные программы": "System programs",
        "Веб-разработка": "Web development",
        "Операционные системы": "Operating systems",
        "Книги, Ин. языки, Уроки": "Books, In. languages, lessons",
        "Ин. языки": "Foreign languages",
        "Видеоуроки": "Video tutorials",
        "Мобильные тел.": "Mobile phones",
        "Мультимедиа и 3D контент": "Multimedia & 3D content",
        "Рок музыка": "Rock music",
        "Обработка аудио и видео": "Audio & video processing",
        "Настройки роутеров и файерволлов": "Router & firewall settings",
        "Решение проблем с компьютерами": "Solving computer problems",
        "Хеш-сумма и магнет-ссылки": "Hash sum & magnet links",
        "FAQ по учёту статистики": "FAQ on statistics accounting",
        "Текущее время": "Current time",
        "Часовой пояс": "Time zone",
        "Зарегистрированных пользователей": "Registered users",
        "Сбросить отметку": "Reset mark",
        "Отметить все темы как прочитанные": "Mark all topics as read",
        "все темы": "All topics",
        "Показывать по клику": "Show on click",
        "Показывать по наведению": "Show on hover",
        "Плагины для браузеров": "Browser Plugins",
        "Блокировка bt, способы обхода и обсуждение": "Blocking bt, bypass methods & discussion",
        "НОВОГОДНИЙ РАЗДЕЛ": "NEW YEAR SECTION",
        "Развлекательные передачи. Документальные фильмы": "Entertainment programs. Documentaries",
        "Книги. Журналы. Ноты": "Books. Magazines. Notes",
        "открытки, обои, картинки, видео и пр.": "postcards, wallpapers, pictures, videos, etc.",
        "Подфорум для общих сборов": "Subforum for general gatherings",
        "Переводы: фильмы, мультфильмы, сериалы - СВ Студия": "Translations: films, cartoons, series - SV Studio",
        "Переводы: фильмы, мультфильмы, сериалы - Авторские переводчики": "Translations: movies, cartoons, TV series - Author translators",
        "основные инструкции": "Basic instructions",
        "Предложения по улучшению форума и трекера": "Suggestions for improving the forum & tracker",
        "Вопросы по BitTorrent сети и ее клиентам": "Questions about the BitTorrent network & its clients",
        "Обсуждение провайдеров": "Discussion of providers",
        "Железо: комплексные проблемы": "Hardware: Complex Problems",
        "Железо: комплектующие и периферия": "Hardware: components & peripherals",
        "Подбор конфигурации, выбор и обсуждение комплектующих": "Configuration selection, choice & discussion of components",
        'Предложения по улучшению категории "Кино, Видео и ТВ"': 'Suggestions for improving the category "Film, Video & TV"',
        "помощь по разделу": "help on section",
        "по разделу": "by section",
        "Заявки, заказы, координация": "Applications, orders, coordination",
        "Детские отечественные": "Children's domestic",
        "Тематические подборки ссылок": "Thematic collections of links",
        "3D/Стерео": "3D/Stereo",
        "Предложения по улучшению категории": "Suggestions for improving the category",
        "Вера и религия": "Faith & Religion",
        "Документальные фильмы и телепередачи": "Documentaries & TV shows",
        "Развлекательные телепередачи и шоу, приколы и юмор": "Entertainment TV shows & programs, jokes & humor",
        "Сериалы Латинской Америки, Турции и Индии": "Series from Latin America, Turkey & India",
        "Латиноамериканская": "Latin American",
        "Русские сериалы": "Russian TV series",
        "XXXIII Летние Олимпийские игры 2024": "XXXIII Summer Olympic Games 2024",
        "Легкая атлетика. Плавание. Прыжки в воду. Синхронное плавание. Гимнастика": "Track & field. Swimming. Diving. Synchronized swimming. Gymnastics",
        "Велоспорт. Академическая гребля. Гребля на байдарках и каноэ": "Cycling. Rowing. Canoeing & kayaking",
        "Футбол. Баскетбол. Волейбол. Гандбол. Водное поло. Регби. Хоккей на траве": "Football. Basketball. Volleyball. Handball. Water Polo. Rugby. Field Hockey",
        "Фехтование. Стрельба. Стрельба из лука. Современное пятиборье": "Fencing. Shooting. Archery. Modern Pentathlon",
        "Бокс. Борьба Вольная и Греко-римская. Дзюдо. Карате. Тхэквондо": "Boxing. Wrestling Freestyle & Greco-Roman. Judo. Karate. Taekwondo",
        "Другие виды спорта": "Other sports",
        "XXXII Летние Олимпийские игры 2020": "XXXII Summer Olympic Games 2020",
        "XXIV Зимние Олимпийские игры 2022": "XXIV Winter Olympic Games 2022",
        "Спортивные турниры, фильмы и передачи": "Sports tournaments, films & programs",
        "Формула-1": "Formula-1",
        "Смешанные единоборства и K-1": "Mixed Martial Arts & K-1",
        "Зимние виды спорта": "Winter sports",
        "Фигурное катание": "Figure skating",
        "Чемпионат Мира": "World Cup",
        "Чемпионат Европы": "European Championship",
        "финальный турнир": "final tournament",
        "Европейский клубный баскетбол": "European Club Basketball",
        'Правила "Книг и журналов", помощь, предложения по улучшению, сканирование': 'Books & Magazines Rules, Help, Suggestions for Improvement, Scanning',
        "Сканирование, обработка сканов": "Scanning, scan processing",
        "общий раздел": "general section",
        "для Apple": "for Apple",
        "для Macintosh": "for Macintosh",
        "Аудио редакторы и конвертеры": "Audio editors & converters",
        "Офисные программы": "Office programs",
        "Отчеты о встречах": "Meeting reports",
        "Место встречи изменить": "Change meeting place",
        "Место сбора для релиз-групп": "Gathering place for release groups",
        "Раздел Пиратской партии России": "Section of the Pirate Party of Russia",
        "Бизнес-форум": "Business forum",
        "Для общения пользователей других ресурсов": "For communication between users of other resources",
        "Для общения пользователей": "For communication between users",
        "Для общения": "For communication",
        "Публикации и учебные материалы": "Publications & educational materials",
        "Видео для мобильных устройств": "Video for mobile devices",
        "Приложения для мобильных устройств": "Mobile Applications",
        "мобильных устройств": "mobile devices",
        "Мобильные устройства": "Mobile devices",
        "Спортивная пресса": "Sports press",
        "Искусствоведение. Культурология": "Art history. Cultural studies",
        "Гуманитарные науки": "Humanities",
        "Исторические науки": "Historical sciences",
        "Исторические персоны": "Historical figures",
        "История России": "History of Russia",
        "Эпоха СССР": "The USSR era",
        "Точные, естественные и инженерные науки": "Exact, natural & engineering sciences",
        "Ноты и Музыкальная литература": "Sheet Music & Musical Literature",
        "Военное дело": "Military affairs",
        "История Второй мировой войны": "History of World War II",
        "Военная техника": "Military equipment",
        "Общая и прикладная психология": "General & Applied Psychology",
        "Популярная психология": "Popular psychology",
        "Коллекционирование, увлечения и хобби": "Collecting, interests & hobbies",
        "Шитье, пэчворк": "Sewing, patchwork",
        "Охота и рыбалка": "Hunting & fishing",
        "Настольные игры": "Board games",
        "Художественная литература": "Fiction",
        "Русская литература": "Russian literature",
        "Отечественная фантастика / фэнтези / мистика": "Domestic science fiction / fantasy / mysticism",
        "Компьютерная литература": "Computer literature",
        "Веб-дизайн и программирование": "Web design & programming",
        "Комиксы, манга, ранобэ": "Comics, manga, light novel",
        "Коллекции книг и библиотеки": "Book collections & libraries",
        "Мультимедийные и интерактивные издания": "Multimedia & interactive publications",
        "Медицина и здоровье": "Medicine & health",
        "Клиническая медицина после 2000 года": "Clinical Medicine After 2000",
        "Медико-биологические науки": "Medical & biological sciences",
        "Нетрадиционная, народная медицина и популярные книги о здоровье": "Alternative, folk medicine & popular health books",
        "Объявления, предложения": "Announcements, offers",
        "Иностранные языки": "Foreign languages",
        "Английский язык": "English language",
        "для взрослых": "for adults",
        "for children": "for children",
        "на английском языке": "in English",
        "Фитнес - Кардио-Силовые Тренировки": "Fitness - Cardio Strength Training",
        "Боевые искусства": "Martial arts",
        "Computer video tutorials & educational interactive": "",
        "обучающие интерактивные": "educational interactive",
        "Новости, объявления, полезная информация": "News, announcements, useful information",
        "Радиоспектакли, история, мемуары": "Radio plays, history, memoirs",
        "Фантастика, фэнтези, мистика, ужасы, фанфики": "Science fiction, fantasy, mysticism, horror, fan fiction",
        "Прочая литература": "Other literature",
        "Ремонт и эксплуатация транспортных средств": "Repair & operation of vehicles",
        "Программы по диагностике и ремонту": "Diagnostic & repair programs",
        "Книги по ремонту/обслуживанию/эксплуатации ТС": "Books on repair/maintenance/operation of vehicles",
        "Фильмы и передачи по авто/мото": "Movies & TV shows about cars/motos",
        "Документальные/познавательные фильмы": "Documentaries/educational films",
        "Предложения по улучшению музыкальных разделов": "Suggestions for improving the music sections",
        "Помощь по музыкальным разделам": "Help with music sections",
        "Классическая и современная академическая музыка": "Classical & contemporary academic music",
        "Фольклор, Народная и Этническая музыка": "Folklore, National & Ethnic Music",
        "Этническая музыка": "Ethnic music of",
        "Саундтреки, караоке и мюзиклы": "Soundtracks, karaoke & musicals",
        "Шансон, Авторская и Военная песня": "Chanson, Author's & Military Song",
        "Лейбл- и сцен-паки. Неофициальные сборники и ремастеринги": "Label & scene packs. Unofficial compilations & remasters",
        "Помощь по музыкальным видео": "Help with music videos",
        "Некондиционное музыкальное видео": "Substandard music video",
        "музыкальное видео": "music video",
        "Оригинальные каталоги по подбору запчастей": "Original catalogs for selection of spare parts",
        "помощь, предложения по улучшению категории": "help, suggestions for improving the category",
        "Linux, Unix и другие ОС": "Linux, Unix & other OS",
        "Системы для бизнеса, офиса, научной и проектной работы": "Systems for business, office, scientific & project work",
        "Операционные системы от Microsoft": "Operating systems from Microsoft",
        "Программы для работы с мультимедиа и 3D": "Programs for working with multimedia & 3D",
        "Тестовые диски для настройки аудио/видео аппаратуры": "Test disks for setting up audio/video equipment",
        "Материалы для мультимедиа и дизайна": "Materials for multimedia & design",
        "ГИС, системы навигации и карты": "GIS, navigation systems & maps",
        "Звуки природы": "Sounds of nature",
        "акустическая гитара": "acoustic guitar",
        "Каталоги раздач классической и академической музыки": "Catalogues of classical & academic music distribution",
        "Поиск музыки": "Search music",
        "Инструкции, руководства, обзоры": "Instructions, guides, reviews",
        "Вопросы и ответы по музыкальным разделам": "Questions & answers on music sections",
        "для детей": "for children",
        "Самолёты и вертолёты для FS2004, FSX, P3D": "Airplanes & helicopters for FS2004, FSX, P3D",
        "Страна исполнителя": "Country of the performer",
        "Об исполнителе": "About the artist",
        "Извините, раздача недоступна для вашего региона": "Sorry, distribution is not available for your region.",
    };
    const replacementWords = { // Single words
        "группе": "group",
        "группы": "groups",
        "сольная": "solo",
        "хоровая": "choral",
        "обсуждение": "discussion",
        "саундтреки": "soundtracks",
        "Сцен-паки": "Scene packs",
        "Проморелизы": "Promotional releases",
        "Религии": "Religions",
        "видеоуроки": "video tutorials",
        "графика": "graphics",
        "фотосъёмка": "photography",
        "Образование": "Education",
        "ин.языки": "foreign languages",
        "Программирование": "Programming",
        "СУБД": "DBMS",
        "Деревообработка": "Woodworking",
        "Моделизм": "Modeling",
        "Вышивание": "Embroidery",
        "Вязание": "Knitting",
        "Психология": "Psychology",
        "Христианство": "Christianity",
        "Физика": "Physics",
        "Математика": "Mathematics",
        "Философия": "Philosophy",
        "Машиностроение": "Mechanical engineering",
        "Литературоведение": "Literary criticism",
        "журналы": "magazines",
        "тексты": "texts",
        "Картинки": "Pictures",
        "Флудилка": "Flood",
        "Юридический": "Legal",
        "Общий": "General",
        "Рестлинг": "Wrestling",
        "НХЛ": "NHL",
        "КХЛ": "KHL",
        "Хоккей": "Hockey",
        "Баскетбол": "Basketball",
        "Еврокубки": "European Cups",
        "Англия": "England",
        "Россия": "Russia",
        "отбор": "qualification",
        "Футбол": "Football",
        "Биатлон": "Biathlon",
        "Бокс": "Boxing",
        "Велоспорт": "Cycling",
        "Документальные": "Documentaries",
        "СМИ": "Media",
        "FAQ-и": "FAQs",
        "сервисы": "services",
        "переводы": "translations",
        "Спектакли": "Performances",
        "Пиров:": "Peers:",
        "Живых:": "Alive:",
        "Мультфильмы": "Cartoons",
        "Мультфильмы": "Cartoons",
        "мультфильмам": "cartoons",
        "Клипарты": "Clip Art",
        "консолей": "consoles",
        "Юмор": "Humor",
        "Театр": "Theater",
        "Другие": "Other",
        "торрент": "torrent",
        "Разное": "Miscellaneous",
        "Фольклор": "Folk",
        "Архив": "Archive",
        "Сериалы": "Series",
        "Краудфандинг": "Crowdfunding",
        "Аркады": "Arcade Games",
        "Русификаторы": "Russifiers",
        "релизов": "releases",
        "Фильмы": "Movies",
        "фильмы": "movies",
        "Кино": "Movie",
        "Дискография": "Discography",
        "Джаз": "Jazz",
        "Инструментальная": "Instrumental",
        "Отечественная": "Domestic",
        "мюзиклы": "musical",
        "оцифровки": "digitalization",
        "Кулинария": "Cooking",
        "книги": "books",
        "Книги": "Books",
        "Оперетта": "Operetta",
        "Грайндхаус": "Grindhouse",
        "раздачи": "distributions",
        "раздач": "distribution",
        "Раздачи": "Distribution",
        "Раздач": "Distribution",
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
        "Коллекция": "Collection",
        "коллекция": "collection",
        "сборники": "collections",
        "Сборники": "Collections",
        "альбома": "album",
        "Апмиксы-Upmixes": "Upmixes",
        "Аудиокниги": "Audiobooks",
        "аудиокниги": "audiobooks",
        "поп-музыка": "pop music",
        "Отечественный": "Domestic",
        "Итальянская": "Italian",
        "Караоке": "Karaoke",
        "шансон": "chanson",
        "Шансон": "Chanson",
        "Ноты": "Notes",
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
        "Конкурсы": "Competitions",
        "Зарубежный": "Foreign",
        "Зарубежные": "Foreign",
        "Зарубежная": "Foreign",
        "зарубежного": "foreign",
        "Видео": "Video",
        "видео": "video",
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
        "Игры": "Games",
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
        "Программы": "Programs",
        "КПК": "PDA",
        "Технические Данные": "Technical data",
        "Техданные": "Technical data",
        "АЦП": "ADC",
        "Шрифт:": "Font:",
        "Цвет шрифта:": "Font color:",
        "По левому краю": "Left aligned",
        "По правому краю": "Right aligned",
        "По центру": "Center aligned",
        "По ширине": "Width aligned",
        "Выравнивание:": "Alignment:",
        "Картинка:": "Picture:",
        "Новости": "News",
        "Слева": "Left",
        "Справа": "Right",
        "экрана": "of the screen",
        "По высоте строки": "By line height",
        "Маленький": "Small",
        "Обычный": "Standard",
        "Большой": "Large",
        "Огромный": "Huge",
        "Настройки": "Settings",
        "Входящие": "Incoming",
        "Исходящие": "Outgoing",
        "Отправленные": "Sent",
        "Сохранённые": "Saved",
        "Тёмно-красный": "Dark Red",
        "Тёмно-Зелёный": "Dark Green",
        "Тёмно-синий": "Dark Blue",
        "Тёмно-Голубой": "Dark Cyan",
        "Коричневый": "Brown",
        "Оранжевый": "Orange",
        "Красный": "Red",
        "Фиолетовый": "Purple",
        "Зелёный": "Green",
        "Серый": "Gray",
        "Оливковый": "Olive",
        "Синий": "Blue",
        "Индиго": "Indigo",
        "Спорт": "Sport",
        " лет": " years",
        " года": " years",
        ", ред.": ", edited",
        "музыка": "music",
        "Музыка": "Music",
        " месяцев": " months",
        "Имя": "Name",
        "ЛС": "PM",
        " раза": " times",
        " раз": " time",
        ": Нет": ": No",
        " и ": " and ",
        " к ": " for ",
        " из ": " of ",
        'НГ]': 'NG]',
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
        "load-pic-btn": "Upload image",
        "p-ext-preview-btn": "Advanced Editing",
        "p-quick-preview-btn": "Preview",
        "post-submit-btn": "Send",
        'div#ped-editor input[name="codeQuote"]': 'Quote',
        'div#ped-editor input[name="codeImg"]': 'Image',
        'div#ped-editor input[name="codeUrl"]': 'URL',
        'div#ped-editor input[name="codeList"]': 'List',
        'div#ped-editor input[name="codeCode"]': 'Code',
        'div#ped-editor input[name="codeSpoiler"]': 'Spoiler',
        'div#ped-editor input[name="quoteselected"]': 'Quote selected text',
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

    const replacementOptGroupLabels = {
        ' Новости': 'News',
        ' Кино, Видео и ТВ': 'Cinema, Video and TV',
        ' Сериалы': 'Series',
        ' Документалистика и юмор': 'Documentary & Humor',
        ' Спорт': 'Sports',
        ' Книги и журналы': 'Books & Magazines',
        ' Обучение иностранным языкам': 'Teaching Foreign Languages',
        ' Обучающее видео': 'Educational Videos',
        ' Аудиокниги': 'Audiobooks',
        ' Авто и мото': 'Auto & Moto',
        ' Популярная музыка': 'Popular Music',
        ' Джазовая и Блюзовая музыка': 'Jazz & Blues Music',
        ' Рок-музыка': 'Rock Music',
        ' Электронная музыка': 'Electronic Music',
        ' Hi-Res форматы, оцифровки': 'Hi-Res formats, digitalization',
        ' Музыкальное видео': 'Music Videos',
        ' Музыка': 'Music',
        ' Игры': 'Games',
        ' Программы и Дизайн': 'Programs & Design',
        ' Мобильные устройства': 'Mobile Devices',
        ' Разное': 'Miscellaneous',
        ' Обсуждения, встречи, общение': 'Discussions, meetings, communication'
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
    /* just kind of pointless, buttons for page up and down on the left side of screen */
        "div#nav-panel",
        "div#nav-panel div"
    ];

    // Array of blocked image URLs
    const blockedImageSources = [
        "https://robinbob.in/images/promo_blue.png"
    ];

    // Toggles
    const isAdBlockingEnabled = localStorage.getItem('adBlockingEnabled') === 'true' || localStorage.getItem('adBlockingEnabled') === null;
    const isTranslateEnabled = localStorage.getItem('translateEnabled') === 'true' || localStorage.getItem('translateEnabled') === null;

    function replaceText(node) {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim()) {
            let text = node.nodeValue;

            // Replace phrases first
            Object.keys(replacementPhrases).forEach(search => {
                const replace = replacementPhrases[search];
                text = text.replace(new RegExp(search, 'g'), replace);
            });

            // Replace words after phrases
            Object.keys(replacementWords).forEach(search => {
                const replace = replacementWords[search];
                text = text.replace(new RegExp(search, 'g'), replace);
            });

            node.nodeValue = text;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            node.childNodes.forEach(replaceText);
        }
    }

    // Function to modify input appearance
    function modifyInputAppearance(inputId, customText) {
        const input = document.getElementById(inputId);
        if (input) {
            const parent = input.parentNode;
            parent.style.position = "relative";
            input.style.color = "transparent";
            input.style.caretColor = "black";
            input.style.textShadow = "none";
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

    // Function to block images by source
    function blockImages(imageSources) {
        const images = document.querySelectorAll("img");
        images.forEach(img => {
            if (imageSources.includes(img.src)) {
                img.style.setProperty("display", "none", "important");
            }
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

    // Function to apply custom text to elements
    function applyCustomText(config) {
        Object.entries(config).forEach(([selector, text]) => {
            const input = document.querySelector(selector);
            if (input) {
                input.value = text;
            }
        });
    }

    // Function to apply custom text to <optgroup> label's (category/group names on tracker page)
    function updateOptGroupLabels() {
        const optGroups = document.querySelectorAll('optgroup');
        optGroups.forEach(optGroup => {
            const oldLabel = optGroup.label; // Add NBSP before the current label
            if (replacementOptGroupLabels.hasOwnProperty(oldLabel)) {
                optGroup.label = '\u00A0' + replacementOptGroupLabels[oldLabel];
            }
        });
    }

    if (isAdBlockingEnabled) {
        hideElements(hideElementsConfig);
        blockImages(blockedImageSources);
    };

    if (isTranslateEnabled) {
        document.body.childNodes.forEach(replaceText);
    };

    window.addEventListener("load", () => {
        if (isTranslateEnabled) {
            Object.entries(inputConfig).forEach(([inputId, customText]) => {
                modifyInputAppearance(inputId, customText);
            });

            Object.entries(placeholderConfig).forEach(([inputId, placeholderText]) => {
                replacePlaceholderText(inputId, placeholderText);
            });

            if (window.location.pathname === '/forum/tracker.php') {
                updateOptGroupLabels();
            }

            replaceLegendText(legendConfig);

            applyCustomText(inputConfig);
        }

    const lastW50Td = document.querySelector('div.topmenu table tbody tr td.w50');

    if (lastW50Td) {
        lastW50Td.style.width = '40%'; // Reduce width for the new td

        // Create the new td for the dropdown menu
        const newTd = document.createElement('td');
        newTd.innerHTML = `
            <div class="dropdown">
                <button class="dropdown-btn">RuT in English ${GM_info.script.version ? 'v' + GM_info.script.version : ''}</button>
                <div class="dropdown-content">
                    <div class="dropdown-header">Settings</a></div>
                    <label>
                        <input type="checkbox" id="adBlockingCheckbox" ${isAdBlockingEnabled ? 'checked' : ''}>
                        Ad Blocking
                    </label>
                    <label>
                        <input type="checkbox" id="translateCheckbox" ${isTranslateEnabled ? 'checked' : ''}>
                        Translation
                    </label>
                    <div class="dropdown-header">Links</a></div>
                   <div class="dropdown-link">🔗 <a href="https://github.com/torrq/rut-english" target="_blank">GitHub</a></div>
                </div>
            </div>
        `;

        const row = lastW50Td.closest('tr');
        const firstTd = row.querySelector('td');
        row.insertBefore(newTd, firstTd);

        // Ad Blocking checkbox functionality
        const adBlockingCheckbox = document.getElementById('adBlockingCheckbox');
        if (adBlockingCheckbox) {
            adBlockingCheckbox.addEventListener('change', function() {
                const isChecked = adBlockingCheckbox.checked;
                localStorage.setItem('adBlockingEnabled', isChecked.toString());
                if (isChecked) {
                    console.log("Ad Blocking is now enabled");
                    // Add your ad-blocking functionality here
                } else {
                    console.log("Ad Blocking is now disabled");
                    // Disable ad-blocking functionality here
                }
                location.reload(); // Trigger page reload
            });
        }

        // Translation checkbox functionality
        const translateCheckbox = document.getElementById('translateCheckbox');
        if (translateCheckbox) {
            translateCheckbox.addEventListener('change', function() {
                const isChecked = translateCheckbox.checked;
                localStorage.setItem('translateEnabled', isChecked.toString());
                if (isChecked) {
                    console.log("Translation is now enabled");
                    // Add your translation functionality here
                } else {
                    console.log("Translation is now disabled");
                    // Disable translation functionality here
                }
                location.reload(); // Trigger page reload
            });
        }
    }

    });

GM_addStyle(`
    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-btn {
        background-color: #000066;
        color: white;
        padding: 2px;
        font-size: 8pt;
        font-weight: bold;
        border: none;
        cursor: pointer;
        width: 130px;
        white-space: nowrap;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #222;
        min-width: 140px;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        padding: 2px;
    }

    .dropdown-link a {
        margin: 0 0 0 -2px;
        text-decoration: underline;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-header {
        margin: 0 0 0 -2px;
        background-color: #000033;
        color: #72B9EA;
        font-size: 8pt;
        font-weight: bold;
    }

    label {
        font-size: 8pt;
        color: #fff;
    }

    input[type="checkbox"] {
        margin: -4px 0 0 0;
    }
`);
})();