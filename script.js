const WHATSAPP_NUMBER = "971509555151";
const STORAGE_KEY = "socotraairlines_leads";
const LANGUAGE_KEY = "socotraairlines_language";

const translations = {
  en: {
  "الرئيسية": "Home",
  "لماذا سقطرى؟": "Why Socotra?",
  "البرامج": "Programs",
  "الأسعار": "Prices",
  "يشمل البرنامج": "Included",
  "الأسئلة الشائعة": "FAQ",
  "الحجز": "Booking",
  "احجز عبر واتساب": "Book on WhatsApp",
  "منظم رحلات إلى جزيرة سقطرى": "Organized trips to Socotra Island",
  "رحلات سقطرى 7 أيام بتجربة منظمة لا تُنسى": "7-day Socotra trips with an unforgettable organized experience",
  "اكتشف جزيرة سقطرى مع برنامج سياحي يشمل التنقلات، المرشد المحلي، الطعام، التخييم، والتنسيق الكامل للرحلة.": "Discover Socotra Island with a tour program that includes transportation, a local guide, meals, camping, and full trip coordination.",
  "تبدأ الأسعار من 1,050$ للشخص للمجموعات": "Prices start from $1,050 per person for groups",
  "بدون تذاكر الطيران": "Flights not included",
  "شاهد البرامج": "View Programs",
  "شاهد الأسعار": "View Prices",
  "وجهة مختلفة": "A Different Destination",
  "جبال ووديان سقطرى": "Socotra Mountains and Valleys",
  "أشجار دم الأخوين": "Dragon Blood Trees",
  "شواطئ سقطرى": "Socotra Beaches",
  "طبيعة نادرة": "Rare Nature",
  "جزيرة بتنوع طبيعي لا يشبه أي وجهة أخرى في المنطقة.": "An island with natural diversity unlike anywhere else in the region.",
  "شواطئ ساحرة": "Magical Beaches",
  "مياه فيروزية ورمال هادئة تمنحك لحظات استرخاء حقيقية.": "Turquoise water and quiet sand for true moments of relaxation.",
  "رمز سقطرى الأجمل وتجربة مشاهدة لا تنسى لمحبي الطبيعة.": "Socotra's most iconic symbol and an unforgettable sight for nature lovers.",
  "مغامرات وتخييم": "Adventure and Camping",
  "أيام بين الجبال والوديان والنجوم ضمن تنظيم مريح وواضح.": "Days among mountains, valleys, and stars with clear and comfortable organization.",
  "تصوير استثنائي": "Exceptional Photography",
  "مشاهد مناسبة لصناعة ذكريات وصور مبهرة من كل زاوية.": "Scenes made for memories and impressive photos from every angle.",
  "بعيدًا عن الزحام": "Away from Crowds",
  "رحلة هادئة لعشاق الأماكن البكر والتجارب الأصيلة.": "A quiet trip for lovers of untouched places and authentic experiences.",
  "اختر برنامجك": "Choose Your Program",
  "برامج رحلات سقطرى": "Socotra Trip Programs",
  "رحلة 4 أيام": "4-Day Trip",
  "خيار سريع لاكتشاف أبرز معالم سقطرى خلال وقت قصير.": "A quick option to discover Socotra's highlights in a short time.",
  "مناسبة لمن:": "Best For:",
  "المسافرين الذين لديهم وقت محدود.": "Travelers with limited time.",
  "استقبال من المطار": "Airport pickup",
  "تنقلات داخل الجزيرة": "Island transportation",
  "مرشد محلي": "Local guide",
  "جدول زيارات مختصر": "Short visit schedule",
  "دعم أثناء الرحلة": "Support during the trip",
  "استفسر عبر واتساب": "Ask on WhatsApp",
  "الأكثر طلبًا": "Most Popular",
  "رحلة 7 أيام": "7-Day Trip",
  "البرنامج الأساسي والأفضل لاكتشاف سقطرى براحة وتجربة أعمق.": "The main and best program for discovering Socotra with comfort and depth.",
  "الأصدقاء، العائلات، ومحبي الطبيعة والتصوير.": "Friends, families, nature lovers, and photographers.",
  "طعام": "Meals",
  "تخييم": "Camping",
  "تنظيم كامل للرحلة": "Full trip organization",
  "رحلة خاصة حسب الطلب": "Custom Private Trip",
  "برنامج مرن يتم تصميمه حسب عدد الأشخاص، مستوى الراحة، وتاريخ السفر.": "A flexible program designed around your group size, comfort level, and travel date.",
  "العائلات، الأزواج، والمجموعات الخاصة.": "Families, couples, and private groups.",
  "جدول مخصص": "Custom itinerary",
  "مرونة في البرنامج": "Flexible program",
  "تنسيق خاص": "Private coordination",
  "دعم قبل وأثناء الرحلة": "Support before and during the trip",
  "اطلب برنامج خاص عبر واتساب": "Request a Custom Program",
  "أسعار واضحة": "Clear Pricing",
  "أسعار برنامج سقطرى 7 أيام بدون تذاكر الطيران": "7-Day Socotra Program Prices Without Flights",
  "تبدأ الأسعار من 1,050$ للشخص للمجموعات. كلما زاد عدد المسافرين، انخفض السعر للفرد.": "Prices start from $1,050 per person for groups. The larger the group, the lower the price per person.",
  "رحلة خاصة": "Private Trip",
  "من 2,250$ للشخص": "From $2,250 per person",
  "خصوصية أكبر وجدول مرن يناسب الأزواج أو المسافرين الفرديين.": "More privacy and a flexible schedule for couples or solo travelers.",
  "قروب صغير": "Small Group",
  "من 1,650$ للشخص": "From $1,650 per person",
  "مناسب للأصدقاء والعائلات الصغيرة مع توازن بين الراحة والسعر.": "Ideal for friends and small families with a balance of comfort and value.",
  "قروب اقتصادي": "Budget Group",
  "من 1,050$ للشخص": "From $1,050 per person",
  "أفضل خيار للحصول على أقل سعر للفرد ضمن مجموعة.": "The best option for the lowest per-person price within a group.",
  "الأسعار بدون تذاكر الطيران، وقد تختلف حسب الموسم، توفر الخدمات، ونوع البرنامج. للحصول على عرض نهائي، تواصل معنا عبر واتساب.": "Prices exclude flights and may vary by season, service availability, and program type. Contact us on WhatsApp for a final quote.",
  "احصل على عرض السعر عبر واتساب": "Get a Quote on WhatsApp",
  "تفاصيل مهمة": "Important Details",
  "ماذا يشمل برنامج الرحلة؟": "What Is Included?",
  "التأشيرة": "Visa",
  "مرشد سياحي محلي": "Local tour guide",
  "التخييم أو الإقامة حسب البرنامج": "Camping or accommodation depending on the program",
  "لا يشمل": "Not Included",
  "تذاكر الطيران": "Flight tickets",
  "المصاريف الشخصية": "Personal expenses",
  "أي خدمات إضافية غير مذكورة في العرض النهائي": "Any extra services not listed in the final offer",
  "ثقة وتجارب": "Trust and Experiences",
  "تجارب المسافرين معنا": "Traveler Experiences",
  "كانت رحلة منظمة جدًا، من الاستقبال حتى آخر يوم. سقطرى أجمل من الصور بكثير.": "The trip was very organized from pickup to the last day. Socotra is far more beautiful than photos.",
  "مسافر من الإمارات": "Traveler from the UAE",
  "أكثر ما أعجبني هو ترتيب البرنامج والمرشد المحلي. تجربة مختلفة فعلًا.": "What I liked most was the itinerary and local guide. A truly different experience.",
  "مسافرة من السعودية": "Traveler from Saudi Arabia",
  "رحلة ممتازة للأصدقاء ومحبي الطبيعة والتصوير. كل شيء كان واضحًا ومنظمًا.": "An excellent trip for friends, nature lovers, and photographers. Everything was clear and organized.",
  "مجموعة أصدقاء": "Group of Friends",
  "قبل الحجز": "Before Booking",
  "ما أفضل وقت لزيارة سقطرى؟": "What is the best time to visit Socotra?",
  "عادةً أفضل وقت يكون خلال موسم الرحلات عندما تكون الأجواء مناسبة للتنقل والاستمتاع بالطبيعة. تواصل معنا لمعرفة التواريخ المتاحة.": "The best time is usually during the trip season when the weather is suitable for moving around and enjoying nature. Contact us for available dates.",
  "هل الأسعار تشمل تذاكر الطيران؟": "Do prices include flight tickets?",
  "لا، الأسعار المعروضة بدون تذاكر الطيران.": "No, the displayed prices do not include flights.",
  "هل الرحلة مناسبة للعائلات؟": "Is the trip suitable for families?",
  "نعم، يمكن ترتيب برنامج مناسب للعائلات حسب عدد الأشخاص ومستوى الراحة المطلوب.": "Yes, we can arrange a family-friendly program based on group size and desired comfort level.",
  "هل يمكن عمل رحلة خاصة؟": "Can I book a private trip?",
  "نعم، نوفر رحلات خاصة حسب الطلب للأفراد، الأزواج، العائلات، والمجموعات.": "Yes, we offer custom private trips for individuals, couples, families, and groups.",
  "كيف يتم الحجز؟": "How do I book?",
  "يمكنك التواصل عبر واتساب، ثم نرسل لك البرنامج والتفاصيل والعرض النهائي حسب عدد الأشخاص وتاريخ السفر.": "Contact us on WhatsApp, then we send the program, details, and final offer based on group size and travel date.",
  "هل السعر يتغير حسب عدد الأشخاص؟": "Does the price change by group size?",
  "نعم، كلما زاد عدد المسافرين، انخفض السعر للفرد.": "Yes, the more travelers there are, the lower the price per person.",
  "ابدأ التواصل": "Start Contact",
  "اطلب عرض رحلتك": "Request Your Trip Offer",
  "عبئ البيانات وسيتم تجهيز رسالة واتساب تلقائيًا لإكمال التواصل مع فريق الحجز.": "Fill in the details and a WhatsApp message will be prepared automatically to continue with the booking team.",
  "الاسم": "Name",
  "رقم الواتساب": "WhatsApp Number",
  "عدد الأشخاص": "Number of People",
  "تاريخ السفر المتوقع": "Expected Travel Date",
  "نوع الرحلة": "Trip Type",
  "غير محدد": "Not Sure",
  "ملاحظات": "Notes",
  "إرسال الطلب عبر واتساب": "Send Request on WhatsApp",
  "طلبات الحجز المحلية": "Local Booking Requests",
  "تصدير CSV": "Export CSV",
  "حذف كل الطلبات": "Delete All Requests",
  "التاريخ": "Date",
  "الحالة": "Status",
  "هذه البيانات محفوظة محليًا على هذا الجهاز فقط وليست قاعدة بيانات سحابية.": "This data is saved locally on this device only and is not a cloud database.",
  "تواصل": "Contact",
  "روابط سريعة": "Quick Links",
  "منظم رحلات إلى جزيرة سقطرى، نساعدك في بناء تجربة سفر منظمة من البداية حتى نهاية الرحلة.": "A Socotra Island trip organizer helping you build a smooth travel experience from start to finish.",
  "اكتب اسمك": "Enter your name",
  "مثال: 9715XXXXXXX": "Example: 9715XXXXXXX",
  "مثال: 4": "Example: 4",
  "اكتب أي تفاصيل إضافية": "Add any extra details"
  },
  it: {
  "الرئيسية": "Home",
  "لماذا سقطرى؟": "Perché Socotra?",
  "البرامج": "Programmi",
  "الأسعار": "Prezzi",
  "يشمل البرنامج": "Incluso",
  "الأسئلة الشائعة": "FAQ",
  "الحجز": "Prenotazione",
  "احجز عبر واتساب": "Prenota su WhatsApp",
  "منظم رحلات إلى جزيرة سقطرى": "Viaggi organizzati sull'isola di Socotra",
  "رحلات سقطرى 7 أيام بتجربة منظمة لا تُنسى": "Viaggi a Socotra di 7 giorni con un'esperienza organizzata indimenticabile",
  "اكتشف جزيرة سقطرى مع برنامج سياحي يشمل التنقلات، المرشد المحلي، الطعام، التخييم، والتنسيق الكامل للرحلة.": "Scopri l'isola di Socotra con un programma che include trasporti, guida locale, pasti, campeggio e coordinamento completo.",
  "تبدأ الأسعار من 1,050$ للشخص للمجموعات": "Prezzi da 1.050$ a persona per gruppi",
  "بدون تذاكر الطيران": "Voli non inclusi",
  "شاهد البرامج": "Vedi i programmi",
  "شاهد الأسعار": "Vedi i prezzi",
  "وجهة مختلفة": "Una destinazione diversa",
  "جبال ووديان سقطرى": "Montagne e valli di Socotra",
  "أشجار دم الأخوين": "Alberi del sangue di drago",
  "شواطئ سقطرى": "Spiagge di Socotra",
  "طبيعة نادرة": "Natura rara",
  "جزيرة بتنوع طبيعي لا يشبه أي وجهة أخرى في المنطقة.": "Un'isola con una biodiversità unica nella regione.",
  "شواطئ ساحرة": "Spiagge incantevoli",
  "مياه فيروزية ورمال هادئة تمنحك لحظات استرخاء حقيقية.": "Acque turchesi e sabbia tranquilla per veri momenti di relax.",
  "رمز سقطرى الأجمل وتجربة مشاهدة لا تنسى لمحبي الطبيعة.": "Il simbolo più bello di Socotra e una vista indimenticabile.",
  "مغامرات وتخييم": "Avventura e campeggio",
  "أيام بين الجبال والوديان والنجوم ضمن تنظيم مريح وواضح.": "Giorni tra montagne, valli e stelle con organizzazione chiara.",
  "تصوير استثنائي": "Fotografia eccezionale",
  "مشاهد مناسبة لصناعة ذكريات وصور مبهرة من كل زاوية.": "Paesaggi ideali per ricordi e foto spettacolari.",
  "بعيدًا عن الزحام": "Lontano dalla folla",
  "رحلة هادئة لعشاق الأماكن البكر والتجارب الأصيلة.": "Un viaggio tranquillo per chi ama luoghi incontaminati.",
  "اختر برنامجك": "Scegli il tuo programma",
  "برامج رحلات سقطرى": "Programmi di viaggio a Socotra",
  "رحلة 4 أيام": "Viaggio di 4 giorni",
  "خيار سريع لاكتشاف أبرز معالم سقطرى خلال وقت قصير.": "Un'opzione rapida per scoprire i luoghi principali di Socotra.",
  "مناسبة لمن:": "Adatto a:",
  "المسافرين الذين لديهم وقت محدود.": "Viaggiatori con poco tempo.",
  "استقبال من المطار": "Accoglienza in aeroporto",
  "تنقلات داخل الجزيرة": "Trasporti sull'isola",
  "مرشد محلي": "Guida locale",
  "جدول زيارات مختصر": "Itinerario breve",
  "دعم أثناء الرحلة": "Supporto durante il viaggio",
  "استفسر عبر واتساب": "Chiedi su WhatsApp",
  "الأكثر طلبًا": "Più richiesto",
  "رحلة 7 أيام": "Viaggio di 7 giorni",
  "البرنامج الأساسي والأفضل لاكتشاف سقطرى براحة وتجربة أعمق.": "Il programma principale per scoprire Socotra con più comfort.",
  "الأصدقاء، العائلات، ومحبي الطبيعة والتصوير.": "Amici, famiglie, amanti della natura e della fotografia.",
  "طعام": "Pasti",
  "تخييم": "Campeggio",
  "تنظيم كامل للرحلة": "Organizzazione completa",
  "رحلة خاصة حسب الطلب": "Viaggio privato su misura",
  "برنامج مرن يتم تصميمه حسب عدد الأشخاص، مستوى الراحة، وتاريخ السفر.": "Programma flessibile in base al gruppo, al comfort e alla data.",
  "العائلات، الأزواج، والمجموعات الخاصة.": "Famiglie, coppie e gruppi privati.",
  "جدول مخصص": "Itinerario personalizzato",
  "مرونة في البرنامج": "Programma flessibile",
  "تنسيق خاص": "Coordinamento privato",
  "دعم قبل وأثناء الرحلة": "Supporto prima e durante il viaggio",
  "اطلب برنامج خاص عبر واتساب": "Richiedi un programma su misura",
  "أسعار واضحة": "Prezzi chiari",
  "أسعار برنامج سقطرى 7 أيام بدون تذاكر الطيران": "Prezzi del programma Socotra 7 giorni senza voli",
  "تبدأ الأسعار من 1,050$ للشخص للمجموعات. كلما زاد عدد المسافرين، انخفض السعر للفرد.": "Prezzi da 1.050$ a persona per gruppi. Più persone viaggiano, più basso è il prezzo a persona.",
  "رحلة خاصة": "Viaggio privato",
  "من 2,250$ للشخص": "Da 2.250$ a persona",
  "خصوصية أكبر وجدول مرن يناسب الأزواج أو المسافرين الفرديين.": "Più privacy e programma flessibile per coppie o viaggiatori singoli.",
  "قروب صغير": "Piccolo gruppo",
  "من 1,650$ للشخص": "Da 1.650$ a persona",
  "مناسب للأصدقاء والعائلات الصغيرة مع توازن بين الراحة والسعر.": "Ideale per amici e piccole famiglie con buon equilibrio tra comfort e prezzo.",
  "قروب اقتصادي": "Gruppo economico",
  "من 1,050$ للشخص": "Da 1.050$ a persona",
  "أفضل خيار للحصول على أقل سعر للفرد ضمن مجموعة.": "La scelta migliore per il prezzo più basso a persona in gruppo.",
  "الأسعار بدون تذاكر الطيران، وقد تختلف حسب الموسم، توفر الخدمات، ونوع البرنامج. للحصول على عرض نهائي، تواصل معنا عبر واتساب.": "I prezzi non includono i voli e possono variare per stagione, disponibilità e programma. Contattaci su WhatsApp per l'offerta finale.",
  "احصل على عرض السعر عبر واتساب": "Ricevi un preventivo su WhatsApp",
  "تفاصيل مهمة": "Dettagli importanti",
  "ماذا يشمل برنامج الرحلة؟": "Cosa include il programma?",
  "التأشيرة": "Visto",
  "مرشد سياحي محلي": "Guida turistica locale",
  "التخييم أو الإقامة حسب البرنامج": "Campeggio o alloggio secondo il programma",
  "لا يشمل": "Non incluso",
  "تذاكر الطيران": "Biglietti aerei",
  "المصاريف الشخصية": "Spese personali",
  "أي خدمات إضافية غير مذكورة في العرض النهائي": "Servizi extra non indicati nell'offerta finale",
  "ثقة وتجارب": "Fiducia ed esperienze",
  "تجارب المسافرين معنا": "Esperienze dei viaggiatori",
  "قبل الحجز": "Prima della prenotazione",
  "ابدأ التواصل": "Inizia il contatto",
  "اطلب عرض رحلتك": "Richiedi la tua offerta",
  "عبئ البيانات وسيتم تجهيز رسالة واتساب تلقائيًا لإكمال التواصل مع فريق الحجز.": "Compila i dati e verrà preparato automaticamente un messaggio WhatsApp.",
  "الاسم": "Nome",
  "رقم الواتساب": "Numero WhatsApp",
  "عدد الأشخاص": "Numero di persone",
  "تاريخ السفر المتوقع": "Data prevista del viaggio",
  "نوع الرحلة": "Tipo di viaggio",
  "غير محدد": "Non definito",
  "ملاحظات": "Note",
  "إرسال الطلب عبر واتساب": "Invia richiesta su WhatsApp",
  "طلبات الحجز المحلية": "Richieste locali",
  "تصدير CSV": "Esporta CSV",
  "حذف كل الطلبات": "Elimina tutte le richieste",
  "التاريخ": "Data",
  "الحالة": "Stato",
  "هذه البيانات محفوظة محليًا على هذا الجهاز فقط وليست قاعدة بيانات سحابية.": "Questi dati sono salvati solo su questo dispositivo, non in cloud.",
  "تواصل": "Contatti",
  "روابط سريعة": "Link rapidi",
  "اكتب اسمك": "Scrivi il tuo nome",
  "مثال: 9715XXXXXXX": "Esempio: 9715XXXXXXX",
  "مثال: 4": "Esempio: 4",
  "اكتب أي تفاصيل إضافية": "Scrivi eventuali dettagli aggiuntivi"
  },
  ru: {
  "الرئيسية": "Главная",
  "لماذا سقطرى؟": "Почему Сокотра?",
  "البرامج": "Программы",
  "الأسعار": "Цены",
  "يشمل البرنامج": "Включено",
  "الأسئلة الشائعة": "Вопросы",
  "الحجز": "Бронирование",
  "احجز عبر واتساب": "Забронировать в WhatsApp",
  "منظم رحلات إلى جزيرة سقطرى": "Организованные туры на остров Сокотра",
  "رحلات سقطرى 7 أيام بتجربة منظمة لا تُنسى": "7-дневные туры на Сокотру с незабываемой организацией",
  "اكتشف جزيرة سقطرى مع برنامج سياحي يشمل التنقلات، المرشد المحلي، الطعام، التخييم، والتنسيق الكامل للرحلة.": "Откройте Сокотру с программой, включающей транспорт, местного гида, питание, кемпинг и полную координацию.",
  "تبدأ الأسعار من 1,050$ للشخص للمجموعات": "Цены от 1 050$ за человека для групп",
  "بدون تذاكر الطيران": "Авиабилеты не включены",
  "شاهد البرامج": "Смотреть программы",
  "شاهد الأسعار": "Смотреть цены",
  "وجهة مختلفة": "Особое направление",
  "جبال ووديان سقطرى": "Горы и долины Сокотры",
  "أشجار دم الأخوين": "Драконовы деревья",
  "شواطئ سقطرى": "Пляжи Сокотры",
  "طبيعة نادرة": "Редкая природа",
  "جزيرة بتنوع طبيعي لا يشبه أي وجهة أخرى في المنطقة.": "Остров с природным разнообразием, не похожим ни на одно место региона.",
  "شواطئ ساحرة": "Волшебные пляжи",
  "مياه فيروزية ورمال هادئة تمنحك لحظات استرخاء حقيقية.": "Бирюзовая вода и спокойный песок для настоящего отдыха.",
  "رمز سقطرى الأجمل وتجربة مشاهدة لا تنسى لمحبي الطبيعة.": "Самый красивый символ Сокотры и незабываемое зрелище.",
  "مغامرات وتخييم": "Приключения и кемпинг",
  "أيام بين الجبال والوديان والنجوم ضمن تنظيم مريح وواضح.": "Дни среди гор, долин и звезд с понятной организацией.",
  "تصوير استثنائي": "Уникальные фото",
  "مشاهد مناسبة لصناعة ذكريات وصور مبهرة من كل زاوية.": "Пейзажи для ярких воспоминаний и впечатляющих фотографий.",
  "بعيدًا عن الزحام": "Вдали от толпы",
  "رحلة هادئة لعشاق الأماكن البكر والتجارب الأصيلة.": "Спокойное путешествие для любителей нетронутых мест.",
  "اختر برنامجك": "Выберите программу",
  "برامج رحلات سقطرى": "Программы туров на Сокотру",
  "رحلة 4 أيام": "Тур на 4 дня",
  "خيار سريع لاكتشاف أبرز معالم سقطرى خلال وقت قصير.": "Быстрый вариант, чтобы увидеть главные места Сокотры.",
  "مناسبة لمن:": "Подходит для:",
  "المسافرين الذين لديهم وقت محدود.": "Путешественников с ограниченным временем.",
  "استقبال من المطار": "Встреча в аэропорту",
  "تنقلات داخل الجزيرة": "Транспорт по острову",
  "مرشد محلي": "Местный гид",
  "جدول زيارات مختصر": "Краткий маршрут",
  "دعم أثناء الرحلة": "Поддержка во время тура",
  "استفسر عبر واتساب": "Спросить в WhatsApp",
  "الأكثر طلبًا": "Самый популярный",
  "رحلة 7 أيام": "Тур на 7 дней",
  "البرنامج الأساسي والأفضل لاكتشاف سقطرى براحة وتجربة أعمق.": "Основная и лучшая программа для комфортного знакомства с Сокотрой.",
  "الأصدقاء، العائلات، ومحبي الطبيعة والتصوير.": "Друзей, семей, любителей природы и фотографии.",
  "طعام": "Питание",
  "تخييم": "Кемпинг",
  "تنظيم كامل للرحلة": "Полная организация тура",
  "رحلة خاصة حسب الطلب": "Индивидуальный тур",
  "برنامج مرن يتم تصميمه حسب عدد الأشخاص، مستوى الراحة، وتاريخ السفر.": "Гибкая программа по числу гостей, уровню комфорта и датам.",
  "العائلات، الأزواج، والمجموعات الخاصة.": "Семей, пар и частных групп.",
  "جدول مخصص": "Индивидуальный маршрут",
  "مرونة في البرنامج": "Гибкая программа",
  "تنسيق خاص": "Индивидуальная координация",
  "دعم قبل وأثناء الرحلة": "Поддержка до и во время поездки",
  "اطلب برنامج خاص عبر واتساب": "Запросить индивидуальную программу",
  "أسعار واضحة": "Понятные цены",
  "أسعار برنامج سقطرى 7 أيام بدون تذاكر الطيران": "Цены программы Сокотра 7 дней без авиабилетов",
  "تبدأ الأسعار من 1,050$ للشخص للمجموعات. كلما زاد عدد المسافرين، انخفض السعر للفرد.": "Цены от 1 050$ за человека для групп. Чем больше группа, тем ниже цена на человека.",
  "رحلة خاصة": "Частный тур",
  "من 2,250$ للشخص": "От 2 250$ за человека",
  "خصوصية أكبر وجدول مرن يناسب الأزواج أو المسافرين الفرديين.": "Больше приватности и гибкий график для пар или одиночных путешественников.",
  "قروب صغير": "Малая группа",
  "من 1,650$ للشخص": "От 1 650$ за человека",
  "مناسب للأصدقاء والعائلات الصغيرة مع توازن بين الراحة والسعر.": "Подходит для друзей и небольших семей с балансом комфорта и цены.",
  "قروب اقتصادي": "Эконом-группа",
  "من 1,050$ للشخص": "От 1 050$ за человека",
  "أفضل خيار للحصول على أقل سعر للفرد ضمن مجموعة.": "Лучший вариант для минимальной цены на человека в группе.",
  "الأسعار بدون تذاكر الطيران، وقد تختلف حسب الموسم، توفر الخدمات، ونوع البرنامج. للحصول على عرض نهائي، تواصل معنا عبر واتساب.": "Цены без авиабилетов и могут меняться по сезону, доступности услуг и типу программы. Для финального предложения напишите в WhatsApp.",
  "احصل على عرض السعر عبر واتساب": "Получить цену в WhatsApp",
  "تفاصيل مهمة": "Важные детали",
  "ماذا يشمل برنامج الرحلة؟": "Что включено?",
  "التأشيرة": "Виза",
  "مرشد سياحي محلي": "Местный туристический гид",
  "التخييم أو الإقامة حسب البرنامج": "Кемпинг или проживание по программе",
  "لا يشمل": "Не включено",
  "تذاكر الطيران": "Авиабилеты",
  "المصاريف الشخصية": "Личные расходы",
  "أي خدمات إضافية غير مذكورة في العرض النهائي": "Дополнительные услуги, не указанные в финальном предложении",
  "ثقة وتجارب": "Доверие и опыт",
  "تجارب المسافرين معنا": "Отзывы путешественников",
  "قبل الحجز": "Перед бронированием",
  "ابدأ التواصل": "Начать связь",
  "اطلب عرض رحلتك": "Запросить предложение",
  "عبئ البيانات وسيتم تجهيز رسالة واتساب تلقائيًا لإكمال التواصل مع فريق الحجز.": "Заполните данные, и сообщение WhatsApp будет подготовлено автоматически.",
  "الاسم": "Имя",
  "رقم الواتساب": "Номер WhatsApp",
  "عدد الأشخاص": "Количество человек",
  "تاريخ السفر المتوقع": "Ожидаемая дата поездки",
  "نوع الرحلة": "Тип тура",
  "غير محدد": "Не определено",
  "ملاحظات": "Примечания",
  "إرسال الطلب عبر واتساب": "Отправить запрос в WhatsApp",
  "طلبات الحجز المحلية": "Локальные заявки",
  "تصدير CSV": "Экспорт CSV",
  "حذف كل الطلبات": "Удалить все заявки",
  "التاريخ": "Дата",
  "الحالة": "Статус",
  "هذه البيانات محفوظة محليًا على هذا الجهاز فقط وليست قاعدة بيانات سحابية.": "Эти данные сохраняются только на этом устройстве, не в облачной базе.",
  "تواصل": "Контакты",
  "روابط سريعة": "Быстрые ссылки",
  "اكتب اسمك": "Введите ваше имя",
  "مثال: 9715XXXXXXX": "Пример: 9715XXXXXXX",
  "مثال: 4": "Пример: 4",
  "اكتب أي تفاصيل إضافية": "Добавьте дополнительные детали"
  }
};

