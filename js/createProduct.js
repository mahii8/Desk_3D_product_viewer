let desk;

function createProduct() {
  desk = new THREE.Group();

  const parts = [
    // Tabletop (glass)
    {
      name: "Glass Top",
      color: 0x7ec0ee,
      size: [4, 0.1, 2],
      pos: [0, 1, 0],
      transparent: true,
      opacity: 0.7,
      roughness: 0.1,
      metalness: 0.9,
    },
    // Metal frame
    {
      name: "Metal Frame",
      color: 0x333333,
      size: [3.8, 0.05, 1.8],
      pos: [0, 0.9, 0],
      roughness: 0.3,
      metalness: 0.8,
    },
    // Front legs
    {
      name: "Front Left Leg",
      color: 0x555555,
      size: [0.15, 1.8, 0.15],
      pos: [1.7, 0, -0.8],
      roughness: 0.2,
      metalness: 0.7,
    },
    {
      name: "Front Right Leg",
      color: 0x555555,
      size: [0.15, 1.8, 0.15],
      pos: [-1.7, 0, -0.8],
      roughness: 0.2,
      metalness: 0.7,
    },
    // Back legs
    {
      name: "Back Left Leg",
      color: 0x555555,
      size: [0.15, 1.8, 0.15],
      pos: [1.7, 0, 0.8],
      roughness: 0.2,
      metalness: 0.7,
    },
    {
      name: "Back Right Leg",
      color: 0x555555,
      size: [0.15, 1.8, 0.15],
      pos: [-1.7, 0, 0.8],
      roughness: 0.2,
      metalness: 0.7,
    },
  ];

  parts.forEach((part) => {
    const geometry = new THREE.BoxGeometry(...part.size);
    const material = new THREE.MeshStandardMaterial({
      color: part.color,
      transparent: part.transparent || false,
      opacity: part.opacity || 1,
      roughness: part.roughness || 0.4,
      metalness: part.metalness || 0.1,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...part.pos);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = { name: part.name, originalColor: part.color };
    desk.add(mesh);
  });

  scene.add(desk);
}
