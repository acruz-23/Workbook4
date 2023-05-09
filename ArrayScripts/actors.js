let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

function findAcademyMemberByID(memberArray, memberId) {
  let foundmatches = [];
  for (let i = 0; i < memberArray.length; i++) {
    if (memberArray[i].memID == memberId) {
      foundmatches.push(memberArray[i].name);
    }
  }
  return foundmatches;
}

function actorsInAtLeastXFIlms(memberArray, numOfFilms) {
  let foundmatches = [];
  for (let i = 0; i < memberArray.length; i++) {
    if (memberArray[i].films.length >= numOfFilms) {
      foundmatches.push(memberArray[i].name);
    }
  }
  return foundmatches;
}
function searchMembersNameThatStartsWithX(memberArray, name) {
  let foundmatches = [];
  for (let i = 0; i < memberArray.length; i++) {
    if (memberArray[i].name.indexOf(name) == 0) {
      foundmatches.push(memberArray[i].name);
    }
  }

  return foundmatches;
}

function searchMemberNameInMovieThatStartsWithX(memberArray, name) {
  let foundmatches = [];
  let nameString;
  for (let i = 0; i < memberArray.length; i++) {
    let filmArray = memberArray[i].films;
    for (let j = 0; j < filmArray.length; j++) {
      nameString = filmArray[j];
      if (nameString[0] == name) {
        foundmatches.push(memberArray[i].name);
        break;
      }
    }
  }

  return foundmatches;
}

console.log(findAcademyMemberByID(academyMembers, 187));
console.log(actorsInAtLeastXFIlms(academyMembers, 3));
console.log(searchMembersNameThatStartsWithX(academyMembers, "Bob"));
console.log(searchMemberNameInMovieThatStartsWithX(academyMembers, "A"));
