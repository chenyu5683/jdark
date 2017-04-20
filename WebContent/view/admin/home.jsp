<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@include file="/assets/inc.jsp"%>
</head>

<body>
	${username }

	<div id="chart"></div>
</body>
<script>
var blogComments = [ {
    "blog": "My blog",
    "day": "1",
    "value": 3,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "2",
    "value": 7,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "3",
    "value": 12,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "4",
    "value": 15,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "5",
    "value": 6,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "6",
    "value": 23,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "7",
    "value": 12,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "8",
    "value": 10,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "9",
    "value": 17,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "10",
    "value": 13,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "11",
    "value": 14,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "12",
    "value": 15,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "13",
    "value": 3,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "14",
    "value": 6,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "15",
    "value": 23,
    "userColor": "#565656"
}, {
    "blog": "My blog",
    "day": "16",
    "value": 25,
    "userColor": "#565656"
}, {
    "blog": "My blog",
    "day": "17",
    "value": 21,
    "userColor": "#565656"
}, {
    "blog": "My blog",
    "day": "18",
    "value": 18,
    "userColor": "#565656"
}, {
    "blog": "My blog",
    "day": "19",
    "value": 17,
    "userColor": "#565656"
}, {
    "blog": "My blog",
    "day": "20",
    "value": 16,
    "userColor": "#565656"
}, {
    "blog": "My blog",
    "day": "21",
    "value": 11,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "22",
    "value": 3,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "23",
    "value": 8,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "24",
    "value": 5,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "25",
    "value": 4,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "26",
    "value": 1,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "27",
    "value": 7,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "28",
    "value": 6,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "29",
    "value": 3,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "30",
    "value": 6,
    "userColor": "#ffd600"
} ];

function createChart() {
$("#chart").kendoChart({
    dataSource: {
        data: blogComments
    },
    title: {
        align: "left",
        text: "Comments per day"
    },
    legend: {
        visible: false
    },
    seriesDefaults: {
        type: "column",
        labels: {
            visible: true,
            background: "transparent"
        }
    },
    series: [{
        field: "value",
        colorField: "userColor"
    }],
    valueAxis: {
        max: 28,
        majorGridLines: {
            visible: false
        },
        visible: false
    },
    categoryAxis: {
        field: "day",
        majorGridLines: {
            visible: false
        },
        line: {
            visible: false
        }
    }
});
}

$(document).ready(createChart);
</script>
</html>