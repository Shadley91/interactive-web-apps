// scripts.js

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T20:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T20:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

const createHtml = (athlete) => {
  const { firstName, surname, id, races } = athlete;
  const latestRace = races[races.length - 1];

  const fragment = document.createDocumentFragment();

  const title = document.createElement("h2");
  title.textContent = id;
  fragment.appendChild(title);

  const list = document.createElement("dl");

  const fullNameDt = document.createElement("dt");
  fullNameDt.textContent = "Full Name";
  const fullNameDd = document.createElement("dd");
  fullNameDd.textContent = `${firstName} ${surname}`;
  list.appendChild(fullNameDt);
  list.appendChild(fullNameDd);

  const racesDt = document.createElement("dt");
  racesDt.textContent = "Number of Races";
  const racesDd = document.createElement("dd");
  racesDd.textContent = races.length.toString();
  list.appendChild(racesDt);
  list.appendChild(racesDd);

  const dateDt = document.createElement("dt");
  dateDt.textContent = "Date of Most Recent Race";
  const dateDd = document.createElement("dd");
  const raceDate = new Date(latestRace.date);
  const day = raceDate.getDate();
  const month = MONTHS[raceDate.getMonth()];
  const year = raceDate.getFullYear();
  dateDd.textContent = `${day} ${month} ${year}`;
  list.appendChild(dateDt);
  list.appendChild(dateDd);

  const durationDt = document.createElement("dt");
  durationDt.textContent = "Duration of Most Recent Race";
  const durationDd = document.createElement("dd");
  const total = latestRace.time.reduce((acc, curr) => acc + curr, 0);
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  durationDd.textContent = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;
  list.appendChild(durationDt);
  list.appendChild(durationDd);

  fragment.appendChild(list);

  return fragment;
};

const { NM372, SV782 } = data.response.data;
document.querySelector("#NM372").appendChild(createHtml(NM372));
document.querySelector("#SV782").appendChild(createHtml(SV782));
