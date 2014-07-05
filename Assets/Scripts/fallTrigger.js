#pragma strict
var hasFallen : boolean = false;
function Start () {
	rigidbody.useGravity = false;
}

function Update () {
	var hit : RaycastHit;
	var killHit : RaycastHit;
	if(Physics.Raycast(transform.position, -Vector3.up * 10, hit)) {
		Debug.DrawRay (transform.position, -Vector3.up * 10, Color.green);
		Debug.Log(hit.collider.gameObject.tag);
		if(hit.collider.gameObject.tag == "Player" && !hasFallen) {
			hasFallen = true;
			Debug.DrawRay (transform.position, -Vector3.up * 10, Color.red);
			fall();
		}
	}
	if(Physics.Raycast(transform.position, -Vector3.up, killHit)) {
		//Debug.DrawRay (transform.position, -Vector3.up * 10, Color.green);
		Debug.Log("Kill: " + killHit.collider.gameObject.tag);
		if(killHit.collider.gameObject.tag == "Player" && !hasFallen) {
			Debug.Log("KILLING");
			//Debug.DrawRay (transform.position, -Vector3.up * 10, Color.red);
			var deathScript = GameObject.FindGameObjectWithTag("Player").GetComponent(death);
			deathScript.kill();
		}
	}
}

function fall () {
	Debug.Log("FALLING");
	rigidbody.useGravity = true;
}
