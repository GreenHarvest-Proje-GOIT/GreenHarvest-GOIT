async function loadHTML(id, file) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Dosya yüklenemedi: ${file}`);
    const content = await response.text();
    document.getElementById(id).innerHTML = content;
  } catch (error) {
    console.error(error);
  }
}

loadHTML("header", "./HTML-PARTS/header.html");
loadHTML("section-1", "./HTML-PARTS/section-1.html");
loadHTML("discount", "./HTML-PARTS/discount.html");
loadHTML("vegetables", "./HTML-PARTS/vegetables.html");
loadHTML("reviews", "./HTML-PARTS/reviews.html");
loadHTML("your-order", "./HTML-PARTS/your-order.html");
loadHTML("footer", "./HTML-PARTS/footer.html");
