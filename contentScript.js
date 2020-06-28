function decodeTime(time) {
  let decoded = [];
  switch (time[0]) {
    case "2":
      decoded.push("Seg");
      break;

    case "3":
      decoded.push("Ter");
      break;

    case "4":
      decoded.push("Qua");
      break;

    case "5":
      decoded.push("Qui");
      break;

    case "6":
      decoded.push("Sex");
      break;

    case "7":
      decoded.push("Sab");
      break;

    default:
      decoded.push("");
      break;
  }

  let timePeriod = time[1];
  switch (timePeriod) {
    case "M":
      decoded.push("Manhã");
      break;

    case "T":
      decoded.push("Tarde");
      break;

    case "N":
      decoded.push("Noite");
      break;

    default:
      decoded.push("");
      break;
  }

  let timeSlots = time.slice(2);
  let timeStart;
  let timeEnd;
  switch (timeSlots[0]) {
    case "1":
      timeStart = "08h00";
      if (timePeriod === "T") timeStart = "13h00";
      if (timePeriod === "N") timeStart = "19h00";
      break;

    case "2":
      timeStart = "09h00";
      if (timePeriod === "T") timeStart = "14h00";
      if (timePeriod === "N") timeStart = "20h00";
      break;

    case "3":
      timeStart = "10h00";
      if (timePeriod === "T") timeStart = "15h00";
      if (timePeriod === "N") timeStart = "20h50";
      break;

    case "4":
      timeStart = "11h00";
      if (timePeriod === "T") timeStart = "16h00";
      if (timePeriod === "N") timeStart = "21h40";
      break;

    case "5":
      timeStart = "12h00";
      if (timePeriod === "T") timeStart = "17h00";
      if (timePeriod === "N") timeStart = "";
      break;

    case "6":
      timeStart = "13h00";
      if (timePeriod === "T") timeStart = "18h00";
      if (timePeriod === "N") timeStart = "";
      break;

    case "7":
      timeStart = "14h00";
      if (timePeriod === "T") timeStart = "19h00";
      if (timePeriod === "N") timeStart = "";
      break;

    default:
      timeStart = "";
      break;
  }
  switch (timeSlots[timeSlots.length - 1]) {
    case "1":
      timeEnd = "08h50";
      if (timePeriod === "T") timeEnd = "13h50";
      if (timePeriod === "N") timeEnd = "19h50";
      break;

    case "2":
      timeEnd = "09h50";
      if (timePeriod === "T") timeEnd = "14h50";
      if (timePeriod === "N") timeEnd = "20h40";
      break;

    case "3":
      timeEnd = "10h50";
      if (timePeriod === "T") timeEnd = "15h50";
      if (timePeriod === "N") timeEnd = "21h30";
      break;

    case "4":
      timeEnd = "11h50";
      if (timePeriod === "T") timeEnd = "16h50";
      if (timePeriod === "N") timeEnd = "22h30";
      break;

    case "5":
      timeEnd = "12h50";
      if (timePeriod === "T") timeEnd = "17h50";
      if (timePeriod === "N") timeEnd = "";
      break;

    case "6":
      timeEnd = "13h50";
      if (timePeriod === "T") timeEnd = "18h50";
      if (timePeriod === "N") timeEnd = "";
      break;

    case "7":
      timeEnd = "14h50";
      if (timePeriod === "T") timeEnd = "19h50";
      if (timePeriod === "N") timeEnd = "";
      break;

    default:
      timeEnd = "";
      break;
  }
  decoded.push(timeStart);
  decoded.push(timeEnd);
  return decoded;
}

function replaceTimes() {
  let html = document.getElementsByTagName("body")[0].innerHTML;
  var timeRegExp = /\d[MTN]\d+/gi;
  let times = html.match(timeRegExp);
  times.forEach(function (value) {
    let decoded = decodeTime(value);
    html = html.replace(
      value,
      `${decoded[0]} ${decoded[2]} às ${decoded[3]}<br/>`
    );
  });
  html = html.replace(
    /<th width="[^"]+">Horário<\/th>/,
    `<th width="20%">Horário<\/th>`
  );
  document.getElementsByTagName("body")[0].innerHTML = html;
}

// let button = document.createElement("button");
// button.innerText = "Replace";
// button.onclick = replaceTimes;
// button.style.top = "0px";
// button.style.left = "0px";
// button.style.display = "block";
// button.style.position = "fixed";
// document.getElementsByTagName("body")[0].append(button);

replaceTimes();
