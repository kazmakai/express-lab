const students = [
    {student: 'Fred', grades: true},
    {student: 'James', grades: false},
    {student: 'Michelle', grades: false}
  ];

  module.exports = {
    getAll: function() {
        return students;
    }
  };