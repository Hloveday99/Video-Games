import Senators from "./data/senators";

export const republicans = () => {
  return Senators.filter((element) => element.party === "Republican");
};

export const democrats = () => {
  return Senators.filter((element) => element.party === "Democrat");
};

export const independents = () => {
  return Senators.filter((element) => element.party === "Independent");
};

export const males = () => {
  return Senators.filter((element) => element.person.gender === "male");
};

export const females = () => {
  return Senators.filter((element) => element.person.gender === "female");
};

export const byState = (state = 'UT') => {
  return Senators.filter((element) => element.state === "UT");
};

export const mapping = () => {
  return Senators.map((element) => {
    return {
      firstName: element.person.firstName,
      lastName: element.person.lastname,
      party: element.party,
      gender: element.person.gender,
    };
  });
};

export const reducedCount = () => {
  return Senators.reduce(
    (accumulator, element) => {

      // or instead of if statements accumulator[element.party.tolowerCase()]++

      if (element.party === "Democrat") {
        accumulator.democrat++
      }

      if (element.party === "Republican") {
        accumulator.republican++
      }

      if (element.party === "Independent") {
        accumulator.independent++
      }

      return accumulator;
    },
    {
      republican: 0,
      democrat: 0,
      independent: 0,
    }
  );
};

const REPLACE_ME_WITH_CODE = false;
