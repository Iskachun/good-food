function checkAnswers() {
    const correctAnswers = document.querySelectorAll('input[value="correct"]:checked');
    const totalQuestions = document.querySelectorAll('.question').length;
    const resultDiv = document.getElementById('result');

    if (correctAnswers.length === totalQuestions) {
        resultDiv.textContent = `Great job! You answered all ${totalQuestions} questions correctly.`;
        resultDiv.className = 'result correct';
    } else {
        resultDiv.textContent = `You got ${correctAnswers.length} out of ${totalQuestions} questions correct. Try again!`;
        resultDiv.className = 'result wrong';
    }

    resultDiv.style.display = 'block';
}




/* DIAGRAMS, MADE WITH CHART.JS */
/* THERE IS GUARANTEED A BETTER WAY OF DOING THIS BUT... I TRIED */


const ctx = document.getElementById('myChart');

const data = {
    labels: [0,1,2,3,4,5,6,7,8,9,10],
    datasets: [
        {
            label: "16-18",
            data: [1,0,1,0,1,0,1,0,0,1,0],
            backgroundColor: "rgba(255, 99, 132, 0.8)"
        },
        {
            label: "18-30",
            data: [0,0,0,0,0,0,1,2,1,0,0],
            backgroundColor: "rgba(54, 162, 235, 0.8)"
        },
        {
            label: ">= 50",
            data: [0,0,0,0,0,0,0,1,1,0,0],
            backgroundColor: "rgba(75, 192, 192, 0.8)"
        }
    ]
};

const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'How often do you think about what you eat?',
            font: { size: 20 }
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
    scales: {
        x: {
            stacked: true,
            title: {
                display: true,
                text: 'Scale from 0 to 10'
            }
        },
        y: {
            stacked: true,
            title: {
                display: true,
                text: 'Number of responses'
            }
        }
    }
};

const stackedBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});




const ctx2 = document.getElementById('myChart2');

const data2 = {
    labels: [0,1,2,3,4,5,6,7,8,9,10],
    datasets: [
        {
            label: "16-18",
            data: [0,0,0,1,1,1,0,2,0,0,0],
            backgroundColor: "rgba(255, 99, 132, 0.8)"
        },
        {
            label: "18-30",
            data: [0,0,0,2,0,1,0,1,0,0,0],
            backgroundColor: "rgba(54, 162, 235, 0.8)"
        },
        {
            label: ">= 50",
            data: [0,0,0,1,0,0,0,0,1,0,0],
            backgroundColor: "rgba(75, 192, 192, 0.8)"
        }
    ]
};

const options2 = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'How often do you think about whether your food choices affect the environment?',
            font: { size: 20 }
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
    scales: {
        x: {
            stacked: true,
            title: {
                display: true,
                text: 'Scale from 0 to 10'
            }
        },
        y: {
            stacked: true,
            title: {
                display: true,
                text: 'Number of responses'
            }
        }
    }
};

const stackedBarChart2 = new Chart(ctx2, {
    type: 'bar',
    data: data2,
    options: options2
});




const ctx3 = document.getElementById('myChart3');

const data3 = {
    labels: [0,1,2,3,4,5,6,7,8,9,10],
    datasets: [
        {
            label: "16-18",
            data: [1,2,0,1,1,0,0,0,0,0,0],
            backgroundColor: "rgba(255, 99, 132, 0.8)"
        },
        {
            label: "18-30",
            data: [1,2,0,1,0,0,0,0,0,0,0],
            backgroundColor: "rgba(54, 162, 235, 0.8)"
        },
        {
            label: ">= 50",
            data: [0,0,0,1,1,0,0,0,0,0,0],
            backgroundColor: "rgba(75, 192, 192, 0.8)"
        }
    ]
};

const options3 = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Do you throw away a lot of food?',
            font: { size: 20 }
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
    scales: {
        x: {
            stacked: true,
            title: {
                display: true,
                text: 'Scale from 0 to 10'
            }
        },
        y: {
            stacked: true,
            title: {
                display: true,
                text: 'Number of responses'
            }
        }
    }
};

const stackedBarChart3 = new Chart(ctx3, {
    type: 'bar',
    data: data3,
    options: options3
});





const ctx4 = document.getElementById('myChart4');

