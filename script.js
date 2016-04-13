//This function does this
var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').ClassName;
	//changing class name
	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	}	
	else {
		document.getElementById('cool').className = 'cool';
	
	}
}

var sayMyName = function(name){
	alert('My Name is: '+name)
	}


var car = {"word_wrap": "auto",
				make:'VW',
				type: 'Polo',
				color: 'blue',
				isTurnedOn: false,
				numberOFWheels: 4,
				seats: ['seat 1',
						'seat 2',
						'seat 3',
						'seat 4'
					],
			turnOn: function () {
					this.isTurnedOn = true;
			},
			
			fly: function () {
				alert('fly');
			},
			switchCar: function (isOn) {
				console.log('turnCar '+isOn)
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn - false;
				}
			}
		};
	console.log('Hello There Friends!');
