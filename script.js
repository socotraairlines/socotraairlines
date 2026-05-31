const WHATSAPP_NUMBER = "971509555151";
const STORAGE_KEY = "socotraairlines_leads";
const LANGUAGE_KEY = "socotraairlines_language";

const translations = {
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
  return translations[normalizeText(value)] || value;
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
