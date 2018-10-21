//Stores any devices built into the system.
var deviceLoaded = false;
var device = new Array(2);
var deviceName = new Array(2);
var currentDevice;
var currentState;
var pointlessStates = new Array();

//Enter default devices
deviceName[0] = "Xbox 360 DVD Controls";
device[0] = "{  \n\"notes\": \"The Xbox 360 DVD control system.\",  \n\"modelType\": \"Xbox 360 DVD Controls\",  \n\"buttons\": [\"Play/Pause\",\"Stop\",\"Forward\", \"Rewind\", \"Forward Skip\", \"Reverse Skip\"],  \n\"buttonsImageMap\": [[115,208,20],[179,207,20],[152,207,20],[206,207,20]],  \n\"stateNames\": [\"Playing\", \"Paused\", \"Stopped\",\"Fast Forward x1/2\",\"Fast Forward x2\",\"Fast Forward x4\",\"Fast Forward x8\",\"Fast Forward x16\",\"Fast Forward x32\",\"Rewind x1/2\",\"Rewind x2\",\"Rewind x4\",\"Rewind x8\",\"Rewind x16\",\"Rewind x32\"],  \n\"fsm\": [[1,2,4,10,0,0], [0,2,3,9,1,1], [0,2,2,2,0,0], [0,2,3,1,1,1], [0,2,5,0,0,0], [0,2,6,4,0,0], [0,2,7,5,0,0], [0,2,8,6,0,0], [0,2,8,7,0,0], [0,2,1,9,1,1], [0,2,0,11,0,0], [0,2,10,12,0,0], [0,2,11,13,0,0], [0,2,12,14,0,0], [0,2,13,14,0,0]],  \n\"startState\": 2,  \n\"state\": 2,  \n\"manual\": [\"dim\",\"dark\",\"bright\"],  \n\"action\": [\"press\",\"pressed\",\"pressing\"],  \n\"errors\": \"never\",  \n\"graphics\": \"images/Xbox360DVDStop.JPG\",  \n\"stateGraphics\": [\"images/Xbox360DVDPlay.JPG\", \"images/Xbox360DVDPause.JPG\", \"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDForwardHalf.JPG\", \"images/Xbox360DVDForward.JPG\", \"images/Xbox360DVDForward.JPG\", \"images/Xbox360DVDForward.JPG\", \"images/Xbox360DVDForward.JPG\", \"images/Xbox360DVDRewindHalf.JPG\", \"images/Xbox360DVDRewind.JPG\", \"images/Xbox360DVDRewind.JPG\", \"images/Xbox360DVDRewind.JPG\", \"images/Xbox360DVDRewind.JPG\", \"images/Xbox360DVDRewind.JPG\"]}";
deviceName[1] = "Xbox 360 DVD Remote";
device[1] = "{\"notes\": \"The Xbox 360 DVD control system using the DVD Remote.\",\n\"modelType\": \"Xbox 360 DVD Remote Controls\",\n\"buttons\": [\"Play\", \"Pause\", \"Stop\", \"Forward\", \"Rewind\", \"Forward Skip\", \"Reverse Skip\"],\n\"stateNames\": [\"Playing\", \"Paused\", \"Stopped\",\"Fast Forward x1/2\",\"Fast Forward x2\",\"Fast Forward x4\",\"Fast Forward x8\",\"Fast Forward x16\",\"Fast Forward x32\",\"Rewind x1/2\",\"Rewind x2\",\"Rewind x4\",\"Rewind x8\",\"Rewind x16\",\"Rewind x32\"],\n\"fsm\": [[0,1,2,4,10,0,0], [0,0,2,3,9,1,1], [0,0,2,2,2,2,2], [0,1,2,3,1,1,1], [0,1,2,5,0,0,0], [0,1,2,6,4,0,0], [0,1,2,7,5,0,0], [0,1,2,8,6,0,0], [0,1,2,8,7,0,0], [0,1,2,1,9,1,1], [0,1,2,0,11,0,0], [0,1,2,10,12,0,0], [0,1,2,11,13,0,0], [0,1,2,12,14,0,0], [0,1,2,13,14,0,0]],\n\"startState\": 2,\n \"state\": 1, \"action\": [\"press\",\"pressed\",\"pressing\"],\n\"errors\": \"never\",\"graphics\": \"images/Xbox360DVDStop.JPG\",\n\"stateGraphics\": [\"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDStop.JPG\", \"images/Xbox360DVDStop.JPG\"]}";
deviceName[2] = "Toshiba SD130E";
device[2] = "{ \n \"notes\": \"The Toshiba SD130E DVD Player with Remote.\",\n \"modelType\": \"Toshiba SD130E DVD Player\",\n   \"buttons\": [\"Play\",\"Pause\",\"Stop\",\"Forward\", \"Rewind\", \"Forward Skip\", \"Reverse Skip\"],\n \"stateNames\": [\"Playing\", \"Paused\", \"Stopped\",\"Fast Forward 1\",\"Fast Forward 2\",\"Fast Forward 3\",\"Fast Forward 4\",\"Rewind 1\",\"Rewind 2\",\"Rewind 3\",\"Rewind 4\"],\n   \"fsm\": [[0,1,2,3,7,0,0], [0,1,2,3,7,0,0], [0,2,2,2,2,2,2], [0,1,2,4,7,0,0], [0,1,2,5,7,0,0], [0,1,2,6,7,0,0], [0,1,2,3,7,0,0], [0,1,2,3,8,0,0], [0,1,2,3,9,0,0], [0,1,2,3,10,0,0], [0,1,2,3,7,0,0]],\n \"startState\": 2,\n \"state\": 2,\n \"errors\": \"never\",\n \"graphics\": \"images/ToshibaDVDPlayer.JPG\"\n }\n";
deviceName[3] = "Simple Light Switch";
device[3] = "{\n  \"notes\": \"Simple light bulb, with dim mode.\",\n  \"modelType\": \"Light bulb\",\n  \"buttons\": [\"Off\",\"On\",\"Dim\"],\n  \"buttonsImageMap\": [[88,27,15],[135,75,15],[157,100,15]],\n  \"stateNames\": [\"dim\",\"off\",\"on\"],\n  \"fsm\": [[1,2,0],[1,2,0],[1,2,0]],\n  \"startState\": 1,\n  \"state\": 1,\n  \"manual\": [\"dim\",\"dark\",\"bright\"],\n  \"action\": [\"press\",\"pressed\",\"pressing\"],\n  \"errors\": \"never\",\n  \"graphics\": \"images/torch.gif\",\n  \"stateGraphics\": [\"images/torchdim.gif\",\"images/torch.gif\",\"images/torchon.gif\"]\n}";
deviceName[4] = "Simple Microwave";
device[4] = "{\n  \"notes\": \"A basic microwave cooker, based on a Hyundai model.\",\n  \"modelType\": \"Simple microwave cooker\",\n  \"buttons\": [\"[Clock]\",\"[Quick defrost]\",\"[Time]\",\"[Clear]\",\"[Power]\"],\n  \"stateNames\": [\"Clock\",\"Quick defrost\",\"Timer 1\",\"Timer 2\",\"Power 1\",\"Power 2\"],\n  \"fsm\": [[0,1,2,0,0],[0,1,2,0,1],[0,1,3,0,4],[0,1,2,0,5],[0,1,3,0,4],[0,1,2,0,5]],\n  \"startState\": 0,\n  \"state\": 0,\n  \"action\": [\"touch\",\"touched\",\"touching\"],\n  \"manual\": [\"has the clock running\",\"doing quick defrost\",\"using Timer 1\",\"using Timer 2\",\"on Power level 1\",\"on Power level 2\"],\n  \"errors\": \"never\",\n  \"graphics\": \"images/microwave.gif\"\n}";