let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "ar";

const messages = {
  hero: `مرحبًا، أريد الاستفسار عن رحلة سقطرى 7 أيام.
عدد الأشخاص:
تاريخ السفر المتوقع:
هل الرحلة خاصة أم ضمن قروب؟`,
  quote: `مرحبًا، أريد عرض سعر لرحلة سقطرى 7 أيام بدون تذاكر الطيران.
عدد الأشخاص:
تاريخ السفر المتوقع:
هل الرحلة خاصة أم ضمن قروب؟`,
  "program-4": `مرحبًا، أريد الاستفسار عن رحلة سقطرى 4 أيام.
عدد الأشخاص:
تاريخ السفر المتوقع:`,
  "program-7": `مرحبًا، أريد الاستفسار عن رحلة سقطرى 7 أيام.
عدد الأشخاص:
تاريخ السفر المتوقع:
هل الرحلة خاصة أم ضمن قروب؟`,
  custom: `مرحبًا، أريد طلب برنامج خاص لرحلة سقطرى.
عدد الأشخاص:
تاريخ السفر المتوقع:
ملاحظات خاصة:`
};

function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
}

function getLeads() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch (error) {
    console.error("Unable to read saved leads:", error);
    return [];
  }
}

function saveLeads(leads) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

function addLead(lead) {
  const leads = getLeads();
  leads.unshift(lead);
  saveLeads(leads);
}

