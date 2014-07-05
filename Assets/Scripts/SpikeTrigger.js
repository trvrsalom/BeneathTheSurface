#pragma strict
var childSpike : Transform;
var isHidden = false;
function Start () {
	if(isHidden){
		childSpike.gameObject.SetActive(false);
	}
}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	Debug.Log("SPIKE!");
	if(other.gameObject.tag == "Player") {
		var deathScript = GameObject.FindGameObjectWithTag("Player").GetComponent(death);
		deathScript.kill();
		childSpike.gameObject.SetActive(true);
	}
}