/*
 * This function handles anything required on load of the page.
 */
function load() {

    //Setup Intial Display
    document.getElementById("deviceSimulator").display = "none";

    //Enter default device model into system.
    document.getElementById("jsondevice").value = device[0];
    
    //Output example buttons
    document.getElementById("exampleLoadArea").innerHTML = "";
    for(currentExampleNo=0;currentExampleNo<device.length;currentExampleNo++)
    {
        document.getElementById("exampleLoadArea").innerHTML = document.getElementById("exampleLoadArea").innerHTML + " <input type=\"button\" value=\"" + deviceName[currentExampleNo] + "\" onclick=\"displayExample(" + currentExampleNo + ")\"/>";
    }

	//Setup display for first example.
	loadDevice();

}

/*
 * Loads one of the examples into the edit box.
 */
function displayExample(exampleNo) {

    document.getElementById("jsondevice").value = device[exampleNo];

    //Automatically loads the devices details.
	loadDevice();

}

/*
 * Loads the device to display it.
 */
function loadDevice() {
    
    currentDevice = eval("(" + document.getElementById("jsondevice").value + ")");
    
    displayDeviceSimulator();
    document.getElementById("deviceSimulator").style.display = "block";
    displayTransitionTable();
    document.getElementById("deviceTransitionTable").style.display = "block";
    displaySimpleUserManual();
    document.getElementById("deviceManual").style.display = "block";
    displayGraphStatistics();
    document.getElementById("deviceGraphStats").style.display = "block";
    displayDotDescription();
    document.getElementById("deviceDot").style.display = "block";
}

