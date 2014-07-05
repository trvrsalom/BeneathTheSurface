#pragma strict
public enum mode {Next, Restart};
public var mode : mode;
private var Next : mode;
private var Restart : mode;

function Start () {

}

function Update () {
		Debug.Log(mode);
}

function OnTriggerEnter (other : Collider) {
		if (mode == Next) {
			Application.LoadLevel(Application.loadedLevel + 1);
		}
		else {
			Application.LoadLevel(Application.loadedLevel);
		}
}