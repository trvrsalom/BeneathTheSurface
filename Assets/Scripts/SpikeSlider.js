#pragma strict
var slideDist : float;
var slideSpeed : float;
var isTriggered : boolean = false;
var moveOnX : boolean = false;
var moveOnY : boolean = false;
var movefwd : boolean = false;
var movebwd : boolean = false;
function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	Debug.Log("SLIDE");
	var target = transform.position.y + slideDist;
	var targetx = transform.position.x + slideDist;
	var targetxr = transform.position.x - slideDist;
	if(!isTriggered) {
		isTriggered = true;
			
		if(moveOnX && movefwd) {
		Debug.Log("Moving 1");
			for(var i = transform.position.x; transform.position.x < targetx; i++){
				transform.position = Vector3(i,transform.position.y,transform.position.z);
			}
		}
		if(moveOnX && movebwd) {
		Debug.Log("Moving 2");
		transform.position = Vector3(targetxr,transform.position.y,transform.position.z);
		}
		if(moveOnY && movefwd) {
		Debug.Log("Moving 3");
			for(var a = transform.position.y; transform.position.y < target; a++){
				transform.position = Vector3(transform.position.x,a,transform.position.z);
			}
		}
		if(moveOnY && movebwd) {
		Debug.Log("Moving 4");
			for(var z = transform.position.y; transform.position.y > -target; z++){
				transform.position = Vector3(transform.position.x,-z,transform.position.z);
			}
		}
	}
	var deathScript = GameObject.FindGameObjectWithTag("Player").GetComponent(death);
	deathScript.kill();
}