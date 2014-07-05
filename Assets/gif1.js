#pragma strict
var deathSound : AudioClip;
var bloodFrames : Texture[];
var framesPerSecond = 10;

function Start () {
	audio.PlayOneShot(deathSound);
}
function Update () {
    var index : int = (Time.time * framesPerSecond) % bloodFrames.Length;
	renderer.material.mainTexture = bloodFrames[index];
	Debug.Log("Index: " + index);
	if(index >= bloodFrames.Length - 1) {
		Application.LoadLevel(Application.loadedLevel);
	}
}
