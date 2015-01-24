#pragma strict

function Start () {
	
}

function Update () {
 if (Input.GetKey(KeyCode.Escape))
     Screen.lockCursor = false;
 else
     Screen.lockCursor = true;
}