function renderLeads() {
  const tableBody = document.getElementById("leadsTable");
  if (!tableBody) return;

  const leads = getLeads();
  if (!leads.length) {
    tableBody.innerHTML = `<tr><td colspan="6">لا توجد طلبات محفوظة حتى الآن.</td></tr>`;
    return;
  }

  tableBody.innerHTML = leads.map((lead) => `
    <tr>
      <td>${escapeHtml(lead.name)}</td>
      <td>${escapeHtml(lead.phone)}</td>
      <td>${escapeHtml(lead.people)}</td>
      <td>${escapeHtml(lead.travelDate)}</td>
      <td>${escapeHtml(lead.tripType)}</td>
      <td>${escapeHtml(lead.status)}</td>
    </tr>
  `).join("");
}

function exportCsv() {
  const leads = getLeads();
  if (!leads.length) {
    alert("لا توجد طلبات لتصديرها.");
    return;
  }

  const headers = ["الاسم", "الواتساب", "عدد الأشخاص", "تاريخ السفر", "نوع الرحلة", "الحالة", "ملاحظات", "وقت الإنشاء"];
  const rows = leads.map((lead) => [
    lead.name,
    lead.phone,
    lead.people,
    lead.travelDate,
    lead.tripType,
    lead.status,
    lead.notes || "",
    lead.createdAt || ""
  ]);

  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");

  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "socotraairlines-leads.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function clearLeads() {
  const confirmed = confirm("هل أنت متأكد من حذف كل الطلبات المحلية؟");
  if (!confirmed) return;
  localStorage.removeItem(STORAGE_KEY);
  renderLeads();
}

