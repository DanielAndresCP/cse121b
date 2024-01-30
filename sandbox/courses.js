const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A'
        }
    ],
    changeEnrollment: function (sectionNum, add = true) {
        const sectionIndex = this.sections.findIndex((v) => v.sectionNum === sectionNum)

        if (sectionIndex >= 0) {
            if (add) {
                this.sections[sectionIndex].enrolled += 1
            } else {
                this.sections[sectionIndex].enrolled -= 1
            }
            displayCourseSections(this.sections)
        }
    }
};




function displayCourseInfo(course) {
    document.querySelector("#courseName").innerText = course.name
    document.querySelector("#courseCode").innerText = course.code
}

function displayCourseSections(sections) {
    const sectionsElement = document.querySelector("#sections")

    sectionsElement.innerHTML = ""

    const rows = []
    for (const section of sections) {
        const row = document.createElement("tr")

        const sectionNumEl = document.createElement("td")
        sectionNumEl.innerText = section.sectionNum
        row.appendChild(sectionNumEl)

        const roomNumEl = document.createElement("td")
        roomNumEl.innerText = section.roomNum
        row.appendChild(roomNumEl)

        const enrolledEl = document.createElement("td")
        enrolledEl.innerText = section.enrolled
        row.appendChild(enrolledEl)

        const daysEl = document.createElement("td")
        daysEl.innerText = section.days
        row.appendChild(daysEl)

        const instructorEl = document.createElement("td")
        instructorEl.innerText = section.instructor
        row.appendChild(instructorEl)

        rows.push(row)
    }

    rows.forEach((c) => { sectionsElement.appendChild(c) })
}

document.querySelector("#enrollStudent").addEventListener("click", (e) => {
    const sectionNum = Number(document.querySelector("#sectionNumber").value)
    aCourse.changeEnrollment(sectionNum)
})
document.querySelector("#dropStudent").addEventListener("click", (e) => {
    const sectionNum = Number(document.querySelector("#sectionNumber").value)
    aCourse.changeEnrollment(sectionNum, false)
})

displayCourseInfo(aCourse)
displayCourseSections(aCourse.sections)