/*
 * Outputs the display for the currently built device.
 */
function displayDeviceSimulator() {

	//Displays device notes.
	document.getElementById("deviceDescription").innerHTML = currentDevice.notes;

    //Setups Image
    document.getElementById("deviceimage").src = currentDevice.graphics;
    document.getElementById("deviceimage").title = currentDevice.modelType;
    document.getElementById("deviceimage").alt = currentDevice.modelType;
    
	//Checks if the json definition has an image map for buttons.
	if (currentDevice.buttonsImageMap != null || currentDevice.buttonsImageMap == "undefined")
	{
		//Store up the imagemap ready for output.
		var im = "";

		for (currentButtonNo=0;currentButtonNo<currentDevice.buttonsImageMap.length;currentButtonNo++)
		{
			im = im + "<area shape=\"circle\" coords=\"" + currentDevice.buttonsImageMap[currentButtonNo][0] + "," + currentDevice.buttonsImageMap[currentButtonNo][1] + "," + currentDevice.buttonsImageMap[currentButtonNo][2] + "\" href=\"javascript:deviceAction(" + currentButtonNo + ")\" alt=\"" + currentDevice.buttons[currentButtonNo] + "\" />";
			
		}
		
		document.getElementById("devicemap").innerHTML = im;
	}
	else
	{
		document.getElementById("devicemap").innerHTML = "";
	}
	
    //Setups Display
    currentState = currentDevice.startState;
    document.getElementById("deviceCurrentState").innerHTML = currentDevice.stateNames[currentState];
    
    document.getElementById("deviceActionButtons").innerHTML = "Actions: ";
    
    
    //Setups Action Buttons
    for(currentButtonNo=0;currentButtonNo<currentDevice.buttons.length;currentButtonNo++)
    {
        document.getElementById("deviceActionButtons").innerHTML = document.getElementById("deviceActionButtons").innerHTML + "<input type=\"button\" onclick=\"deviceAction(" + currentButtonNo + ")\" value=\"" + currentDevice.buttons[currentButtonNo] + "\"/>";
    }

	//Checks if the json definition has an image map for buttons.
	if (currentDevice.buttonsImageMap != null || currentDevice.buttonsImageMap == "undefined")
	{
		document.getElementById("deviceActionButtons").innerHTML = document.getElementById("deviceActionButtons").innerHTML + "<br/>* You can also click the buttons in the photo!";
	}

	var images = null;

    if (currentDevice.stateGraphics != null && currentDevice.stateGraphics != undefined) {
		images = new Array(currentDevice.stateGraphics.length);

		//Preload all images to make it nice and snappy.
		for(currentImage=0;currentImage<currentDevice.stateGraphics.length;currentImage++)
		{
			images[currentImage] = new Image();
			images[currentImage].src = currentDevice.stateGraphics[currentImage];
		}
	}

}
//Handles actions for the device.
function deviceAction(action) {

    currentState = currentDevice.fsm[currentState][action];
    document.getElementById("deviceCurrentState").innerHTML = currentDevice.stateNames[currentState];
    
    if (currentDevice.stateGraphics != null && currentDevice.stateGraphics != undefined) {
        document.getElementById("deviceimage").src = currentDevice.stateGraphics[currentState];
    }

}

