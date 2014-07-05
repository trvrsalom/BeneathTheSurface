#pragma strict
var startAudio : AudioClip;
function Start () {

}

function Update () {
	if(Input.anyKey) {
		audio.PlayOneShot(startAudio);
		Application.LoadLevel(1);
	}
}