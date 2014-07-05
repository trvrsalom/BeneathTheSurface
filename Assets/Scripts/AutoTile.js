#pragma strict

var ScaleToTiles : float = 1.0;
var darkenModifier : int = 1;
private var darken : int;
function Start () {
	darken = 255 - (this.transform.position.y * darkenModifier);
    renderer.material.mainTextureScale.x = transform.lossyScale.x*ScaleToTiles;
    renderer.material.mainTextureScale.y = transform.lossyScale.y*ScaleToTiles;
    //renderer.material.SetColor("_Color", Color(darken, darken, darken, darken));
}
