var BasicScene = function (scene){
	
	this.floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(16,8,32),new THREE.MeshLambertMaterial({
		side: THREE.DoubleSide,
		color: 0xffffff
	}));
	this.floor.rotation.x=-Math.PI/2;
	scene.add(this.floor);


	this.ballMachine = new THREE.Object3D();
	this.barrel = new THREE.Object3D();	
	var mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1, 32, 32, true), new THREE.MeshBasicMaterial({color:0xff0000, side:THREE.DoubleSide}));
	mesh.position.set(0, 0.5, 0.12);
	this.barrel.position.set(0, 0.05, 0);
	this.barrel.add(mesh);
	this.barrel.rotation.x = -Math.PI/6; 
	//barrel.rotation.z = -Math.PI/2; 
	this.ballMachine.add(this.barrel);
	scene.add(this.ballMachine);
	
	var mesh2 = new THREE.Mesh(new THREE.CylinderGeometry(0.25*Math.sqrt(2), 0.25*Math.sqrt(2), 0.1, 32), new THREE.MeshBasicMaterial());
	this.ballMachine.add(mesh2);
	var mesh3 = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.1, 32, 1, false, 0, Math.PI), new THREE.MeshBasicMaterial({color:0x000000, side:THREE.DoubleSide}));
	mesh3.rotation.z = Math.PI/2;
	var mesh4 = mesh3.clone();
	mesh3.position.set(0.2,0.05,0);
	mesh4.position.set(-0.2, 0.05, 0);
	this.ballMachine.add(mesh3);
	this.ballMachine.add(mesh4);
	this.ballMachine.position.set(-4, 0.1, 0);
	this.ballMachine.rotation.y = -Math.PI/2;
  
};
