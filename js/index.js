$(document).ready(function () {
    var studentsTable = $('#students-table').DataTable({
        "data": data.students,
        "columns": [
            { "data": "id" },
            { "data": "first_name" },
            { "data": "last_name" },
            { "data": "gender" },
            { "data": "english" },
            { "data": "maths" },
            { "data": "science" }
        ]
    });

    $('#students-table tbody').on('click', 'tr', function () {
        var student = studentsTable.row(this).data();
        showChart(student);
    });
});

function showChart(student) {
    var ctx = document.getElementById('studentChart').getContext('2d');
    var studentChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['English', 'Maths', 'Science'],
            datasets: [{
                label: 'Marks',
                data: [student.english, student.maths, student.science],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Name of Student: ' + student.first_name + ' ' + student.last_name,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMax:100
                    }
                }]
            }
        }
    });
    $('#studentChartModel').modal('show');
}