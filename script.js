const WHATSAPP_NUMBER = "971509555151";
const STORAGE_KEY = "socotraairlines_leads";

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

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("navLinks");
  const form = document.getElementById("bookingForm");
  const formMessage = document.getElementById("formMessage");

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
