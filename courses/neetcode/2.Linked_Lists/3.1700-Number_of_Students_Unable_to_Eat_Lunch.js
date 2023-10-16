/**
 * 1700. Number of Students Unable to Eat Lunch
 * https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 */

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    while (students.length) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
        }
        else if (!students.includes(sandwiches[0]))
            return students.length;
        else students.push(students.shift());
    }
    return 0;
};