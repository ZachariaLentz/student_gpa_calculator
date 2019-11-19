const state = {
  students: [
    {
      id: 1,
      name: "Annie",
      math: "A",
      history: "A",
      science: "A",
      english: "A",
      gpa: ""
    },
    {
      id: 2,
      name: "Harold",
      math: "A",
      history: "A",
      science: "D",
      english: "B",
      gpa: ""
    },
    {
      id: 3,
      name: "Fran",
      math: "B+",
      history: "B+",
      science: "B",
      english: "A",
      gpa: ""
    },
    {
      id: 4,
      name: "Gertrude",
      math: "A",
      history: "C",
      science: "A",
      english: "C",
      gpa: ""
    },
    {
      id: 5,
      name: "Frank",
      math: "A",
      history: "B+",
      science: "B",
      english: "B",
      gpa: ""
    }
  ],
  ascending: false,
  sortColumn: "",
  highestGPA: null,
  lowestGPA: null
};

const getters = {
  allStudents: state => state.students,
  allColumns: state => {
    return Object.keys(state.students[0]);
  },
  sortColumn: state => state.sortColumn,
  ascending: state => state.ascending,
  gpaHigh: state => state.highestGPA,
  gpaLow: state => state.lowestGPA
};

const actions = {
  addStudent: ({ commit }, studentData) => {
    const studentCopy = state.students
    studentCopy.sort((a,b)=>(a.id>b.id ? 1 : -1))
    const lastId = studentCopy[studentCopy.length-1].id
    const student = {
      id: lastId + 1,
      name: studentData.name,
      math: studentData.math,
      history: studentData.history,
      science: studentData.science,
      english: studentData.english,
      gpa: ""
    }
    commit('addStudent', student)
  },
  sortTable: ({ commit }, col) => {
    commit("setSortTable", col);
  },
  calculateGPA: ({ commit }) => {
    const grades = {
      "A": 4.0,
      "A-": 3.7,
      "B+": 3.33,
      "B": 3.0,
      "B-": 2.7,
      "C+": 2.3,
      "C": 2.0,
      "C-": 1.7,
      "D+": 1.3,
      "D": 1.0,
      "D-": 0.7,
      "F": 0
    };
    state.students.map((student, i) => {
      const math = student.math;
      const history = student.history;
      const science = student.science;
      const english = student.english;
      const creditHours = 3;
      const calculatedGPA = (
        (grades[math] * creditHours +
          grades[history] * creditHours +
          grades[science] * creditHours +
          grades[english] * creditHours) /
        12
      ).toFixed(2);
      commit("setGPAs", { i, calculatedGPA });
    });
  },
  highestLowest: ({ commit }) => {
    let studentCopy = state.students
    studentCopy.sort((a,b)=>(a.gpa>b.gpa) ? -1 : 1)
    const highest =studentCopy[0].gpa
    const lowest = studentCopy[studentCopy.length-1].gpa
    commit("setHighestLowest", {highest, lowest});
  }
};

const mutations = {
  addStudent: (state, student) => {
    state.students.unshift(student)
  },
  setGPAs: (state, { i, calculatedGPA }) => {
    state.students[i].gpa = calculatedGPA;
  },
  setHighestLowest: (state, {highest, lowest}) => {
    state.highestGPA = highest
    state.lowestGPA = lowest
  },
  setSortTable: (state, col) => {
    if (state.sortColumn === col) {
      state.ascending = !state.ascending;
    } else {
      state.ascending = true;
      state.sortColumn = col;
    }
    state.students.sort((a, b) => {
      if (a[col] > b[col]) {
        return state.ascending ? 1 : -1;
      } else if (a[col] < b[col]) {
        return state.ascending ? -1 : 1;
      }
      return 0;
    });
  }
};

export default { state, getters, actions, mutations };
