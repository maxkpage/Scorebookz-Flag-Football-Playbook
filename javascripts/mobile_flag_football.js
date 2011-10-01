$(document).ready(function(){
	
	//Get DOM Objects
	var $plays = $('#plays li');
	
	//Formation Options
	var $seven_man_formation_options = $('#seven_man_formation_options');
	var $seven_man_formation_cancel = $seven_man_formation_options.find('.cancel');
	var $seven_formation_choices = 	$seven_man_formation_options.find('.formation_choice');
	
	//Formations
	var $seven_a = $('#seven_a');
	var $seven_b = $('#seven_b');
	var $seven_c = $('#seven_c');
	var $seven_d = $('#seven_d');
	
	//Current formation
	var $current_formation = $seven_a;
	
	//Set variables
	stroke_color = "#000";
	stroke_width = 2;
	
	//Get Canvas variables
	if (Modernizr.canvas) {
		//Canvas size: 320 x 243px
	  	var drawingCanvas = document.getElementById('routes');
		var context = drawingCanvas.getContext('2d');
		context.strokeStyle = stroke_color;
		context.lineWidth = stroke_width;
	}
	
	//Create formation coordinates to draw routes from
	var seven_a_coord = {
		blue: 	{x: 73, y: 99},
		left: 	{x: 128, y: 99},
		right: 	{x: 171, y: 99},
		red: 	{x: 226, y: 99},
		qb: 	{x: 151, y: 132},
		orange: {x: 190, y: 124}
	}
	
	var seven_b_coord = {
		blue: 	{x: 73, y: 99},
		left: 	{x: 128, y: 99},
		right: 	{x: 171, y: 99},
		red: 	{x: 249, y: 99},
		qb: 	{x: 151, y: 132},
		orange: {x: 222, y: 99}
	}
	
	var seven_c_coord = {
		blue: 	{x: 73, y: 99},
		left: 	{x: 173, y: 99},
		right: 	{x: 216, y: 99},
		red: 	{x: 96, y: 99},
		qb: 	{x: 195, y: 132},
		orange: {x: 118, y: 99}
	}
	
	var seven_d_coord = {
		blue: 	{x: 73, y: 99},
		left: 	{x: 150, y: 99},
		right: 	{x: 194, y: 99},
		red: 	{x: 96, y: 99},
		qb: 	{x: 172, y: 120},
		orange: {x: 172, y: 135}
	}
	
	//Drawing Different Routes
	
	//Arrow at end of route
	function drawArrow(start_x, start_y, left_x, left_y, right_x, right_y) {
		context.beginPath();
		context.moveTo(start_x, start_y);
		context.lineTo(left_x, left_y);
		context.lineTo(right_x, right_y);
		context.fillStyle = "#000";
		context.fill();
	}
	
	//Posts
	function drawDeepPostRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 50);
		context.lineTo(start_x + 40, start_y - 80);
		context.stroke();
		drawArrow(start_x + 40, start_y - 80, start_x + 30, start_y - 76, start_x + 36, start_y - 72);
	}
	
	function drawDeepPostLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 50);
		context.lineTo(start_x - 40, start_y - 80);
		context.stroke();
		drawArrow(start_x - 40, start_y - 80, start_x - 36, start_y - 72, start_x - 28, start_y - 77);
	}
	
	function drawPostRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 30);
		context.lineTo(start_x + 40, start_y - 60);
		context.stroke();
		drawArrow(start_x + 40, start_y - 60, start_x + 30, start_y - 56, start_x + 36, start_y - 52);
	}
	
	function drawPostLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 30);
		context.lineTo(start_x - 40, start_y - 60);
		context.stroke();
		drawArrow(start_x - 40, start_y - 60, start_x - 36, start_y - 52, start_x - 28, start_y - 57);
	}
	
	//Zig Zags
	function drawDeepZigZagRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 40);
		context.lineTo(start_x - 15, start_y - 55);
		context.lineTo(start_x + 40, start_y - 80);
		context.stroke();
		drawArrow(start_x + 40, start_y - 80, start_x + 30, start_y - 79, start_x + 36, start_y - 73);
	}
	
	function drawDeepZigZagLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 40);
		context.lineTo(start_x + 15, start_y - 55);
		context.lineTo(start_x - 40, start_y - 80);
		context.stroke();
		drawArrow(start_x - 40, start_y - 80, start_x - 34, start_y - 74, start_x - 29, start_y - 80);
	}
	
	function drawZigZagRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 10);
		context.lineTo(start_x - 15, start_y - 25);
		context.lineTo(start_x + 40, start_y - 50);
		context.stroke();
		drawArrow(start_x + 40, start_y - 50, start_x + 30, start_y - 50, start_x + 37, start_y - 43);
	}
	
	function drawZigZagLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 10);
		context.lineTo(start_x + 15, start_y - 25);
		context.lineTo(start_x - 40, start_y - 50);
		context.stroke();
		drawArrow(start_x - 40, start_y - 50, start_x - 34, start_y - 44, start_x - 29, start_y - 50);
	}
	
	// Slants
	function drawSlantLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x - 20, start_y - 15);
		context.stroke();
		drawArrow(start_x - 20, start_y - 15, start_x - 19	, start_y - 8, start_x - 9, start_y - 14);
	}
	
	function drawSlantRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x + 20, start_y - 15);
		context.stroke();
		drawArrow(start_x + 20, start_y - 15, start_x + 10, start_y - 14, start_x + 19, start_y - 8);
	}
	function drawDeepSlantLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x - 40, start_y - 45);
		context.stroke();
		drawArrow(start_x - 40, start_y - 45, start_x - 40	, start_y - 37, start_x - 28, start_y - 43);
	}
	
	function drawDeepSlantRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x + 40, start_y - 45);
		context.stroke();
		drawArrow(start_x + 40, start_y - 45, start_x + 29, start_y - 41, start_x + 40	, start_y - 37);
	}
	
	// Outs
	function drawOutRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 25);
		context.lineTo(start_x + 60, start_y - 25);
		context.stroke();
		drawArrow(start_x + 60, start_y - 25, start_x + 53, start_y - 28, start_x + 53, start_y - 21);
	}
	
	function drawDeepOutRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 55);
		context.lineTo(start_x + 60, start_y - 55);
		context.stroke();
		drawArrow(start_x + 60, start_y - 55, start_x + 53, start_y - 58, start_x + 53, start_y - 51);
	}
	
	function drawOutLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 25);
		context.lineTo(start_x - 60, start_y - 25);
		context.stroke();
		drawArrow(start_x - 60, start_y - 25, start_x - 53, start_y - 28, start_x - 53, start_y - 21);
	}
	
	function drawDeepOutLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 55);
		context.lineTo(start_x - 60, start_y - 55);
		context.stroke();
		drawArrow(start_x - 60, start_y - 55, start_x - 53, start_y - 58, start_x - 53, start_y - 51);
	}
	
	// Up and Outs
	function drawUpAndOutLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 15);
		context.lineTo(start_x - 40, start_y - 15);
		context.lineTo(start_x - 40, start_y - 45);
		context.stroke();
		drawArrow(start_x - 40, start_y - 45, start_x - 43, start_y - 40, start_x - 36, start_y - 40);
	}
	
	function drawDeepUpAndOutLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 50);
		context.lineTo(start_x - 40, start_y - 50);
		context.lineTo(start_x - 40, start_y - 70);
		context.stroke();
		drawArrow(start_x - 40, start_y - 75, start_x - 43, start_y - 70, start_x - 36, start_y - 70);
	}
	function drawUpAndOutRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 15);
		context.lineTo(start_x + 40, start_y - 15);
		context.lineTo(start_x + 40, start_y - 45);
		context.stroke();
		drawArrow(start_x + 40, start_y - 45, start_x + 43, start_y - 40, start_x + 36, start_y - 40);
	}
	
	function drawDeepUpAndOutRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 50);
		context.lineTo(start_x + 40, start_y - 50);
		context.lineTo(start_x + 40, start_y - 70);
		context.stroke();
		drawArrow(start_x + 40, start_y - 70, start_x + 43, start_y - 65, start_x + 36, start_y - 65);
	}
	
	//Fly 
	function drawFly(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 55);
		context.stroke();
		drawArrow(start_x, start_y - 55, start_x - 4, start_y - 50, start_x + 4, start_y - 50);
	}
	
	//Stutter Fly 
	function drawStutterFly(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 9);
		context.lineTo(start_x + 5, start_y - 12);
		context.lineTo(start_x - 5, start_y - 15);
		context.lineTo(start_x + 5, start_y - 18);
		context.lineTo(start_x, start_y - 21);
		context.lineTo(start_x, start_y - 60);
		context.stroke();
		drawArrow(start_x, start_y - 60, start_x - 4, start_y - 55, start_x + 4, start_y - 55);
	}
	
	// Blocks
	function drawBlockLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x - 5, start_y - 10);
		context.stroke();
		
		context.beginPath();
		context.moveTo(start_x - 10, start_y - 7);
		context.lineTo(start_x, start_y - 13);
		context.stroke();
	}
	
	function drawBlockRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x + 5, start_y - 10);
		context.stroke();
		
		context.beginPath();
		context.moveTo(start_x + 10, start_y - 7);
		context.lineTo(start_x, start_y - 13);
		context.stroke();
	}
	function drawDeepBlockLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x - 20, start_y - 45);
		context.stroke();
		
		context.beginPath();
		context.moveTo(start_x - 25, start_y - 42);
		context.lineTo(start_x - 15, start_y - 48);
		context.stroke();
	}
	
	function drawDeepBlockRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x + 20, start_y - 45);
		context.stroke();
		
		context.beginPath();
		context.moveTo(start_x + 25, start_y - 42);
		context.lineTo(start_x + 15, start_y - 48);
		context.stroke();
	}
	
	//Button Hooks
	function drawDeepButtonHookLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.arc(start_x - 7, start_y - 60, 7,0, Math.PI, true);
		context.lineTo(start_x - 14, start_y - 55);
		context.stroke();
		drawArrow(start_x - 14, start_y - 55, start_x - 18, start_y - 60, start_x - 8, start_y - 60);
	}
	
	function drawDeepButtonHookRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 60);
		context.moveTo(start_x + 14, start_y - 60);
		context.arc(start_x + 7, start_y - 60, 7, 0, Math.PI, true);
		context.moveTo(start_x + 14, start_y - 60);
		context.lineTo(start_x + 14, start_y - 55);
		context.stroke();
		drawArrow(start_x + 14, start_y - 55, start_x + 18, start_y - 60, start_x + 8, start_y - 60);
	}
	
	function drawButtonHookLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.arc(start_x - 7, start_y - 30, 7,0, Math.PI, true);
		context.lineTo(start_x - 14, start_y - 25);
		context.stroke();
		drawArrow(start_x - 14, start_y - 25, start_x - 18, start_y - 30, start_x - 8, start_y - 30);
	}
	
	function drawButtonHookRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 30);
		context.moveTo(start_x + 14, start_y - 30);
		context.arc(start_x + 7, start_y - 30, 7, 0, Math.PI, true);
		context.moveTo(start_x + 14, start_y - 30);
		context.lineTo(start_x + 14, start_y - 25);
		context.stroke();
		drawArrow(start_x + 14, start_y - 25, start_x + 18, start_y - 30, start_x + 8, start_y - 30);
	}
	
	//Circles
	function drawDeepCircleRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.arc(start_x - 7, start_y - 50, 7,0, Math.PI/2, true);
		context.lineTo(start_x + 30, start_y - 43);
		context.stroke();
		drawArrow(start_x + 30, start_y - 43, start_x + 23, start_y - 46, start_x + 23, start_y - 39);
	}
	function drawCircleRight(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.arc(start_x - 7, start_y - 20, 7,0, Math.PI/2, true);
		context.lineTo(start_x + 30, start_y - 13);
		context.stroke();
		drawArrow(start_x + 30, start_y - 13, start_x + 23, start_y - 16, start_x + 23, start_y - 9);
	}
	function drawDeepCircleLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 50);
		context.moveTo(start_x, start_y - 50);
		context.arc(start_x + 7, start_y - 50, 7, Math.PI, 1.2, false);
		context.moveTo(start_x + 10, start_y - 43);
		context.lineTo(start_x - 30, start_y - 43);
		context.stroke();
		drawArrow(start_x - 30, start_y - 43, start_x - 22, start_y - 46, start_x - 22, start_y - 39);
	}
	function drawCircleLeft(context, start_x, start_y) {
		context.moveTo(start_x, start_y);
		context.lineTo(start_x, start_y - 20);
		context.moveTo(start_x, start_y - 20);
		context.arc(start_x + 7, start_y - 20, 7, Math.PI, 1.2, false);
		context.moveTo(start_x + 10, start_y - 13);
		context.lineTo(start_x - 30, start_y - 13);
		context.stroke();
		drawArrow(start_x - 30, start_y - 13, start_x - 22, start_y - 16, start_x - 22, start_y - 9);
	}
	
	//Sweeps
	function drawSweepRight(context, start_x, start_y) {
		start_x += 8;
		start_y += 5;
		context.moveTo(start_x, start_y);
		context.bezierCurveTo(start_x + 5, start_y + 5, start_x + 30, start_y + 5, start_x + 30, start_y - 10);
		context.stroke();
		drawArrow(start_x + 30, start_y - 10, start_x + 25, start_y - 7, start_x + 34 , start_y - 5);
	}
	function drawWideSweepRight(context, start_x, start_y) {
		start_x += 8;
		start_y += 5;
		context.moveTo(start_x, start_y);
		context.bezierCurveTo(start_x + 5, start_y + 10, start_x + 60, start_y, start_x + 60, start_y - 10);
		context.stroke();
		drawArrow(start_x + 60, start_y - 10, start_x + 53, start_y - 8, start_x + 62 , start_y - 4);
	}
	function drawSuperSweepRight(context, start_x, start_y) {
		start_x += 8;
		start_y += 5;
		context.moveTo(start_x, start_y);
		context.bezierCurveTo(start_x + 5, start_y + 10, start_x + 70, start_y + 10, start_x + 80, start_y);
		context.stroke();
		drawArrow(start_x + 80, start_y, start_x + 72, start_y, start_x + 80, start_y + 6);
	}
	function drawSweepLeft(context, start_x, start_y) {
		start_x -= 8;
		start_y += 5;
		context.moveTo(start_x, start_y);
		context.bezierCurveTo(start_x - 5, start_y + 5, start_x - 30, start_y + 5, start_x - 30, start_y - 10);
		context.stroke();
		drawArrow(start_x - 30, start_y - 10, start_x - 25, start_y - 7, start_x - 35 , start_y - 5);
	}
	function drawWideSweepLeft(context, start_x, start_y) {
		start_x -= 8;
		start_y += 5;
		context.moveTo(start_x, start_y);
		context.bezierCurveTo(start_x - 5, start_y + 10, start_x - 60, start_y, start_x - 60, start_y - 10);
		context.stroke();
		drawArrow(start_x - 60, start_y - 10, start_x - 53, start_y - 8, start_x - 62 , start_y - 4);
	}
	function drawSuperSweepLeft(context, start_x, start_y) {
		start_x -= 8;
		start_y += 5;
		context.moveTo(start_x, start_y);
		context.bezierCurveTo(start_x - 5, start_y + 10, start_x - 70, start_y + 10, start_x - 80, start_y);
		context.stroke();
		drawArrow(start_x - 80, start_y, start_x - 71, start_y, start_x - 80, start_y + 6);
	}
	
	//Plays Objects
	function seven_a_plays(play_number) {
		
		context.strokeStyle = stroke_color;
		context.lineWidth = stroke_width;
		
		if (play_number === "1") {
			drawDeepZigZagRight(context, seven_a_coord.blue.x, seven_a_coord.blue.y);
			drawDeepPostRight(context, seven_a_coord.left.x, seven_a_coord.left.y);
			drawDeepPostRight(context, seven_a_coord.orange.x, seven_a_coord.orange.y);
			drawSlantLeft(context, seven_a_coord.red.x, seven_a_coord.red.y);
		}
		else if (play_number === "2") {
			drawDeepOutRight(context, seven_a_coord.blue.x, seven_a_coord.blue.y);
			drawCircleLeft(context, seven_a_coord.left.x, seven_a_coord.left.y);
			drawPostRight(context, seven_a_coord.orange.x, seven_a_coord.orange.y);
			drawDeepPostLeft(context, seven_a_coord.red.x, seven_a_coord.red.y);
		}
		else if (play_number === "3") {
			drawDeepPostRight(context, seven_a_coord.blue.x, seven_a_coord.blue.y);
			drawOutLeft(context, seven_a_coord.right.x, seven_a_coord.right.y);
			drawPostRight(context, seven_a_coord.orange.x, seven_a_coord.orange.y);
			drawDeepSlantLeft(context, seven_a_coord.red.x, seven_a_coord.red.y);
		}
		else if (play_number === "4") {
			drawButtonHookLeft(context, seven_a_coord.blue.x, seven_a_coord.blue.y);
			drawSlantLeft(context, seven_a_coord.left.x, seven_a_coord.left.y);
			drawDeepButtonHookLeft(context, seven_a_coord.orange.x, seven_a_coord.orange.y);
			drawCircleRight(context, seven_a_coord.red.x, seven_a_coord.red.y);
		}
		else if (play_number === "5") {
			drawUpAndOutLeft(context, seven_a_coord.blue.x, seven_a_coord.blue.y);
			drawFly(context, seven_a_coord.left.x, seven_a_coord.left.y);
			drawPostLeft(context, seven_a_coord.orange.x, seven_a_coord.orange.y);
			drawFly(context, seven_a_coord.red.x, seven_a_coord.red.y);
		}
		else if (play_number === "6") {
			drawDeepBlockLeft(context, seven_a_coord.blue.x, seven_a_coord.blue.y);
			drawBlockLeft(context, seven_a_coord.right.x, seven_a_coord.right.y);
			drawWideSweepRight(context, seven_a_coord.orange.x, seven_a_coord.orange.y);
			drawDeepBlockLeft(context, seven_a_coord.red.x, seven_a_coord.red.y);
		}
		else if (play_number === "7") {
			drawDeepBlockLeft(context, seven_a_coord.blue.x, seven_a_coord.blue.y);
			drawBlockLeft(context, seven_a_coord.right.x, seven_a_coord.right.y);
			drawWideSweepRight(context, seven_a_coord.orange.x, seven_a_coord.orange.y);
			drawSuperSweepRight(context, seven_a_coord.qb.x, seven_a_coord.qb.y);
			drawDeepBlockLeft(context, seven_a_coord.red.x, seven_a_coord.red.y);
		}
	}
	
	function seven_b_plays(play_number) {
		
		context.strokeStyle = stroke_color;
		context.lineWidth = stroke_width;
		
		if (play_number === "1") {
			drawZigZagRight(context, seven_b_coord.blue.x, seven_b_coord.blue.y);
			drawCircleLeft(context, seven_b_coord.left.x, seven_b_coord.left.y);
			drawPostRight(context, seven_b_coord.orange.x, seven_b_coord.orange.y);
			drawSlantLeft(context, seven_b_coord.red.x, seven_b_coord.red.y);
		}
		else if (play_number === "2") {
			drawDeepSlantRight(context, seven_b_coord.blue.x, seven_b_coord.blue.y);
			drawOutLeft(context, seven_b_coord.left.x, seven_b_coord.left.y);
			drawDeepSlantLeft(context, seven_b_coord.orange.x, seven_b_coord.orange.y);
			drawButtonHookRight(context, seven_b_coord.red.x, seven_b_coord.red.y);
		}
		else if (play_number === "3") {
			drawDeepUpAndOutRight(context, seven_b_coord.blue.x, seven_b_coord.blue.y);
			drawCircleLeft(context, seven_b_coord.right.x, seven_b_coord.right.y);
			drawButtonHookLeft(context, seven_b_coord.orange.x, seven_b_coord.orange.y);
			drawDeepPostLeft(context, seven_b_coord.red.x, seven_b_coord.red.y);
		}
		else if (play_number === "4") {
			drawButtonHookLeft(context, seven_b_coord.blue.x, seven_b_coord.blue.y);
			drawSlantRight(context, seven_b_coord.left.x, seven_b_coord.left.y);
			drawCircleRight(context, seven_b_coord.orange.x, seven_b_coord.orange.y);
			drawDeepButtonHookLeft(context, seven_b_coord.red.x, seven_b_coord.red.y);
		}
		else if (play_number === "5") {
			drawZigZagRight(context, seven_b_coord.blue.x, seven_b_coord.blue.y);
			drawOutLeft(context, seven_b_coord.left.x, seven_b_coord.left.y);
			drawDeepSlantRight(context, seven_b_coord.orange.x, seven_b_coord.orange.y);
			drawDeepSlantLeft(context, seven_b_coord.red.x, seven_b_coord.red.y);
		}
		else if (play_number === "6") {
			drawDeepCircleRight(context, seven_b_coord.blue.x, seven_b_coord.blue.y);
			drawStutterFly(context, seven_b_coord.left.x, seven_b_coord.left.y);
			drawWideSweepRight(context, seven_b_coord.orange.x, seven_b_coord.orange.y);
			drawSlantLeft(context, seven_b_coord.red.x, seven_b_coord.red.y);
		}
		else if (play_number === "7") {
			drawDeepBlockLeft(context, seven_b_coord.blue.x, seven_b_coord.blue.y);
			drawBlockLeft(context, seven_b_coord.right.x, seven_b_coord.right.y);
			drawDeepBlockLeft(context, seven_b_coord.orange.x, seven_b_coord.orange.y);
			drawWideSweepRight(context, seven_b_coord.qb.x, seven_b_coord.qb.y);
			drawDeepBlockLeft(context, seven_b_coord.red.x, seven_b_coord.red.y);
		}
	}
	
	function seven_c_plays(play_number) {
		
		context.strokeStyle = stroke_color;
		context.lineWidth = stroke_width;
		
		if (play_number === "1") {
			drawFly(context, seven_c_coord.blue.x, seven_c_coord.blue.y);
			drawDeepSlantRight(context, seven_c_coord.right.x, seven_c_coord.right.y);
			drawCircleLeft(context, seven_c_coord.orange.x, seven_c_coord.orange.y);
			drawZigZagRight(context, seven_c_coord.red.x, seven_c_coord.red.y);
		}
		else if (play_number === "2") {
			drawDeepCircleRight(context, seven_c_coord.blue.x, seven_c_coord.blue.y);
			drawOutRight(context, seven_c_coord.left.x, seven_c_coord.left.y);
			drawCircleLeft(context, seven_c_coord.orange.x, seven_c_coord.orange.y);
			drawPostRight(context, seven_c_coord.red.x, seven_c_coord.red.y);
		}
		else if (play_number === "3") {
			drawDeepPostRight(context, seven_c_coord.blue.x, seven_c_coord.blue.y);
			drawCircleLeft(context, seven_c_coord.right.x, seven_c_coord.right.y);
			drawUpAndOutLeft(context, seven_c_coord.orange.x, seven_c_coord.orange.y);
			drawPostRight(context, seven_c_coord.red.x, seven_c_coord.red.y);
		}
		else if (play_number === "4") {
			drawButtonHookLeft(context, seven_c_coord.blue.x, seven_c_coord.blue.y);
			drawPostRight(context, seven_c_coord.left.x, seven_c_coord.left.y);
			drawOutRight(context, seven_c_coord.orange.x, seven_c_coord.orange.y);
			drawDeepOutRight(context, seven_c_coord.red.x, seven_c_coord.red.y);
		}
		else if (play_number === "5") {
			drawDeepPostRight(context, seven_c_coord.blue.x, seven_c_coord.blue.y);
			drawCircleLeft(context, seven_c_coord.right.x, seven_c_coord.right.y);
			drawDeepOutRight(context, seven_c_coord.orange.x, seven_c_coord.orange.y);
			drawCircleLeft(context, seven_c_coord.red.x, seven_c_coord.red.y);
		}
		else if (play_number === "6") {
			drawDeepBlockRight(context, seven_c_coord.blue.x, seven_c_coord.blue.y);
			drawBlockRight(context, seven_c_coord.left.x, seven_c_coord.left.y);
			drawBlockRight(context, seven_c_coord.orange.x, seven_c_coord.orange.y);
			drawDeepBlockRight(context, seven_c_coord.red.x, seven_c_coord.red.y);
			drawWideSweepLeft(context, seven_c_coord.qb.x, seven_c_coord.qb.y);
		}
		else if (play_number === "7") {
			drawDeepBlockLeft(context, seven_c_coord.blue.x, seven_c_coord.blue.y);
			drawBlockLeft(context, seven_c_coord.right.x, seven_c_coord.right.y);
			drawDeepBlockLeft(context, seven_c_coord.orange.x, seven_c_coord.orange.y);
			drawSweepRight(context, seven_c_coord.qb.x, seven_c_coord.qb.y);
			drawDeepBlockLeft(context, seven_c_coord.red.x, seven_c_coord.red.y);
		}
	}
	
	function seven_d_plays(play_number) {
		
		context.strokeStyle = stroke_color;
		context.lineWidth = stroke_width;
		
		if (play_number === "1") {
			drawDeepZigZagRight(context, seven_d_coord.blue.x, seven_d_coord.blue.y);
			drawDeepCircleRight(context, seven_d_coord.right.x, seven_d_coord.right.y);
			drawDeepSlantRight(context, seven_d_coord.orange.x, seven_d_coord.orange.y);
			drawOutLeft(context, seven_d_coord.red.x, seven_d_coord.red.y);
		}
		else if (play_number === "2") {
			drawDeepOutRight(context, seven_d_coord.blue.x, seven_d_coord.blue.y);
			drawPostRight(context, seven_d_coord.right.x, seven_d_coord.right.y);
			drawDeepSlantLeft(context, seven_d_coord.orange.x, seven_d_coord.orange.y);
			drawOutRight(context, seven_d_coord.red.x, seven_d_coord.red.y);
		}
		else if (play_number === "3") {
			drawDeepPostRight(context, seven_d_coord.blue.x, seven_d_coord.blue.y);
			drawFly(context, seven_d_coord.right.x, seven_d_coord.right.y);
			drawDeepOutRight(context, seven_d_coord.orange.x, seven_d_coord.orange.y);
			drawUpAndOutLeft(context, seven_d_coord.red.x, seven_d_coord.red.y);
		}
		else if (play_number === "4") {
			drawButtonHookLeft(context, seven_d_coord.blue.x, seven_d_coord.blue.y);
			drawCircleRight(context, seven_d_coord.left.x, seven_d_coord.left.y);
			drawDeepSlantRight(context, seven_d_coord.orange.x, seven_d_coord.orange.y);
			drawDeepButtonHookRight(context, seven_d_coord.red.x, seven_d_coord.red.y);
		}
		else if (play_number === "5") {
			drawDeepSlantRight(context, seven_d_coord.blue.x, seven_d_coord.blue.y);
			drawSlantRight(context, seven_d_coord.left.x, seven_d_coord.left.y);
			drawWideSweepLeft(context, seven_d_coord.orange.x, seven_d_coord.orange.y);
			drawSlantRight(context, seven_d_coord.red.x, seven_d_coord.red.y);
		}
		else if (play_number === "6") {
			drawBlockRight(context, seven_d_coord.blue.x, seven_d_coord.blue.y);
			drawBlockRight(context, seven_d_coord.left.x, seven_d_coord.left.y);
			drawSuperSweepLeft(context, seven_d_coord.orange.x, seven_d_coord.orange.y);
			drawBlockRight(context, seven_d_coord.red.x, seven_d_coord.red.y);
			drawWideSweepLeft(context, seven_d_coord.qb.x, seven_d_coord.qb.y);
		}
		else if (play_number === "7") {
			drawBlockRight(context, seven_d_coord.blue.x, seven_d_coord.blue.y);
			drawBlockLeft(context, seven_d_coord.right.x, seven_d_coord.right.y);
			drawDeepSlantLeft(context, seven_d_coord.orange.x, seven_d_coord.orange.y);
			drawWideSweepRight(context, seven_d_coord.qb.x, seven_d_coord.qb.y);
			drawBlockRight(context, seven_d_coord.red.x, seven_d_coord.red.y);
		}
	}
	
	//Removes and adds selected color for play numbers
	function make_selected(selection) {
		$plays.each(function() {
			$this = $(this);

			if ($this.text() === selection && $this.prop('class').indexOf("selected") === -1) {
				$this.addClass("selected");
			}
			else if ($this.text() !== selection && $this.prop('class').indexOf("selected") !== -1) {
				$this.removeClass("selected");
			}
		});
	}
	
	//Formation option listener
	$seven_formation_choices.each(function() {
		$(this).bind('vclick', function(){
			var choice = $(this).attr("id").substr(-1);
			
			if(choice !== $current_formation.attr("id").substr(-1)) {
				
				//Clear the canvas of the previous play
				context.fillStyle = "#000";
				context.fillRect(0, 0, context.canvas.width, context.canvas.height);
				context.canvas.width = context.canvas.width;
				context.beginPath();
				
				if (choice === "a") {
					$current_formation.hide();
					$current_formation = $seven_a;
					$current_formation.show();
					seven_a_plays("1");
					make_selected("1");
				}
				else if (choice === "b") {
					$current_formation.hide();
					$current_formation = $seven_b;
					$current_formation.show();
					seven_b_plays("1");
					make_selected("1");
				}
				else if (choice === "c") {
					$current_formation.hide();
					$current_formation = $seven_c;
					$current_formation.show();
					seven_c_plays("1");
					make_selected("1");
				}
				else if (choice === "d") {
					$current_formation.hide();
					$current_formation = $seven_d;
					$current_formation.show();
					seven_d_plays("1");
					make_selected("1");
				}
				
			}
			
			$seven_man_formation_options.slideUp();
			
		});
	});
	
	//Plays listener
	$plays.each(function() {
		$(this).bind('vclick', function(){
			var current_formation = $current_formation.attr("id").substr(-1);
			
			//Clear the canvas of the previous play
			context.fillStyle = "#000";
			context.fillRect(0, 0, context.canvas.width, context.canvas.height);
			context.canvas.width = context.canvas.width;
			context.beginPath();

			$this = $(this);
			
			if (current_formation === "a") {
				seven_a_plays($this.text());
			}
			else if (current_formation === "b") {
				seven_b_plays($this.text());
			}
			else if (current_formation === "c") {
				seven_c_plays($this.text());
			}
			else if (current_formation === "d") {
				seven_d_plays($this.text());
			}
			
			make_selected($this.text());
		});
	});

	//Add listeners for formations actions
	$('#formations').click(function () {
		$seven_man_formation_options.slideDown();
	});
	
	$seven_man_formation_cancel.click(function(){
		$seven_man_formation_options.slideUp();
	});
	
	//Draw routes on canvas
	if (Modernizr.canvas) {
		seven_a_plays("1");
	}
	
});