function buildBookingMessage(lead) {
  return `مرحبًا، أريد طلب عرض لرحلة سقطرى.
الاسم: ${lead.name}
رقم واتساب العميل: ${lead.phone}
عدد الأشخاص: ${lead.people}
تاريخ السفر المتوقع: ${lead.travelDate}
نوع الرحلة: ${lead.tripType}
ملاحظات: ${lead.notes || "لا توجد"}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeText(value) {
  return String(value).replace(/\s+/g, " ").trim();
}

function translateValue(value, language) {
  if (language === "ar") return value;
  const dictionary = translations[language] || translations.en || {};
  return dictionary[normalizeText(value)] || value;
}

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem(LANGUAGE_KEY, language);
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("body *").forEach((element) => {
    if (element.closest("script, style") || element.id === "languageSelect") return;

    element.childNodes.forEach((node) => {
      if (node.nodeType !== Node.TEXT_NODE || !normalizeText(node.nodeValue)) return;
      if (!node.arText) node.arText = node.nodeValue;
      const original = node.arText;
      const translated = translateValue(original, language);
      node.nodeValue = original.replace(normalizeText(original), translated);
    });

    ["placeholder", "aria-label", "alt"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      if (!element.arAttributes) element.arAttributes = {};
      if (!element.arAttributes[attribute]) element.arAttributes[attribute] = element.getAttribute(attribute);
      element.setAttribute(attribute, translateValue(element.arAttributes[attribute], language));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("navLinks");
  const form = document.getElementById("bookingForm");
  const formMessage = document.getElementById("formMessage");
  const languageSelect = document.getElementById("languageSelect");

  if (languageSelect) {
    languageSelect.value = currentLanguage;
    languageSelect.addEventListener("change", () => applyLanguage(languageSelect.value));
    applyLanguage(currentLanguage);
  }

  document.querySelectorAll("[data-whatsapp]").forEach((button) => {
    button.addEventListener("click", () => {
      const messageKey = button.dataset.whatsapp;
      openWhatsApp(messages[messageKey] || messages.hero);
    });
  });

  navToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const lead = {
      id: Date.now(),
      name: document.getElementById("name").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      people: document.getElementById("people").value.trim(),
      travelDate: document.getElementById("travelDate").value,
      tripType: document.getElementById("tripType").value,
      notes: document.getElementById("notes").value.trim(),
      status: "جديد",
      createdAt: new Date().toISOString()
    };

    if (!lead.name || !lead.phone || !lead.people || !lead.travelDate) {
      formMessage.textContent = "يرجى تعبئة الاسم، رقم الواتساب، عدد الأشخاص، وتاريخ السفر.";
      formMessage.classList.remove("success");
      return;
    }

    addLead(lead);
    renderLeads();
    form.reset();
    formMessage.textContent = "تم تجهيز طلبك، وسيتم تحويلك إلى واتساب لإكمال التواصل.";
    formMessage.classList.add("success");
    openWhatsApp(buildBookingMessage(lead));
  });

  document.getElementById("exportCsv")?.addEventListener("click", exportCsv);
  document.getElementById("clearLeads")?.addEventListener("click", clearLeads);
  renderLeads();
});
