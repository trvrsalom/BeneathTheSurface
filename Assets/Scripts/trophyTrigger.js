#pragma strict
var winSound : AudioClip;
function Start () {

}

function Update () {

}

function OnTriggerEnter () {
	audio.PlayOneShot(winSound);
	Debug.Log("WIN");
	Application.LoadLevel(Application.loadedLevel + 1);
	Destroy(gameObject);
}