var BasicScene = function (scene){
	
	console.log("123");
	console.log(scene);
	this.floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(16,8,32),new THREE.MeshLambertMaterial({
		side: THREE.DoubleSide,
		color: 0xffffff
	}));
	this.floor.rotation.x=-Math.PI/2;
	scene.add(this.floor);
};