/*
 * Outputs the display for the transition table.
 */
function displayTransitionTable() {
    
    //Store up the transition table;
    var tt = "";
    
	//Setups table titles.
    tt = tt + "<table id=\"tt\" class=\"transitiontable\"><thead><tr><td>Actions</td><td>Current State</td><td>Next State</td></tr></thead><tbody>";
    
	//Stores if the current action only has one resulting next state.
	var isBoring = false;

	//Loops through each action.
	for (currentActionNo=0;currentActionNo<currentDevice.buttons.length;currentActionNo++)
	{

		//Holds the first next state value for comparison.
		var state;

		//First run through to check if the next state is always the same.
		for (currentStateNo=0;currentStateNo<currentDevice.fsm.length;currentStateNo++)
		{
			if (currentStateNo==0)
			{
				state = currentDevice.fsm[currentStateNo][currentActionNo];
			}
			else
			{
				if (state == currentDevice.fsm[currentStateNo][currentActionNo])
				{
					isBoring = true;
				}
				else
				{
					isBoring = false;
					break;
				}
			}
		}

		if (isBoring)
		{
			tt = tt + "<tr class=\"last\"><td>" + currentDevice.buttons[currentActionNo] + "</td><td><i>Any</i></td><td>" + currentDevice.stateNames[state] + "</td></tr>";
		}
		else
		{

			//First run through to check if the next state is always the same.
			for (currentStateNo=0;currentStateNo<currentDevice.fsm.length;currentStateNo++)
			{
				if (currentStateNo == 0)
				{
					tt = tt + "<tr><td rowspan=\"" + currentDevice.fsm.length + "\">" + currentDevice.buttons[currentActionNo] + "</td>";
				}
				else
				{
					tt = tt + "<tr>";
				}

				tt = tt + "<td>" + currentDevice.stateNames[currentStateNo] + "</td><td>" + currentDevice.stateNames[currentDevice.fsm[currentStateNo][currentActionNo]] + "</td>";
				tt = tt + "</tr>";
			}

		}

		//Reset Check Flag.
		isBoring = false;
	}

    //Closes the table.
    var tt = tt + "</tbody></table>";

	//Output table to page.
	document.getElementById("transitionTable").innerHTML = tt;

}

/*
 * Outputs the display for the Simple User Manual.
 */
function displaySimpleUserManual() {

    //Store up the manual for output at end.
    var manual = "";
    
    //Loops through all the possible states you can be in the device.
    for (currentStateNo=0;currentStateNo<currentDevice.fsm.length;currentStateNo++) {
    
        manual = manual + "<div>";
        manual = manual + "If the device is in the <b>" + currentDevice.stateNames[currentStateNo] + "</b> state then:";
        manual = manual + "<ul>";
        
        //Variable to check if the state is a deadend, in that you can't exit it.
        var isDeadEnd = true;
        
            for(currentActionNo=0;currentActionNo<currentDevice.fsm[currentStateNo].length;currentActionNo++) {
            
                //Checks if the state before and after the button press are the same, if they are then ditch it.
                if (currentDevice.fsm[currentStateNo][currentActionNo] != currentStateNo) {
                    manual  = manual + "<li>Pressing <b>" + currentDevice.buttons[currentActionNo] + "</b> will put the device in the <b>" + currentDevice.stateNames[currentDevice.fsm[currentStateNo][currentActionNo]] + "</b> state.</li>";
                    isDeadEnd = false;
                }
            
            }
        
        //Checks if it is a dead end state state.
        if (isDeadEnd == true) {
            manual = manual + "<li>This state is a dead end as it has no buttons that allow you to exit.</li>";
        }
        
        //Close of the manual cleanly.
        manual = manual + "</ul>";
        manual = manual + "</div>";
    
    }

    document.getElementById("manual").innerHTML = manual;

}

