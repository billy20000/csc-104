//function
function calculateCGPA() {
	let totalCredits = 0;
	let totalGradePoints = 0;
	let numCourses = parseInt(prompt("Enter the number of courses: "));
	
	for (let i = 0; i < numCourses; i++) {
		let courseCredits = parseFloat(prompt("Enter credits for course " + (i+1) + ":"));
		let courseGrade = prompt("Enter grade for course " + (i+1) + ":");
		
		let gradePoints = 0;
		switch (courseGrade) {
			case "A":
				gradePoints = 4.0;
				break;
			case "B":
				gradePoints = 3.0;
				break;
			case "C":
				gradePoints = 2.0;
				break;
			case "D":
				gradePoints = 1.0;
				break;
			default:
				alert("Invalid grade. Please enter A, B, C, or D, F.");
				return;
		}
		
		totalCredits += parseFloat(courseCredits);
         // Convert to number
		totalGradePoints += parseFloat(courseCredits) * gradePoints; // Convert to number
	}
	
	let cgpa = totalGradePoints / totalCredits;
	alert("Your CGPA is: " + cgpa.toFixed(2));
}

calculateCGPA();
