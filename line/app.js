'use strict'

	var ctx = document.getElementById("myChart");
	// Step 3. Create a data object
	var data = {
	    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	    datasets: [
	        {
	            label: "The First Dataset",
							backgroundColor: "rgba(153,0,76,0.2)",
	            borderColor: "rgba(153,0,76,1)", // magenta
	  					data: [100, 34, 21, 56, 23, 90, 40]
	        },
	        {
	            label: "The Second dataset",
	            backgroundColor: "rgba(76,0,153,0.2)",
	            borderColor: "rgba(76,0,153,1)",
	            data: [28, 48, 40, 19, 86, 27, 90]
	        }
	    ]
	};

	// Step 2. Get the context of the canvas element we want to select

	var myNewChart = Chart.Line(ctx, {
		data: data,
		options: {
			responsive: false
		}
	});