const data4 = {
    labels: ['Try to reuse as much as possible', "Depends on what I'm making", 'Buy new ingredients'],
    datasets: [
        {
            label: "16-18",
            data: [3,2,0],
            backgroundColor: "rgba(255, 99, 132, 0.8)"
        },
        {
            label: "18-30",
            data: [4,0,0],
            backgroundColor: "rgba(54, 162, 235, 0.8)"
        },
        {
            label: ">= 50",
            data: [1, 0, 1],
            backgroundColor: "rgba(75, 192, 192, 0.8)"
        }
    ]
};

const options4 = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'If you are going to cook, would you use leftovers or buy new ingredients?',
            font: { size: 20 }
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
    scales: {
        x: {
            stacked: true,
            title: {
                display: true,
                text: ''
            }
        },
        y: {
            stacked: true,
            title: {
                display: true,
                text: ''
            }
        }
    }
};

const stackedBarChart4 = new Chart(ctx4, {
    type: 'bar',
    data: data4,
    options: options4
});





const ctx5 = document.getElementById('myChart5');

const data5 = {
    labels: ['Throw away', 'Try to use them', 'Use them anyway'],
    datasets: [
        {
            label: "16-18",
            data: [1,4,0],
            backgroundColor: "rgba(255, 99, 132, 0.8)"
        },
        {
            label: "18-30",
            data: [0,4,0],
            backgroundColor: "rgba(54, 162, 235, 0.8)"
        },
        {
            label: ">= 50",
            data: [0,2, 0],
            backgroundColor: "rgba(75, 192, 192, 0.8)"
        }
    ]
};

const options5 = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'What do you do if food items expire?',
            font: { size: 20 }
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
    scales: {
        x: {
            stacked: true,
            title: {
                display: true,
                text: ''
            }
        },
        y: {
            stacked: true,
            title: {
                display: true,
                text: 'Number of responses'
            }
        }
    }
};

const stackedBarChart5 = new Chart(ctx5, {
    type: 'bar',
    data: data5,
    options: options5
});




const ctx6 = document.getElementById('myChart6');

const data6 = {
    labels: [0,1,2,3,4,5,6,7,8,9,10],
    datasets: [
        {
            label: "16-18",
            data: [1,0,0,0,1,1,0,0,2,0,0],
            backgroundColor: "rgba(255, 99, 132, 0.8)"
        },
        {
            label: "18-30",
            data: [0,0,1,2,0,0,1,0,0,0,0],
            backgroundColor: "rgba(54, 162, 235, 0.8)"
        },
        {
            label: ">= 50",
            data: [0,0,0,0,0,0,1,0,1,0,0],
            backgroundColor: "rgba(75, 192, 192, 0.8)"
        }
    ]
};

const options6 = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'How often do you buy locally produced or organic food?',
            font: { size: 20 }
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
    scales: {
        x: {
            stacked: true,
            title: {
                display: true,
                text: 'Scale from 0 to 10'
            }
        },
        y: {
            stacked: true,
            title: {
                display: true,
                text: 'Number of responses'
            }
        }
    }
};

const stackedBarChart6 = new Chart(ctx6, {
    type: 'bar',
    data: data6,
    options: options6
});








const ctx7 = document.getElementById('myChart7');

const data7 = {
    labels: ['Recycle everything I can', 'Try to recycle as much as possible', 'Throw it away'],
    datasets: [
        {
            label: "16-18",
            data: [3,2,0],
            backgroundColor: "rgba(255, 99, 132, 0.8)"
        },
        {
            label: "18-30",
            data: [3,1,0],
            backgroundColor: "rgba(54, 162, 235, 0.8)"
        },
        {
            label: ">= 50",
            data: [0,0,2],
            backgroundColor: "rgba(75, 192, 192, 0.8)"
        }
    ]
};

const options7 = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Do you recycle?',
            font: { size: 20 }
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
    scales: {
        x: {
            stacked: true,
            title: {
                display: true,
                text: ''
            }
        },
        y: {
            stacked: true,
            title: {
                display: true,
                text: 'Number of responses'
            }
        }
    }
};

const stackedBarChart7 = new Chart(ctx7, {
    type: 'bar',
    data: data7,
    options: options7
});