/*
 * Ouputs the display for the graph statistics section.
 */
function displayGraphStatistics() {
	
	/*
	 * First things first, check for pointless states and dead end states.
	 */
	var ps = "<ul>";
	var numberOfPointlessStates = 0;
	var des = "<ul>";
	var numberOfDeadEndStates = 0;
	var strong = "";
	var averagecost = "";
	for (currentStateNo=0;currentStateNo<currentDevice.fsm.length;currentStateNo++) {
		var numberOfExits = 0;
		
		for (currentActionNo=0;currentActionNo<currentDevice.buttons.length;currentActionNo++) {
		
			if (currentStateNo!=currentDevice.fsm[currentStateNo][currentActionNo]) {
				numberOfExits++;
			}
					 
		}
		if (numberOfExits == 1) {
			numberOfPointlessStates++;
			ps = ps + "<li>" + currentDevice.stateNames[currentStateNo] + "</li></ul>";
		}
		if (numberOfExits == 0) {
			numberOfDeadEndStates++;
			des = des + "<li>" + currentDevice.stateNames[currentStateNo] + "</li>";
		}

	}

	if (numberOfPointlessStates==0) {
		ps = "There are no obvious pointless states";
	}
	else
	{
		ps = ps + "</ul>";
	}
	if (numberOfDeadEndStates==0) {
		des = "There are no dead end states";
	}
	else
	{
		des = des + "</ul>";		
	}

	if (isStronglyConnected())
	{
		strong = "The graph that represents this device is strongly connected!";
		averagecost = "On average it takes " + calcaveragecost() + " minumum button presses to get from somewhere to anywhere else.";
	}
	else
	{
		strong = "The graph that represents this device is not strongly connected!";
		averagecost = "The device is not strongly connected, so it is not possible to get from any state to any other state.";
	}

	document.getElementById("pointlessStates").innerHTML = ps;
	document.getElementById("deadendStates").innerHTML = des;
	document.getElementById("stronglyconnected").innerHTML = strong;
	document.getElementById("averagecost").innerHTML = averagecost;

}


/*
 * Outpus the display for the dot fsm graph.
 */
function displayDotDescription() {

	//Setup display stuff in dot.
	var dot = "";
	dot = dot + "digraph \"" + currentDevice.modelType + "\" {<br/>";
	dot = dot + "&nbsp; dnode [shape=ellipse,fontname=Helvetica,fontsize=10];<br/>";
	dot = dot + "&nbsp; dedge [fontname=Helvetica,fontsize=10];<br/>";
	dot = dot + "&nbsp; start [label=\"\",style=filled,height=.1,shape=circle,color=black];<br/>";
	dot = dot + "&nbsp; start->" + currentDevice.startState + ";<br/>";
	
	//Setup the state labels;
	for (currentStateNo=0;currentStateNo<currentDevice.stateNames.length;currentStateNo++) 
	{
		dot = dot + "&nbsp; " + currentStateNo + " [label=\"" + currentDevice.stateNames[currentStateNo] + "\"];<br/>";
	}
	
	//Setup the state transitions.
	for (currentStateNo=0;currentStateNo<currentDevice.fsm.length;currentStateNo++) 
	{
		for (currentActionNo=0;currentActionNo<currentDevice.fsm[currentStateNo].length;currentActionNo++) 
		{	
			dot = dot + "&nbsp; " + currentStateNo + "->" + currentDevice.fsm[currentStateNo][currentActionNo] + " [label=\"" + currentDevice.buttons[currentActionNo] + "\"];<br/>";
		}
	}
	
	dot = dot + "}";

    document.getElementById("dotDescription").innerHTML = dot;	

}

/* 
 * Gnoming Code
 */

