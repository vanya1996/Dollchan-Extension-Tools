/*==[ Localization.js ]=======================================================================================
                                                 LOCALIZATION
============================================================================================================*/

const Lng = {
	cfg: {
		'hideBySpell':  ['Спеллы: ', 'Magic spells: ', 'Заклинання: '],
		'sortSpells':   ['Сортировать спеллы и удалять дубликаты', 'Sort spells and remove duplicates', 'Сортувати заклинання й видаляти дублікати'],
		'menuHiddBtn':  ['Дополнительное меню для кнопок "Скрыть" ', 'Extra options for "Hide" buttons', 'Додаткове меню кнопок приховування'],
		'hideRefPsts':  ['Скрывать ответы на скрытые посты', 'Hide replies to hidden posts', 'Приховувати відповіді на приховані дописи'],
		'delHiddPost':  {
			sel:        [['Откл.', 'Всё', 'Только посты', 'Только треды'], ['Disable', 'All', 'Posts only', 'Threads only'], ['Вимкнено', 'Усі', 'Лише дописи', 'Лише нитки']],
			txt:        ['Удалять скрытое', 'Remove placeholders', 'Видаляти приховані дописи']
		},

		'ajaxUpdThr':   ['Апдейтер тредов ', 'Threads updater ', 'Оновлення ниток'],
		'updThrDelay':  ['(сек)', '(sec)', '(сек)'],
		'updCount':     ['Обратный счетчик обновления треда', 'Show countdown to thread update', 'Зворотній відлік секунд до оновлення'],
		'favIcoBlink':  ['Мигать фавиконом при новых постах', 'Blink the favicon on new posts', 'Блимати іконкою сторінки в разі появи нових дописів'],
		'desktNotif':   ['Уведомлять о новых постах на рабочем столе', 'Desktop notifications for new posts', 'Повідомляти про нові дописи на стільниці'],
		'noErrInTitle': ['Не показывать номер ошибки в заголовке', 'Don\'t show error code in title', 'Не показувати номер помилки в заголовку'],
		'markNewPosts': ['Выделять цветом новые посты', 'Highlight new posts with color', 'Виділяти кольором нові дописи'],
		'useDobrAPI':   ['dobrochan: использовать JSON API', 'dobrochan: use JSON API', 'dobrochan: використовувати JSON API'],
		'markMyPosts':  ['Выделять цветом мои посты', 'Highlight my own posts', 'Виділяти кольором мої дописи'],
		'hideReplies':  ['Показывать только оп-посты в списке тредов*', 'Show only OP in threads list*', 'Показувати тільки OP-дописи в списку ниток*' ],
		'expandTrunc':  ['Авторазворот сокращенных постов*', 'Autoexpand truncated posts*', 'Розгортати згорнуті дописи*'],
		'updThrBtns':   ['Кнопки "Получить новые посты" в списке тредов', 'Show "Get new posts" buttons in threads list', 'Кнопки отримання нових дописів у списку ниток'],
		'showHideBtn':  ['Кнопки "Скрыть" ', 'Show "Hide" buttons ', 'Кнопки приховування '],
		'showRepBtn':   ['Кнопки "Быстрый ответ"', 'Show "Quick reply" buttons', 'Кнопки швидкої відповіді'],
		'postBtnsCSS': {
			sel:        [['Упрощенные', 'Серый градиент', 'Настраиваемые'], ['Simple', 'Gradient grey', 'Custom'], ['Спрощені', 'Сірий градієнт', 'Користувацькі']],
			txt:        ['Кнопки постов ', 'Post buttons ', 'Кнопки дописів ']
		},
		'noSpoilers':{
			sel:        [['Откл.', 'Серое', 'Родное'], ['Disable', 'Grey', 'Native'], ['Вимк.', 'Сіре', 'Рідне']],
			txt:        ['Раскрытие текстовых спойлеров', 'Text spoilers expansion', 'Розкривання тестових спойлерів']
		},
		'noPostNames':  ['Скрывать имена в постах', 'Hide poster names', 'Приховувати імена в дописах'],
		'widePosts':    ['Растягивать посты по ширине экрана', 'Stretch posts to page width', 'Розтягувати дописи на ширину екрану'],
		'hotKeys':      ['Горячие клавиши', 'Hotkeys', 'Гарячі клавіші'],
		'loadPages':    ['Количество страниц, загружаемых по F5', 'Number of pages that are loaded on F5 ', 'Кількість сторінок, що завантажуються на F5'],
		'correctTime':  ['Коррекция времени в постах* ', 'Time correction in posts* ', 'Корекція часу* '],
		'timeOffset':   ['разница (ч) ', 'time offset (h) ', '(год) різниця '],
		'timePattern':  ['Шаблон поиска', 'Search pattern', 'Шаблон пошуку'],
		'timeRPattern': ['Шаблон замены', 'Replace pattern', 'Шаблон заміни'],

		'expandImgs': {
			sel:        [['Откл.', 'В посте', 'По центру'], ['Disable', 'In post', 'By center'], ['Вимк.', 'В дописі', 'По центру']],
			txt:        ['Раскрывать картинки по клику', 'Expand images on click', 'Розгортати зображення на клацання']
		},
		'imgNavBtns':   ['Добавлять кнопки навигации по картинкам', 'Add buttons to navigate images', 'Додавати кнопки навігації по зображеннях'],
		'resizeDPI':    ['Отображать картинки пиксель в пиксель', 'Don\'t upscale images on high DPI displays', 'Не розтягувати зображення на дисплеях з високим DPI'],
		'resizeImgs':   ['Уменьшать в экран большие картинки', 'Resize large images to fit screen', 'Припасовувати великі зображення до екрана'],
		'minImgSize':   ['Миним. размер раскрытых картинок (px)', 'Minimal size for expanded images (px)', 'Мінімальний розмір розгорнутих зображень (пікс.)'],
		'zoomFactor':   ['Чувствительность зума картинок [1-100%]', 'Images zoom sensibility [1-100%]', 'Чутливість зуму зображень [1-100%]'],
		'webmControl':  ['Показывать контрол-бар для WebM', 'Show control bar for WebM', 'Показувати смугу керування для webm'],
		'webmTitles':   ['Получать названия WebM из метаданных', 'Load titles from WebM metadata', 'Отримувати назви webm з метаданих'],
		'webmVolume':   ['Громкость WebM по умолчанию [0-100%]', 'Default volume for WebM [0-100%]', 'Гучність webm за замовчуванням [0-100%]'],
		'minWebmWidth': ['Минимальная ширина WebM (px)', 'Minimal width for WebM (px)'],
		'preLoadImgs':  ['Предварительно загружать картинки*', 'Preload images*', 'Завантажувати зображення заздалегідь*'],
		'findImgFile':  ['Распознавать встроенные файлы в картинках*', 'Detect embedded files in images*', 'Розпізнавати вбудовані в зображення файли*'],
		'openImgs': {
			sel:        [['Откл.', 'Все подряд', 'Только GIF', 'Кроме GIF'], ['Disable', 'All types', 'Only GIF', 'Non-GIF'], ['Вимк.', 'Всі', 'Тільки GIF', 'Крім GIF']],
			txt:        ['Заменять картинки на оригиналы*', 'Replace thumbnails with original images*', 'Заміняти зображення на оригінали*']
		},
		'imgSrcBtns':   ['Добавлять кнопки "Поиск" для картинок', 'Add "Search" buttons for images', 'Додавати кнопки для пошуку зображень'],
		'delImgNames':  ['Скрывать имена картинок', 'Hide filenames', 'Приховувати імена зображень'],
		'maskVisib':    ['Прозрачность в режиме NSFW [0-100%]', 'Images opacity in NSFW mode [0-100%]', 'Видимість для NSFW-зображень [0-100%]'],

		'linksNavig':   ['Навигация постов по >>ссылкам* ', 'Posts navigation by >>links* ', 'Навігація по >>посиланнях* '],
		'linksOver':    ['Появление ', 'Appearance ', 'Поява '],
		'linksOut':     ['Пропадание (мс)', 'Disappearance (ms)', 'Зникнення (мс)'],
		'markViewed':   ['Помечать просмотренные посты', 'Mark viewed posts', 'Позначати переглянуті дописи'],
		'strikeHidd':   ['Зачеркивать >>ссылки на скрытые посты', 'Strike >>links to hidden posts', 'Закреслювати >>посилання на приховані дописи'],
		'removeHidd':   ['Также удалять из карты ответов', 'Also remove from reply maps', 'Також видаляти з карти відповідей'],
		'noNavigHidd':  ['Не отображать превью для скрытых постов', 'Don\'t show previews for hidden posts', 'Не показувати превʼю до прихованих дописів'],
		'markMyLinks':  ['Помечать ссылки на мои посты как (You)', 'Mark links to my posts with (You)', 'Позначати посилання на мої дописи як (You)'],
		'crossLinks':   ['Заменять http:// на >>/b/ссылки*', 'Replace http:// with >>/b/links*', 'Перетворювати https:// на >>/b/посилання*'],
		'decodeLinks':  ['Декодировать %D0%A5%D1 в ссылках*', 'Decode %D0%A5%D1 in links*', 'Декодувати %D0%A5%D1 в посиланнях*'],
		'insertNum':    ['Вставлять >>ссылку по клику на №поста*', 'Insert >>link on №postnumber click*', 'Вставляти >>посилання на клік по №допису*'],
		'addOPLink':    ['>>ссылка при ответе на оп-пост на доске', 'Insert >>link when replying to OP on board', '>>посилання при відповіді на OP-допис на дошці'],
		'addImgs':      ['Загружать картинки к jpg/png/gif ссылкам*', 'Load images for jpg/png/gif links*', 'Завантажувати зображення до посилань jpg, png, gif*'],
		'addMP3':       ['Плеер к mp3 ссылкам* ', 'Player for mp3 links* ', 'Програвач до посилань mp3* '],
		'addVocaroo':   ['к Vocaroo ссылкам*', 'for Vocaroo links*', 'до посилань Vocaroo*'],
		'addVimeo':     ['Добавлять плеер к Vimeo ссылкам*', 'Add player for Vimeo links*', 'Додавати програвач до посилань Vimeo*'],
		'addYouTube': {
			sel:        [
				['Ничего', 'Плеер по клику', 'Авто плеер', 'Превью+плеер', 'Только превью'],
				['Nothing', 'On click player', 'Auto player', 'Preview+player', 'Only preview'],
				['Нічого', 'Програвач на посилання', 'Автопрограчач', 'Превʼю+програвач', 'Тільки превʼю']
			],
			txt:        ['к YouTube ссылкам* ', 'for YouTube links* ', 'до посилань YouTube* ']
		},
		'YTubeType': {
			sel:        [['Flash', 'HTML5'], ['Flash', 'HTML5'], ['Flash', 'HTML5']],
			txt:        ['', '', '']
		},
		'YTubeTitles':  ['Загружать названия к YouTube ссылкам*', 'Load titles for YouTube links*', 'Завантажувати назви до посилань YouTube*'],
		'ytApiKey':     ['Ключ YT API*', 'YT API Key*', 'Ключ YT API*'],

		'ajaxPosting':  ['Отправка постов без перезагрузки*', 'Posting without refresh*', 'Дописування через AJAX*'],
		'postSameImg':  ['Возможность отправки одинаковых картинок', 'Ability to post duplicate images', 'Можливість надсилання однакових зображень'],
		'removeEXIF':   ['Удалять EXIF из JPEG ', 'Remove EXIF from JPEG ', 'Видаляти EXIF з JPEG '],
		'removeFName':  ['Очищать имя файлов', 'Clear file names', 'Видаляти імена файлів'],
		'sendErrNotif': ['Оповещать в заголовке об ошибке отправки', 'Inform in title about post send error', 'Сповіщати в заголовку про помилку надсилання'],
		'scrAfterRep':  ['Перемещаться в конец треда после отправки', 'Scroll to bottom after reply', 'Переміщуватися в кінець нитки після надсилання'],
		'fileInputs':   {
			sel:        [['Откл.', 'Упрощ.', 'Превью'], ['Disable', 'Simple', 'Preview'], ['Вимкн.', 'Спрощ.', 'Превʼю']],
			txt:        ['Улучшенное поле добавления файлов', 'Enhanced file attachment field', 'Покращене поле додавання файлів']
		},
		'addPostForm': {
			sel:        [['Сверху', 'Внизу', 'Скрытая'], ['At top', 'At bottom', 'Hidden'], ['Вгорі', 'Знизу', 'Прихована']],
			txt:        ['Форма ответа в треде', 'Reply form display in thread', 'Форма відповіді в нитці']
		},
		'spacedQuote':  ['Вставлять пробел при цитировании "> "', 'Insert a space when quoting "> "', 'Вставляти пробіл під час цитування з "> "'],
		'favOnReply':   ['Добавлять тред в "Избранное" после ответа', 'Add thread to "Favorites" after reply', 'Додавати нитку в вибрані після відповідання'],
		'warnSubjTrip': ['Оповещать о трипкоде в поле "Тема"', 'Warn about a tripcode in "Subject" field', 'Сповіщати в разі присутності трипкоду в полі «Тема»'],
		'addSageBtn':   ['Кнопка Sage вместо поля "Email" ', 'Replace "Email" with Sage button ', 'Кнопка Sage замість "E-mail" '],
		'saveSage':     ['Помнить сажу', 'Remember sage', 'Запамʼятовувати sage'],
		'cap4chanAlt':  ['4chan: альтернативная капча*', '4chan: use alternative captcha*', '4chan: альтернативна капча*'],
		'capUpdTime':   ['Интервал обновления капчи (сек)', 'Captcha update interval (sec)', 'Інтервал оновлення капчі (сек)'],
		'captchaLang': {
			sel:        [['Откл.', 'Eng', 'Rus'], ['Disable', 'Eng', 'Rus'], ['Вимк.', 'Eng', 'Ukr']],
			txt:        ['Принудительный язык ввода капчи', 'Forced captcha input language', 'Мова введення капчі']
		},
		'addTextBtns': {
			sel:        [['Откл.', 'Графич.', 'Упрощ.', 'Стандарт.'], ['Disable', 'As images', 'As text', 'Standard'], ['Вимк.', 'Графіч.', 'Спрощ.', 'Стандарт.']],
			txt:        ['Кнопки разметки текста ', 'Text markup buttons ', 'Кнопки розмітки тексту ']
		},
		'txtBtnsLoc':   ['Внизу', 'At bottom', 'Знизу'],
		'userPassw':    ['Постоянный пароль', 'Fixed password', 'Постійний пароль'],
		'userName':     ['Постоянное имя', 'Fixed name', 'Постійне імʼя'],
		'noBoardRule':  ['Правила ', 'Rules ', 'Правила '],
		'noPassword':   ['Пароль ', 'Password ', 'Пароль '],
		'noName':       ['Имя ', 'Name ', 'Імʼя '],
		'noSubj':       ['Тему', 'Subject', 'Тему'],

		'scriptStyle': {
			sel:        [
				['Gradient darkblue', 'Gradient blue', 'Solid grey', 'Transparent blue', 'Square dark'],
				['Gradient darkblue', 'Gradient blue', 'Solid grey', 'Transparent blue', 'Square dark'],
				['Gradient darkblue', 'Gradient blue', 'Solid grey', 'Transparent blue', 'Square dark']

			],
			txt:        ['Стиль Dollchan', 'Dollchan style', 'Стиль Dollchan']
		},
		'userCSS':      ['Пользовательский CSS', 'User CSS', 'Користувацький CSS'],
		'panelCounter': {
			sel:        [['Откл.', 'Все посты', 'Без скрытых'], ['Disabled', 'All posts', 'Except hidden'], ['Вимкнуто', 'Усі дописи', 'Крім прихованих']],
			txt:        ['Счетчик постов/картинок на панели', 'Panel counter for posts/images', 'Лічильник дописів/зображень на головній панелі']
		},
		'rePageTitle':  ['Название треда в заголовке вкладки*', 'Show thread title in the page tab*', 'Назва нитки в заголовку вкладки*'],
		'animation':    ['CSS3 анимация', 'CSS3 animation', 'Анімація CSS3 в скрипті'],
		'closePopups':  ['Автоматически закрывать уведомления', 'Close popups automatically', 'Автоматично закривати сповіщення'],
		'inftyScroll':  ['Бесконечная прокрутка страниц', 'Infinite scrolling for pages', 'Нескінченна прокрутка сторінок'],
		'scrollToTop':  ['Всегда скроллить в топ на доске', 'Always scroll to top in the threads list', 'Завжди переходити нагору в списку дописів'],
		'updScript':    ['Автоматически проверять обновления', 'Auto check for Dollchan updates', 'Автоматично перевіряти оновлення скрипта'],
		'scrUpdIntrv': {
			sel:        [
				['Каждый день', 'Каждые 2 дня', 'Каждую неделю', 'Каждые 2 недели', 'Каждый месяц'],
				['Every day', 'Every 2 days', 'Every week', 'Every 2 weeks', 'Every month'],
				['Щодня', 'Кожні 2 дні', 'Щотижня', 'Кожні 2 тижні', 'Щомісяця']
			],
			txt:        ['', '', '']
		},
		'excludeList':  ['Не запускать Dollchan на:', 'Prevent Dollchan launch on:', 'Не запускати скрипт на:'],
		'turnOff':      ['Включать Dollchan только на этом сайте', 'Enable Dollchan only on this site', 'Вмикати скрипт тільки на цьому сайті'],

		'language': {
			sel:        [['Ru', 'En', 'Uk'], ['Ru', 'En', 'Uk'], ['Ru', 'En', 'Uk']],
			txt:        ['', '', '']
		}
	},

	txtBtn: [
		['Жирный', 'Bold', 'Жирний'],
		['Наклонный', 'Italic', 'Курсив'],
		['Подчеркнутый', 'Underlined', 'Підкреслений'],
		['Зачеркнутый', 'Strike', 'Закреслений'],
		['Спойлер', 'Spoiler', 'Спойлер'],
		['Код', 'Code', 'Код'],
		['Верхний индекс', 'Superscript', 'Верхній індекс'],
		['Нижний индекс', 'Subscript', 'Нижній індекс'],
		['Цитировать выделенное', 'Quote selected', 'Цитувати виділене']
	],

	cfgTab: {
		'filters':      ['Фильтры', 'Filters', 'Фільтри'],
		'posts':        ['Посты', 'Posts', 'Дописи'],
		'images':       ['Картинки', 'Images', 'Зображення'],
		'links':        ['Ссылки', 'Links', 'Посилання'],
		'form':         ['Форма', 'Form', 'Форма'],
		'common':       ['Общее', 'Common', 'Спільне'],
		'info':         ['Инфо', 'Info', 'Інфо']
	},

	panelBtn: {
		'attach':       ['Прикрепить/Открепить панель', 'Attach/Detach panel', 'Закріпити/відкріпити панель'],
		'cfg':          ['Настройки', 'Settings', 'Налаштування'],
		'hid':          ['Скрытое', 'Hidden', 'Приховане'],
		'fav':          ['Избранное', 'Favorites', 'Вибране'],
		'vid':          ['Видео ссылки', 'Video links', 'Посилання на відео'],
		'refresh':      ['Обновить', 'Refresh', 'Оновити'],
		'goback':       ['Назад на доску', 'Return to board', 'Назад до дошки'],
		'gonext':       ['На страницу %s', 'Go to page %s', 'Перейти на %s'],
		'goup':         ['В начало страницы', 'Scroll to top', 'Прогорнути догори'],
		'godown':       ['В конец страницы', 'Scroll to bottom', 'Прогорнути донизу'],
		'expimg':       ['Раскрыть все картинки', 'Expand all images', 'Розгорнути всі зображення'],
		'preimg':       [
			'Предзагрузка картинок&#13;([Ctrl+Click] только для новых постов)',
			'Preload images&#13;([Ctrl+Click] for new posts only)',
			'Презавантаження зображень&#13;([Ctrl+Click] лише для нових дописів)'
		],
		'maskimg':      ['Режим NSFW', 'NSFW mode', 'Режим NSFW'],
		'upd-on':       ['Выключить автообновление треда', 'Disable thread autoupdate', 'Вимкнути автооновлення нитки'],
		'upd-off':      ['Включить автообновление треда', 'Enable thread autoupdate', 'Увімкнути автоооновлення нитки'],
		'audio-off':    ['Звуковое оповещение о новых постах', 'Sound notification about new posts', 'Звукове сповіщення про нові дописи'],
		'catalog':      ['Перейти в каталог', 'Go to catalog', 'Перейти до каталога'],
		'pcount':       ['Постов в треде', 'Posts in thread', 'Дописів у нитці'],
		'pcountNotHid': ['Постов в треде (без скрытых)', 'Posts in thread (without hidden)', 'Дописів у нитці (без прихованих)'],
		'imglen':       ['Картинок в треде', 'Images in thread', 'Зображень у нитці'],
		'posters':      ['Постящих в треде', 'Posters in thread', 'Дописувачів у нитці'],
		'savethr':      ['Сохранить на диск', 'Save to disk', 'Зберегти на диск'],
		'enable':       ['Включить/выключить Dollchan', 'Turn on/off the Dollchan', 'Увімкнути/вимкнути Dollchan']
	},

	selHiderMenu: {
		'sel':          ['Скрывать выделенное', 'Hide selected text', 'Приховувати виділене'],
		'name':         ['Скрывать имя', 'Hide name', 'Приховувати імʼя'],
		'trip':         ['Скрывать трипкод', 'Hide with tripcode', 'Приховувати трипкод'],
		'img':          ['Скрывать по размеру картинки', 'Hide by image size', 'Приховувати по розміру зображення'],
		'imgn':         ['Скрывать по имени картинки', 'Hide by image name', 'Приховувати зображення'],
		'ihash':        ['Скрывать по схожей картинке', 'Hide by similar image', 'Приховувати схожі зображення'],
		'noimg':        ['Скрывать без картинок', 'Hide without images', 'Приховувати без зображень'],
		'notext':       ['Скрывать без текста', 'Hide without text', 'Приховувати без тексту'],
		'text':         ['Скрыть схожий текст', 'Hide similar text', 'Приховати схожий текст'],
		'refs':         ['Скрыть с ответами', 'Hide with answers', 'Приховати з відповідями']
	},
	selExpandThr: [
		['+10 постов', 'Последние 30', 'Последние 50', 'Последние 100', 'Весь тред'],
		['+10 posts', 'Last 30 posts', 'Last 50 posts', 'Last 100 posts', 'Entire thread'],
		['+10 дописів', 'Останні 30', 'Останні 50', 'Останні 100', 'Вся нитка']
	],
	selAjaxPages: [
		['1 страница', '2 страницы', '3 страницы', '4 страницы', '5 страниц'],
		['1 page', '2 pages', '3 pages', '4 pages', '5 pages'],
		['1 сторінка', '2 сторінки', '3 сторінки', '4 сторінки', '5 сторінок']
	],
	selSaveThr: [
		['Скачать весь тред', 'Скачать картинки'],
		['Download thread', 'Download images'],
		['Завантажити всю нитку', 'Завантажити зображення']
	],
	selAudioNotif: [
		['Каждые 30 сек.', 'Каждую минуту', 'Каждые 2 мин.', 'Каждые 5 мин.'],
		['Every 30 sec.', 'Every minute', 'Every 2 min.', 'Every 5 min.'],
		['Кожні 30 сек.', 'Щохвилини', 'Кожні 2 хв.', 'Кожні 5 хв.']
	],

	hotKeyEdit: [[
		'%l%i24 – предыдущая страница/картинка%/l',
		'%l%i217 – следующая страница/картинка%/l',
		'%l%i21 – тред (на доске)/пост (в треде) ниже%/l',
		'%l%i20 – тред (на доске)/пост (в треде) выше%/l',
		'%l%i31 – пост (на доске) ниже%/l',
		'%l%i30 – пост (на доске) выше%/l',
		'%l%i23 – скрыть пост/тред%/l',
		'%l%i32 – перейти в тред%/l',
		'%l%i33 – развернуть тред%/l',
		'%l%i211 – раскрыть картинку в посте%/l',
		'%l%i22 – быстрый ответ%/l',
		'%l%i25t – отправить пост%/l',
		'%l%i210 – открыть/закрыть "Настройки"%/l',
		'%l%i26 – открыть/закрыть "Избранное"%/l',
		'%l%i27 – открыть/закрыть "Скрытое"%/l',
		'%l%i218 – открыть/закрыть "Видео"%/l',
		'%l%i28 – открыть/закрыть панель%/l',
		'%l%i29 – вкл./выкл. режим NSFW%/l',
		'%l%i40 – обновить тред (в треде)%/l',
		'%l%i212t – жирный%/l',
		'%l%i213t – курсив%/l',
		'%l%i214t – зачеркнутый%/l',
		'%l%i215t – спойлер%/l',
		'%l%i216t – код%/l'], [
		'%l%i24 – previous page/image%/l',
		'%l%i217 – next page/image%/l',
		'%l%i21 – thread (on board)/post (in thread) below%/l',
		'%l%i20 – thread (on board)/post (in thread) above%/l',
		'%l%i31 – on board post below%/l',
		'%l%i30 – on board post above%/l',
		'%l%i23 – hide post/thread%/l',
		'%l%i32 – go to thread%/l',
		'%l%i33 – expand thread%/l',
		'%l%i211 – expand post\'s images%/l',
		'%l%i22 – quick reply%/l',
		'%l%i25t – send post%/l',
		'%l%i210 – open/close "Settings"%/l',
		'%l%i26 – open/close "Favorites"%/l',
		'%l%i27 – open/close "Hidden"%/l',
		'%l%i218 – open/close "Videos"%/l',
		'%l%i28 – open/close main panel%/l',
		'%l%i29 – toggle NSFW mode%/l',
		'%l%i40 – update thread%/l',
		'%l%i212t – bold%/l',
		'%l%i213t – italic%/l',
		'%l%i214t – strike%/l',
		'%l%i215t – spoiler%/l',
		'%l%i216t – code%/l'], [
		'%l%i24 – попередня сторінка/зображення%/l',
		'%l%i217 – наступна сторінка/зображення%/l',
		'%l%i21 – нитка (на дошці)/допис (в нитці) нище%/l',
		'%l%i20 – нитка (на дошці)/допис (в нитці) вище%/l',
		'%l%i31 – допис (на дошці) нище%/l',
		'%l%i30 – допис (на дошці) вище%/l',
		'%l%i23 – приховати допис/нитку%/l',
		'%l%i32 – перейти в нитку%/l',
		'%l%i33 – розгорнути нитку%/l',
		'%l%i211 – розгорнути зображення в дописі%/l',
		'%l%i22 – швидка відповідь%/l',
		'%l%i25t – відправити допис%/l',
		'%l%i210 – відкрити/закрити "Налаштування"%/l',
		'%l%i26 – відкрити/закрити "Обране"%/l',
		'%l%i27 – відкрити/закрити "Приховане"%/l',
		'%l%i218 – відкрити/закрити "Відео"%/l',
		'%l%i28 – відкрити/закрити панель%/l',
		'%l%i29 – увімк/вимк режим NSFW%/l',
		'%l%i40 – обновити нитку (в нитці)%/l',
		'%l%i212t – жирний%/l',
		'%l%i213t – курсив%/l',
		'%l%i214t – закреслений%/l',
		'%l%i215t – спойлер%/l',
		'%l%i216t – код%/l'
	]],

	month: [
		['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
		['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		['січ', 'лют', 'бер', 'кві', 'тра', 'чер', 'лип', 'сер', 'вер', 'жов', 'лис', 'гру']
	],
	fullMonth: [
		['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
		['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня']
	],
	week: [
		['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'],
		['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		['Нед', 'Пон', 'Вів', 'Сер', 'Чет', 'Птн', 'Сбт']
	],

	editor: {
		cfg:        ['Редактирование настроек:', 'Edit settings:', 'Редагування налаштувань:'],
		hidden:     ['Редактирование скрытых тредов:', 'Edit hidden threads:', 'Редагування прихованих ниток:'],
		favor:      ['Редактирование избранного:', 'Edit favorites:', 'Редагування вибраного:'],
		css:        ['Редактирование CSS', 'Edit CSS', 'Редагування CSS']
	},

	newPost: [
		[' новый пост', ' новых поста', ' новых постов', '. Последний:'],
		[' new post', ' new posts', ' new posts', '. Latest: '],
		[' новий допис', ' нових дописи', ' нових дописів', '. Останній:']
	],

	name:           ['Имя', 'Name', 'Імʼя'],
	subj:           ['Тема', 'Subject', 'Тема'],
	mail:           ['Email', 'Email', 'Ел. пошта'],
	cap:            ['Капча', 'Captcha', 'Капча'],
	video:          ['Видео', 'Video', 'Відео'],
	add:            ['Добавить', 'Add', 'Додати'],
	apply:          ['Применить', 'Apply', 'Застосувати'],
	cancel:         ['Отмена', 'Cancel', 'Скасувати'],
	clear:          ['Очистить', 'Clear', 'Очистити'],
	refresh:        ['Обновить', 'Refresh', 'Оновити'],
	load:           ['Загрузить', 'Load', 'Завантажити'],
	save:           ['Сохранить', 'Save', 'Зберегти'],
	edit:           ['Правка', 'Edit','Правка'],
	file:           ['Файл', 'File', 'Файл'],
	global:         ['Глобальные', 'Global', 'Глобальні'],
	reset:          ['Сброс', 'Reset', 'Скинути'],
	remove:         ['Удалить', 'Remove', 'Видалити'],
	info:           ['Инфо', 'Info', 'Інфо'],
	undo:           ['Отмена', 'Undo', 'Скасувати'],
	change:         ['Сменить', 'Change', 'Змінити'],
	reply:          ['Ответ', 'Reply', 'Відповідь'],
	loading:        ['Загрузка...', 'Loading...', 'Завантаження…'],
	checking:       ['Проверка...', 'Checking...', 'Перевірка…'],
	deleting:       ['Удаление...', 'Deleting...', 'Видалення…'],
	deletion:       ['Удаление...', 'Deletion...', 'Видалення…'],
	updating:       ['Обновление...', 'Updating...', 'Оновлення…'],
	error:          ['Ошибка', 'Error', 'Помилка'],
	noConnect:      ['Ошибка подключения', 'Connection failed', 'Помилка зʼєднання'],
	internalError:	['Внутренняя ошибка:\n', 'Internal error:\n', 'Внутрішня помилка:\n'],
	thrNotFound:    ['Тред недоступен (№', 'Thread is unavailable (№', 'Нитка недоступна (№'],
	thrClosed:      ['Тред закрыт', 'Thread is closed', 'Нитку закрито'],
	thrArchived:    ['Тред в архиве', 'Thread is archived', 'Нитку заархівовано'],
	succDeleted:    ['Успешно удалено!', 'Succesfully deleted!', 'Успішно видалено!'],
	errDelete:      ['Не могу удалить:\n', 'Can\'t delete:\n', 'Не можу видалити:\n'],
	cTimeError:     ['Неправильные настройки времени', 'Invalid time settings', 'Неправильні налаштування часу'],
	noGlobalCfg:    ['Глобальные настройки не найдены', 'Global config not found', 'Глобальні налаштування не знайдено'],
	postNotFound:   ['Пост не найден', 'Post not found', 'Допис не знайдено'],
	dontShow:       ['Скрыть: ', 'Hide: ', 'Приховати: '],
	checkNow:       ['Проверить сейчас', 'Check now', 'Перевірити зараз'],
	updAvail:       ['Доступно обновление!', 'Update available!', 'Доступне оновлення!'],
	haveLatest:     ['У вас стоит последняя стабильная версия!', 'You have the latest stable version!', 'У вас остання версія!'],
	thrViewed:      ['Тредов посещено', 'Threads visited', 'Ниток відвідано'],
	thrCreated:     ['Тредов создано', 'Threads created', 'Ниток створено'],
	thrHidden:      ['Тредов скрыто', 'Threads hidden', 'Ниток приховано'],
	postsSent:      ['Постов отправлено', 'Posts sent', 'Дописів надіслано'],
	total:          ['Всего', 'Total', 'Всього'],
	debug:          ['Отладка', 'Debug', 'Зневадження'],
	infoDebug:      ['Информация для отладки', 'Information for debugging', 'Інформація для зневадження'],
	fileImpExp:     ['Импорт/экспорт настроек в файл', 'Import/export config to file', 'Імпорт/експорт налаштувань до файлу'],
	cfgImpExp:      ['Импорт/экспорт настроек', 'Import/export of config', 'Імпорт/експорт налаштувань'],
	fileToData:     ['Загрузить данные из файла', 'Load data from a file', 'Завантажити налаштування з файла'],
	dataToFile:     ['Получить файл</a> с данными', 'Get the file</a> with data', 'Отримати файл</a> з налаштуваннями'],
	globalCfg:      ['Глобальные настройки', 'Global config', 'Глобальні налаштування'],
	loadGlobal:     ['и применить к этому домену', 'and apply to this domain', ' і застосувати до цього домена'],
	saveGlobal:     ['текущие настройки как глобальные', 'current config as global', ' поточні налаштування як глобальні'],
	descrGlobal:    [
		'Глобальные настройки применяются по умолчанию<br>при первом посещении других доменов',
		'Global config is applied by default<br>on the first visit of other domains',
		'Глобальні налаштування будуть за промовчанням застосовуватися<br>під час першого відвідання інших доменів'],
	editInTxt:      ['Правка в текстовом формате', 'Edit in text format', 'Правка в текстовому форматі'],
	resetCfg:       ['Сбросить в настройки по умолчанию', 'Reset config to defaults', 'Скинути в налаштування за замовчуванням'],
	resetData:      ['Очистить данные', 'Reset selected data', 'Очистити дані'],
	allDomains:     ['для всех доменов', 'for all domains', 'Для всіх доменів:'],
	delEntries:     ['Выбрать и удалить записи', 'Select and delete entries', 'Видалити виділені записи'],
	saveChanges:    ['Сохранить внесенные изменения', 'Save your changes', 'Зберегти внесені зміни'],
	infoCount:      ['Обновить счетчики постов', 'Refresh posts counters', 'Оновити лічильники дописів'],
	infoPage:       ['Проверить положение тредов (до 10-й страницы)', 'Check for threads position (up to 10th page)', 'Перевірити актуальність ниток (до 10 сторінки)'],
	clrDeleted:     ['Очистить недоступные (404) треды', 'Clear inaccessible (404) threads', 'Очистити недоступні (404) нитки'],
	oldPosts:       ['Постов при последнем посещении', 'Posts at the last visit', 'Дописів під час останнього відвідування'],
	myPostsRep:     ['Ответов на ваши посты', 'Replies to your posts', 'Відповідей на ваші дописи'],
	newPosts:       ['Количество новых постов', 'Number of new posts', 'Кількість нових дописів'],
	thrPage:        ['Тред на @странице', 'Thread on @page', 'Нитка на @сторінці'],
	hiddenPosts:    ['Скрытые посты', 'Hidden posts', 'Приховані дописи'],
	onPage:         [' на странице', ' on the page', ' на сторінці'],
	hidPostThr:     ['Скрытые посты и треды', 'Hidden posts and threads', 'Приховані нитки та дописи'],
	myPosts:        ['Мои посты', 'My posts', 'Мої дописи'],
	noHidThr:       ['Нет скрытых тредов...', 'No hidden threads...', 'Немає прихованих дописів…'],
	invalidData:    ['Некорректный формат данных', 'Incorrect data format', 'Некоректний формат даних'],
	noFavThr:       ['Нет избранных тредов...', 'Favorites is empty...', 'Немає вибраних ниток…'],
	noVideoLinks:   ['Нет ссылок на видео...', 'No video links...', 'Немає посилань на відео…'],
	hideLnkList:    ['Скрыть/Показать список ссылок', 'Hide/Unhide list of links', 'Приховати/показати список посилань'],
	prevVideo:      ['Предыдущее видео', 'Previous video', 'Попереднє відео'],
	nextVideo:      ['Следующее видео', 'Next video', 'Наступне відео'],
	toPanel:        ['Закрепить на панели', 'Attach to panel', 'Закріпити на панель'],
	underPost:      ['Поместить форму под пост', 'Move form under post', 'Помістити форму під допис'],
	clearForm:      ['Очистить форму', 'Clear form', 'Очистити форму'],
	makeDrag:       ['Сделать перетаскиваемым окном', 'Make draggable window', 'Зробити перетягуваним вікном'],
	closeWindow:    ['Закрыть окно', 'Close window', 'Закрити вікно'],
	closeReply:     ['Закрыть форму', 'Close form', 'Закрити форму'],
	replies:        ['Ответы:', 'Replies:', 'Відповіді:'],
	postsOmitted:   ['Пропущено ответов: ', 'Posts omitted: ', 'Пропущено відповідей: '],
	showPosts:      ['Показать посты', 'Show posts', 'Показати дописи'],
	hidePosts:      ['Скрыть посты', 'Hide posts', 'Приховати дописи'],
	collapseThr:    ['Свернуть тред', 'Collapse thread', 'Згорнути нитку'],
	deleted:        ['удалён', 'deleted', 'видалено'],
	getNewPosts:    ['Получить новые посты', 'Get new posts', 'Отримати нові дописи'],
	page:           ['Страница', 'Page', 'Сторінка'],
	hiddenThr:      ['Скрытый тред', 'Hidden thread', 'Прихована нитка:'],
	makeThr:        ['Создать тред', 'Create thread', 'Створити нитку'],
	makeReply:      ['Ответить', 'Reply', 'Відповісти'],
	noSage:         ['Без сажи', 'No sage', 'Без sage'],
	hideForm:       ['Скрыть форму', 'Hide form', 'Приховати форму'],
	search:         ['Искать в ', 'Search in ', 'Шукати в '],
	wait:           ['Ждите', 'Wait', 'Чекайте'],
	dropFileHere:   ['Бросьте сюда файл(ы) или ссылку', 'Drop file(s) or link here', 'Киньте сюди файл(и) чи посилання'],
	youCanDrag:     [
		'Можно перетаскивать картинки и ссылки на файлы&#13;прямо со страницы или других сайтов',
		'You can drag images and file links&#13;directly from the page or other sites',
		'Ви можете перетягувати зображення чи файли&#13;зі сторінки чи інших сайтів'],
	removeFile:     ['Удалить файл', 'Remove file', 'Видалити файл'],
	spoilFile:      ['Спойлер', 'Spoiler', 'Спойлер'],
	addManually:    ['Ввести ссылку на файл вручную', 'Enter a link to the file manually', 'Ввести посилання на файл вручну'],
	enterTheLink:   ['Введите ссылку и нажмите \'+\'', 'Enter the link and click \'+\'', 'Вставте посилання та натисніть \'+\''],
	helpAddFile:    ['Встроить ogg/rar/zip/7z в картинку', 'Embed ogg/rar/zip/7z into the image', 'Вбудувати .ogg, .rar, .zip або .7z в зображення'],
	downloadFile:   ['Скачать содержащийся в картинке файл', 'Download embedded file from the image', 'Завантажити файл, що міститься в зображення'],
	fileCorrupt:    ['Файл повреждён: ', 'File is corrupt: ', 'Файл пошкоджено: '],
	subjHasTrip:    ['Поле "Тема" содержит трипкод', '"Subject" field contains a tripcode', 'Поле «Тема» містить трипкод'],
	loadImage:      ['Загружаются картинки: ', 'Loading images: ', 'Завантажуються зображення: '],
	loadFile:       ['Загружаются файлы: ', 'Loading files: ', 'Завантажуються файли: '],
	cantLoad:       ['Не могу загрузить ', 'Can\'t load ', 'Не можу завантажити '],
	willSavePview:  ['Будет сохранено превью', 'Thumbnail will be saved', 'Буде збережено мініатюру'],
	loadErrors:     ['Во время загрузки произошли ошибки:', 'An error occurred during the loading:', 'Під час завантаження сталася помилка:'],
	errCorruptData: ['Ошибка: сервер отправил повреждённые данные', 'Error: server sent corrupted data', 'Помилка: сервер надіслав пошкоджені дані'],
	errMsEdgeWebm:  ['Загрузите скрипт для воспроизведения WebM (VP9/Opus)', 'Please load a script to play WebM (VP9/Opus)', 'Завантажте скрипт для відтворення  WebM (VP9/Opus)'],
	expImgInline:   ['[Click] открыть в посте, [Ctrl+Click] в центре', '[Click] expand in post, [Ctrl+Click] by center', '[Click] розгорнути в дописі, [Ctrl+Click] в центрі'],
	expImgFull:     ['[Click] открыть в центре, [Ctrl+Click] в посте', '[Click] expand by center, [Ctrl+Click] in post', '[Click] розгорнути в центрі, [Ctrl+Click] в дописі'],
	nextImg:        ['Следующая картинка', 'Next image', 'Наступне зображення'],
	prevImg:        ['Предыдущая картинка', 'Previous image', 'Попереднє зображення'],
	togglePost:     ['Скрыть/Раскрыть пост', 'Hide/Unhide post', 'Приховати/показати допис'],
	replyToPost:    ['Ответить на пост', 'Reply to post', 'Відповісти на допис'],
	expandThr:      ['Развернуть тред', 'Expand thread', 'Розгорнути нитку'],
	addFav:         ['Добавить тред в Избранное', 'Add thread to Favorites', 'Додати нитку в вибране'],
	delFav:         ['Убрать тред из Избранного', 'Remove thread from Favorites', 'Прибрати нитку з вибраного'],
	attachPview:    ['Закрепить превью', 'Attach preview', 'Закріпити превʼю'],
	expandVideo:    ['Развернуть/Свернуть видео', 'Expand/Collapse video', 'Розгорнути/згорнути відео'],
	duration:       ['Продолжительность: ', 'Duration: ', 'Тривалість: '],
	published:      ['опубликовано: ', 'published: ', 'опубліковано: '],
	author:         ['Автор: ', 'Author: ', 'Автор: '],
	views:          ['просмотров: ', 'views: ', 'переглядів: '],

	seSyntaxErr:    ['синтаксическая ошибка в аргументе спелла: %s', 'syntax error in argument of spell: %s', 'синтаксична помилка в аргументі закляття: %s'],
	seUnknown:      ['неизвестный спелл: %s', 'unknown spell: %s', 'невідоме закляття: %s'],
	seMissOp:       ['пропущен оператор', 'missing operator', 'пропущено оператор'],
	seMissArg:      ['пропущен аргумент спелла: %s', 'missing argument of spell: %s', 'пропущено аргумент закляття: %s'],
	seMissSpell:    ['пропущен спелл', 'missing spell', 'пропущено закляття'],
	seErrRegex:     ['синтаксическая ошибка в регулярном выражении: %s', 'syntax error in regular expression: %s', 'синтаксична помилка в регулярному виразі: %s'],
	seUnexpChar:    ['неожиданный символ: %s', 'unexpected character: %s', 'неочікуваний символ символ: %s'],
	seMissClBkt:    ['пропущена закрывающая скобка', 'missing \')\' in expression', 'пропущено закривну дужку'],
	seRepsInParens: ['спелл %s не должен располагаться в скобках', 'spell %s shouldn\'t be inside parentheses', 'закляття $s не може бути в дужках'],
	seOpInReps:     [
		'недопустимо использовать оператор %s со спеллами #rep и #outrep',
		'don\'t use operator %s with spells #rep & #outrep',
		'неприпустимо використовувати оператор %s з закляттями #rep и #outrep'
	],
	seRow:          [' (строка ', ' (row ', ' (рядок '],
	seCol:          [', столбец ', ', column ', ', стовпчик '],
	sendingPost:    ['Отправка поста...', 'Sending post...', 'Надсилання допису...'],
	sizeByte:       [' Байт', ' Byte', ' Байт'],
	sizeKByte:      [' КБ', ' KB', ' КБ'],
	sizeMByte:      [' МБ', ' MB', ' МБ'],
	sizeGByte:      [' ГБ', ' GB', ' ГБ'],
	second:         ['с', 's', 'с']
};
