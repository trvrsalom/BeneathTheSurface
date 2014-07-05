#pragma strict

var lAnim : Texture[];
var rAnim : Texture[];
var still : Texture;

var framesPerSecond = 10;

function Update() {
    var index : int = (Time.time * framesPerSecond) % rAnim.Length;
	if(Input.GetKeyDown(KeyCode.A)) {
		renderer.material.mainTexture = lAnim[index];
	}
	else if(Input.GetKeyDown(KeyCode.D)) {
		renderer.material.mainTexture = rAnim[index];
	}
	else {
		renderer.material.mainTexture = still;
	}
}