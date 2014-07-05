#pragma strict
var bloodSplat : Transform;

function kill () {
	Debug.Log("Dead");
	Instantiate(bloodSplat, Vector3(transform.position.x, transform.position.y, transform.position.z - 1), Quaternion.AngleAxis(-90, Vector3.right));
	Destroy(gameObject);
}