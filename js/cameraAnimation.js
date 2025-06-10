function animateCamera() {
  function animate() {
    requestAnimationFrame(animate);
    controls.update(); // for autoRotate
    renderer.render(scene, camera);
  }

  animate();
}
