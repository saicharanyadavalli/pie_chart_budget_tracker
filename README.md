# 📟 Budget Tracker with Pie Chart Visualization

This is a simple and interactive **Budget Tracker** web application built with **HTML**, **CSS**, and **JavaScript**. Users can input expense categories and corresponding amounts, and instantly see a visual breakdown of their expenses via a **Pie Chart** using Chart.js.

---

## 🚀 Features

* 🔢 **Add Multiple Expenses at Once:**
  Input categories and amounts as comma-separated values (e.g., `Food, Transport, Books` and `20, 50, 30`).

* ⚖️ **Input Validation:**
  Automatically **raises an error** if the number of categories and amounts do not match. This ensures data consistency before rendering the chart.

* ➕ **Combines Duplicate Categories:**
  If the same category appears multiple times (e.g., `Food, Food`), their amounts are **added together** in the final result.

* 📊 **Live Pie Chart Visualization:**
  Shows a **responsive pie chart** that updates in real time whenever new expenses are added.

* 🧠 **Clean and Minimal UI:**
  Designed with a **modern and responsive layout** to look great on both desktop and mobile devices.

---

## 💠 Tech Stack

* **HTML** – Structure and layout
* **CSS** – Styling and responsive design
* **JavaScript** – Logic and DOM manipulation
* **Chart.js** – Dynamic chart rendering

---

## ✅ How to Use

1. **Clone or Download** this repository.
2. Open `index.html` in any modern browser.
3. Enter comma-separated **categories** and **amounts**.
4. Click **"Add Expenses"**.
5. View your expenses listed and visualized in a pie chart.

---

## ⚠️ Validations and Error Handling

* The app checks if the **number of categories equals the number of amounts**.
* Ignores any category or amount that is empty, invalid, or not a positive number.
* Alerts the user if **no valid expense** is found or if the inputs are mismatched.

---

## 📌 Example Input

* Categories: `Food, Books, Food`
* Amounts: `50, 30, 20`

> Result:
>
> * Food: 70
> * Books: 30

The pie chart reflects the combined values accordingly.

---

