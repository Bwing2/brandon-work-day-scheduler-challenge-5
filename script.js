$("#currentDay").text(dayjs().format("[Today is] dddd, MMMM D[th]"));

$(".time-block").each(function () {
  var currentHour = dayjs().hour();
  var hourNumber = $(this).attr("id").split("-")[1];

  if (currentHour < hourNumber) {
    $(this).addClass("future");
  } else if (currentHour == hourNumber) {
    $(this).addClass("present");
  } else if (currentHour > hourNumber) {
    $(this).addClass("past");
  }
});

$(".saveBtn").on("click", function () {
  var saveAlert = $("#saveAlert");
  saveAlert.text("Event Saved!");

  var textInput = $(this).siblings(".description").val();
  var hourId = $(this).parent().attr("id");
  localStorage.setItem(hourId, textInput);

  setTimeout(function () {
    var textGone = saveAlert.text("");
    clearInterval(textGone);
  }, 1000);
});

for (let i = 9; i <= 17; i++) {
  var data = localStorage.getItem(`hour-${i}`);
  $(`#hour-${i} textarea`).val(data);
}

$(".clearBtn").on("click", function () {
  var clearAlert = $("#clearAlert");
  clearAlert.text("All Events Cleared!");

  localStorage.clear();

  setTimeout(function () {
    var eventsGone = clearAlert.text("");
    clearInterval(eventsGone);
    location.reload();
  }, 1000);
});