function runGnomeSimulation()
{

	//var currentDevice = eval("(" + document.getElementById("jsondevice").value + ")");

	var numberOfRuns =  document.getElementById("gnomenumberofruns").value;
	var results = new Array(currentDevice.fsm.length);

	for (var j = 0;j < currentDevice.fsm.length ;j++ )
	{
		results[j] = 0;

		for (var i = 0;i < numberOfRuns ;i++ )
		{
			results[j] = results[j] + runOneGnomeSimulation(-1,j);
		}

		results[j] = results[j] / numberOfRuns;
	}

	var	outputResults = "<h3>Average Actions To Reach End State</h3>";
	outputResults = outputResults + "<p>These results show how many random button presses it takes on average to reach a desired end state from random start states:</p>";
	outputResults = outputResults + "<p>";

	for (var i = 0;i < currentDevice.fsm.length ;i++ )
	{
		outputResults = outputResults + currentDevice.stateNames[i] + ": " + results[i] + "<br/>";
	}
	outputResults = outputResults + "</p>";

	document.getElementById("gnomeresults").innerHTML = outputResults;

}

function runOneGnomeSimulation(initialState, finalState)
{

	if (initialState == -1)
	{
		initialState = returnRandomState();
	}

	if (finalState == -1)
	{
		finalState = returnRandomState();
	}

	var numberOfActionsNeeded = 0;
	var currentState = initialState;
	var nextRandomAction;

	while (currentState != finalState)
	{
		nextRandomAction = returnRandomAction();
		currentState = currentDevice.fsm[currentState][nextRandomAction];
		numberOfActionsNeeded ++;

		if (numberOfActionsNeeded > 1000)
		{
			break;
		}
	}

	return numberOfActionsNeeded;

}

function returnRandomState() 
{
	return Math.floor(Math.random()*(currentDevice.fsm.length - 1))
}

function returnRandomAction() 
{
	return Math.floor(Math.random()*(currentDevice.buttons.length - 1))
}

/*
 * Shortest Path Code
 * Created by: Harold Thimbleby.
 * Updated by: James Gawn and Gareth Thomas.
 */
function shortestPaths(d)
{	
	var fsm = d.fsm;
	var n = fsm.length; // number of states
	var b = fsm[1].length; // number of buttons
	infinity = n+1; // no route can take this many steps!
	var matrix = new Array(n), via = new Array(n);
	for( var i = 0; i < n; i++ ) // build one-step matrix
	{	matrix[i] = new Array(n);
		via[i] = new Array(n);
		for( var j = 0; j < n; j++ )
			matrix[i][j] = infinity;
		for( var j = 0; j < b; j++ )
		{	matrix[i][fsm[i][j]] = 1;
			via[i][fsm[i][j]] = j; // to get from i to fsm[i][j], press button j
		}
		matrix[i][i] = 0;
		via[i][i] = i;
	}
	for( var k = 0; k < n; k++ )
		for( var i = 0; i < n; i++ )
			for( var j = 0; j < n; j++ )
			// replace ij with best of ij or ikj routes
			{	var viak = matrix[i][k] + matrix[k][j];
				if( viak < matrix[i][j] )
				{	matrix[i][j] = viak;
					via[i][j] = via[i][k];
				}
			}
		
	return matrix;
}

function isStronglyConnected() 
{
  var apsp = shortestPaths(currentDevice);
  
  // check the device is strongly connected
  var strong = true;
  for( var i = 0; i < currentDevice.fsm.length; i++ )
   for( var j = 0; j < currentDevice.fsm.length; j++ )
     if( apsp[i][j] > currentDevice.fsm.length )
     { strong = false;
       break;
     }

  return strong;
}

function calcaveragecost() {

  var apsp = shortestPaths(currentDevice);

  if( isStronglyConnected() )
  { var cost = 0, worst = 0;
    for( var i = 0; i < currentDevice.fsm.length; i++ )
      for( var j = 0; j < currentDevice.fsm.length; j++ )
      { var cij = apsp[i][j];
        cost = cost+cij; 
        if( cij > worst ) worst = cij;
      }

	return cost/(currentDevice.fsm.length*currentDevice.fsm.length-currentDevice.fsm.length);

  }
  else
	{
		return null;
	}

}