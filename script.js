function calculateSum() {
  // گرفتن مقدار ورودی‌ها
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // محاسبه مجموع و نمایش نتیجه
  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = num1 + num2;
    document.getElementById("result").textContent = "Sum: " + sum;
  } else {
    document.getElementById("result").textContent =
      "Please enter valid numbers.";
  }
}
