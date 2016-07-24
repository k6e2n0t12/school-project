var basicScene = fuction (scene){
	
	console.log(scene);
	var floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(16,8,32),new THREE.MeshLambertMaterial({
	side: THREE.DoubleSide,
	color: 0xffffff
	}));
	floor.rotation.x=-Math.PI/2;
	scene.add(floor);
};
