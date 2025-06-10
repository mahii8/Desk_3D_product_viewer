function setupInteraction() {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  let INTERSECTED;

  const partNameElement = document.getElementById("part-name");
  const infoPanel = document.getElementById("info-panel");

  // Set initial message
  partNameElement.textContent = "Click any part";
  infoPanel.classList.remove("hidden"); // Show it initially

  // Mouse Move - Hover Effect
  window.addEventListener("mousemove", (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(desk.children);

    if (intersects.length > 0) {
      if (INTERSECTED !== intersects[0].object) {
        if (INTERSECTED)
          INTERSECTED.material.color.setHex(INTERSECTED.userData.originalColor);

        INTERSECTED = intersects[0].object;
        INTERSECTED.material.color.setHex(0x87ceeb); // Light blue highlight
      }
    } else {
      if (INTERSECTED)
        INTERSECTED.material.color.setHex(INTERSECTED.userData.originalColor);
      INTERSECTED = null;
    }
  });

  // Mouse Click - Show Part Name
  window.addEventListener("click", (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(desk.children);

    if (intersects.length > 0) {
      const obj = intersects[0].object;
      partNameElement.textContent = obj.userData.name;
      infoPanel.classList.remove("hidden");

      // Flash effect
      obj.material.color.setHex(0x00ff00);
      setTimeout(() => {
        obj.material.color.setHex(obj.userData.originalColor);
      }, 300);
    }
  });
}
